"use client";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "./_components/product/ProductGrid";
import { ProductResponse } from "./_lib/types";
import { useState } from "react";
import Pagination from "./_components/Pagination";

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

  return (
    <div>
      <section className="h-72 py-8">
        <h1>Hero section</h1>
      </section>

      <section className="py-14">
        <h2>Our Products</h2>
        <div className="flex flex-col gap-14 items-center">
          {productData?.data ? (
            <ProductGrid products={productData?.data} />
          ) : (
            "No products found"
          )}
          <Pagination
            page={productPage}
            pageCount={productData?.meta?.totalCount ?? 1}
            setPage={setProductPage}
          />
        </div>
      </section>
    </div>
  );
}
