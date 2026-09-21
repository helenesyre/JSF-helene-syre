"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import type { Product } from "../../_lib/types";
import ReviewList from "@/app/_components/product/ReviewList";
import AddToCartCard from "@/app/_components/product/AddToCartCard";
import BreadCrumbs from "@/app/_components/ui/Breadcrumbs";
import { BreadCrumb, SingleProductResponse } from "../../_lib/types";
import { House } from "lucide-react";

export default function Product() {
  const params = useParams();
  const productId = params.product_id as string;

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

  if (isLoading) return <p>Loading...</p>;

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
    <div className="flex flex-row gap-4 relative">
      {/* Image Section */}
      <section className="relative aspect-square w-full flex-1">
        {/* Product Image */}
        <Image
          src={product.image.url}
          alt={product.image.alt ?? product.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        {/* Breadcrumbs */}
        <BreadCrumbs crumbs={breadCrumbs} />
      </section>
      {/* Product Details Section */}
      <section className="flex-1 py-12">
        {/* Product Title */}
        <h1>{product.title}</h1>
        {/* Price Section */}
        <div className="text-3xl font-bold">
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
        <div className="flex flex-row gap-4 mb-4">
          {/* Tags */}
          <span className="uppercase text-red-900 font-semibold">
            {product.tags.join(" & ")}
          </span>
          <p className="text-stone-300 font-semibold">|</p>
          {/* Rating */}
          <p className="text-stone-500 font-semibold">
            {product.rating} reviews
          </p>
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
      <AddToCartCard product={product} />
    </div>
  );
}
