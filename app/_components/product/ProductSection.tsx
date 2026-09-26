"use client";
import { useState } from "react";
import ProductSectionGrid from "./ProductSectionGrid";

// Product section component
export default function ProductSection() {
  // State to track the user's search query
  const [userQuery, setUserQuery] = useState("");
  return (
    <section className="px-6 py-12 md:px-12">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        {/* Section title */}
        <h2 className="mb-4">Our Products</h2>
        <div className="mb-4">
          {/* Search input */}
          <label htmlFor="search" className="sr-only">
            Search products
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search products..."
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            className="border border-stone-300 rounded p-2 w-full md:w-72"
          />
        </div>
      </div>
      {/* Product grid */}
      <ProductSectionGrid userQuery={userQuery} />
    </section>
  );
}
