"use client";
import ProductPageSkeleton from "@/app/_components/skeleton/ProductPageSkeleton";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { Product } from "../../_lib/types";
import ReviewList from "@/app/_components/product/ReviewList";
import AddToCartCard from "@/app/_components/product/AddToCartCard";
import BreadCrumbs from "@/app/_components/ui/Breadcrumbs";
import { BreadCrumb, SingleProductResponse } from "../../_lib/types";
import { BadgePercent, House } from "lucide-react";
import StarRating from "@/app/_components/ui/StarRating";
import Tag from "@/app/_components/ui/Tags";
import { calculateDiscountPercentage } from "@/app/_lib/utils";
import CallToAction from "@/app/_components/product/CallToAction";

export default function Product() {
  const params = useParams();
  const productId = params.product_id as string;
  const darkIds = [
    "83111322-05a9-4a93-bc81-7d6b58f1a707",
    "f6712e3b-8050-4841-bd64-f332a48f7566",
    "f5d453d1-e811-4225-81ac-cee54ef0384b",
  ];

  function fetchProductById(productId: string) {
    return fetch(`https://v2.api.noroff.dev/online-shop/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  const {
    isLoading,
    error,
    data: productResponse,
  } = useQuery<SingleProductResponse>({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId || ""),
  });

  if (isLoading) return <ProductPageSkeleton />;

  if (error) return <p>Error loading product</p>;

  if (!productResponse) return <p>Product not found</p>;

  const product = productResponse.data;

  const breadCrumbs: BreadCrumb[] = [
    {
      label: <House />,
      link: "/",
    },
    { label: product?.title },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative">
      {/* Image Section */}
      <section className="relative w-full h-80 lg:h-screen">
        {/* Product Image */}
        <Image
          src={product.image.url}
          alt={product.image.alt ?? product.title}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Breadcrumbs */}
        <BreadCrumbs crumbs={breadCrumbs} dark={darkIds.includes(productId)} />
      </section>
      {/* Product Details Section */}
      <section className="min-w-0 px-6 md:px-12 2xl:px-32 py-12">
        <div className="flex flex-col gap-1 mb-3">
          {/* Sales tag */}
          {product.discountedPrice !== null &&
            product.discountedPrice < product.price && (
              <Tag
                variant="Medium"
                color="Primary"
                prefix={<BadgePercent size={18} />}
              >
                {calculateDiscountPercentage(
                  product.price,
                  product.discountedPrice,
                )}
                %
              </Tag>
            )}
          {/* Product Title */}
          <h1>{product.title}</h1>
          {/* Price Section */}
          <div className="text-3xl font-bold">
            {product.discountedPrice !== null &&
            product.discountedPrice < product.price ? (
              <>
                <span className=" text-red-900">
                  {product.discountedPrice}kr
                </span>
                <span className="text-stone-400 ml-2 line-through">
                  {product.price}kr
                </span>
              </>
            ) : (
              <span>{product.price}kr</span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 mb-6">
          {/* Tags */}
          <span className="uppercase text-red-900 font-semibold">
            {product.tags.join(" & ")}
          </span>
          <p className="hidden md:block text-stone-300 font-semibold">|</p>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} size={20} />
            <p className="text-stone-500 font-semibold">{product.rating}</p>
          </div>
        </div>
        {/* Description */}
        <div className="mb-4">
          <p className="text-lg font-bold mb-2">Description:</p>
          <ul className="list-disc pl-5">
            <li>{product.description}</li>
          </ul>
        </div>
        {/* Reviews */}
        <div>
          <p className="text-lg font-bold mb-2">Reviews:</p>
          <ReviewList reviews={product.reviews} />
        </div>
      </section>
      {/* Add to cart */}
      <div className="sticky bottom-8 col-span-1 lg:col-span-2">
        <AddToCartCard product={product} />
      </div>
      <section className="col-span-1 lg:col-span-2">
        <CallToAction />
      </section>
    </div>
  );
}
