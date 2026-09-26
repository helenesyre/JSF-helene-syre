"use client";
import { useState } from "react";
import ProductGrid from "./ProductGrid";
import Pagination from "../Pagination";
import { ProductResponse } from "@/app/_lib/types";
import { useQuery } from "@tanstack/react-query";
import ProductGridSkeleton from "../skeleton/ProductGridSkeleton";

export default function ProductSectionGrid({
  userQuery,
}: {
  userQuery: string;
}) {
  const [productPage, setProductPage] = useState(1);
  const productsPerPage = 8;

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
    queryFn: () => fetchProducts(productsPerPage, productPage),
  });

  const { data: searchData } = useQuery<ProductResponse>({
    queryKey: ["productData", productPage],
    queryFn: () => fetchProducts(50, productPage),
  });

  // skeleton loader for loading state
  if (isLoading)
    return <ProductGridSkeleton productsPerPage={productsPerPage} />;

  if (error) return <p>Error loading products</p>;

  if (!productData?.data) return <p>No products found</p>;

  if (searchData?.data && userQuery.length > 0)
    return (
      <div className="flex flex-col gap-14 items-center">
        <ProductGrid
          products={searchData.data.filter((product) =>
            product.title.toLowerCase().includes(userQuery.toLowerCase()),
          )}
        />
      </div>
    );

  return (
    <div className="flex flex-col gap-14 items-center">
      {productData.data ? (
        <ProductGrid
          products={productData.data.filter((product) =>
            product.title.toLowerCase().includes(userQuery.toLowerCase()),
          )}
        />
      ) : (
        <span className="text-stone-500 col-span-full">No products found</span>
      )}
      <Pagination
        page={productPage}
        pageCount={productData.meta.pageCount ?? 1}
        setPage={setProductPage}
      />
    </div>
  );
}
