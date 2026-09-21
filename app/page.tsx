"use client";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "./_components/product/ProductGrid";
import { ProductResponse } from "./_lib/types";
import { useState } from "react";
import Pagination from "./_components/Pagination";
import Image from "next/image";

export default function Home() {
  const [productPage, setProductPage] = useState(1);
  function fetchProducts(limit: number, page: number) {
    return fetch(
      `https://v2.api.noroff.dev/online-shop?limit=${limit}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    ).then((res) => res.json());
  }

  const {
    isLoading,
    error,
    data: productData,
  } = useQuery<ProductResponse>({
    queryKey: ["productData", productPage],
    queryFn: () => fetchProducts(8, productPage),
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error loading products</p>;

  if (!productData?.data) return <p>No products found</p>;

  return (
    <div>
      <section className="relative h-96 p-12">
        {/* Hero image */}
        <Image
          src="/images/home-hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-900 opacity-80"></div>
        {/* Hero title and description */}
        <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center text-center">
          <h1 className="relative text-4xl font-bold text-stone-50">
            Welcome to Our Online Shop
          </h1>
          <p className="relative text-lg text-stone-400">
            Discover our wide range of products and enjoy a seamless shopping
            flow.
          </p>
        </div>
      </section>

      <section className="p-12">
        <div className="flex flex-row justify-between items-center">
          {/* Section title */}
          <h2 className="mb-4">Our Products</h2>
          {/* Search and filter inputs will go here */}
          <div className="mb-4">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search products..."
              className="border border-stone-300 rounded p-2 w-full"
            />
          </div>
        </div>
        {/* Product grid */}
        <div className="flex flex-col gap-14 items-center">
          {productData?.data ? (
            <ProductGrid products={productData.data} />
          ) : (
            "No products found"
          )}
          <Pagination
            page={productPage}
            pageCount={productData.meta.pageCount ?? 1}
            setPage={setProductPage}
          />
        </div>
      </section>
    </div>
  );
}
