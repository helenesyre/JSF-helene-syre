import { Product } from "@/app/_lib/types";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <div className="flex flex-col justify-between rounded-b-md bg-stone-50 shadow-sm hover:shadow-md hover:scale-102 duration-300">
      {/* Image */}
      <a href={`/product/${product.id}`}>
        <div className="relative aspect-square w-full">
          <Image
            src={product.image.url}
            alt={product.image.alt ?? product.title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
            className="object-cover"
            loading={priority ? "eager" : "lazy"}
          />
        </div>
        {/* Content */}
        <div className="p-4 flex-1">
          {/* Rating */}
          <p className="text-sm text-stone-400">{product.rating}</p>
          {/* Title */}
          <h3>{product.title}</h3>
          {/* Description */}
          <p className="text-base text-stone-500 line-clamp-2">
            {product.description}
          </p>
        </div>
      </a>
      <div className="flex items-center justify-between p-4 border-t border-stone-300">
        {/* Price */}
        <div className="text-xl font-bold">
          {product.discountedPrice !== null &&
          product.discountedPrice < product.price ? (
            <>
              <span className=" text-red-900">${product.discountedPrice}</span>
              <span className="text-stone-400 ml-2 line-through">
                ${product.price}
              </span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </div>
        {/* Cart button */}
        <button className="group p-1.5 rounded text-stone-800 hover:bg-red-900 hover:text-stone-50 duration-300 cursor-pointer">
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
