"use client";
import { useState } from "react";
import ProductGrid from "./ProductGrid";
import Pagination from "../Pagination";
import { ProductResponse } from "@/app/_lib/types";
import { useQuery } from "@tanstack/react-query";
import ProductGridSkeleton from "../skeleton/ProductGridSkeleton";

// Product section grid component
export default function ProductSectionGrid({
  userQuery,
}: {
  userQuery: string;
}) {
  // State to track the current product page
  const [productPage, setProductPage] = useState(1);
  // Number of products to display per page
  const productsPerPage = 8;

  /**
   * Fetches products from the API based on the specified limit and page.
   * @param limit Number of products to fetch per page
   * @param page Current page number
   * @returns A promise resolving to the fetched product data
   */
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

  // Fetch product data using TanStack Query
  const {
    isLoading,
    error,
    data: productData,
  } = useQuery<ProductResponse>({
    queryKey: ["productData", productPage],
    queryFn: () => fetchProducts(productsPerPage, productPage),
  });

  // Fetch all products for search functionality
  const { data: searchData } = useQuery<ProductResponse>({
    queryKey: ["searchData", productPage],
    queryFn: () => fetchProducts(50, productPage),
  });

  // Skeleton loader for loading state
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
      {/* Render the product grid if product data is available */}
      {productData.data ? (
        <ProductGrid
          products={productData.data.filter((product) =>
            product.title.toLowerCase().includes(userQuery.toLowerCase()),
          )}
        />
      ) : (
        <span className="text-stone-500 col-span-full">No products found</span>
      )}
      {/* Render the pagination controls */}
      <Pagination
        page={productPage}
        pageCount={productData.meta.pageCount ?? 1}
        setPage={setProductPage}
      />
    </div>
  );
}
