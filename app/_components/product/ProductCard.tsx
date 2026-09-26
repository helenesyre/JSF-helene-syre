"use client";
import { Product } from "@/app/_lib/types";
import Image from "next/image";
import { BadgePercent, ShoppingBag } from "lucide-react";
import StarRating from "@/app/_components/ui/StarRating";
import Tag from "@/app/_components/ui/Tags";
import { calculateDiscountPercentage } from "@/app/_lib/utils";
import { useCart } from "@/app/_lib/stores";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { addProduct } = useCart();
  return (
    <div className="flex flex-col justify-between rounded-b-md bg-stone-50 shadow-sm hover:shadow-md hover:scale-102 duration-300">
      <a href={`/product/${product.id}`}>
        <div className="relative">
          {/* Image */}
          <div className="relative w-auto h-72 sm:h-80 md:h-64 lg:h-88">
            <Image
              src={product.image.url}
              alt={product.image.alt ?? product.title}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
              className="object-cover"
              loading={priority ? "eager" : "lazy"}
            />
          </div>
          {/* Sales tag */}
          {product.discountedPrice !== null &&
            product.discountedPrice < product.price && (
              <Tag
                variant="Medium"
                color="Primary"
                className="absolute top-4 right-4"
                prefix={<BadgePercent size={18} />}
              >
                {calculateDiscountPercentage(
                  product.price,
                  product.discountedPrice,
                )}
                %
              </Tag>
            )}
        </div>
        {/* Content */}
        <div className="p-4 flex-1">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} size={16} />
            <p className="text-sm font-semibold text-stone-500">
              {product.rating.toFixed(1)}
            </p>
          </div>
          {/* Title */}
          <h3 className="mt-3 mb-2">{product.title}</h3>
          {/* Description */}
          <p className="text-base text-stone-500 line-clamp-2">
            {product.description}
          </p>
        </div>
      </a>
      <div className="flex items-center justify-between p-4 border-t border-stone-300">
        {/* Price */}
        <div className="text-xl sm:text-lg md:text-xl font-bold">
          {product.discountedPrice !== null &&
          product.discountedPrice < product.price ? (
            <div className="flex flex-row md:flex-col lg:flex-row items-start gap-2 md:gap-0 lg:gap-2">
              <span className=" text-red-900">{product.discountedPrice}kr</span>
              <span className="text-stone-400 line-through">
                {product.price}kr
              </span>
            </div>
          ) : (
            <span>{product.price}kr</span>
          )}
        </div>
        {/* Cart button */}
        <button
          className="group p-1.5 rounded text-stone-800 hover:bg-red-900 hover:text-stone-50 duration-300 cursor-pointer"
          onClick={() => addProduct(product)}
        >
          <ShoppingBag
            size={24}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
        </button>
      </div>
    </div>
  );
}
