import { Product } from "@/app/_lib/types";
import ProductCard from "./ProductCard";

// Product grid component
export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Render the product cards if there are products available */}
      {products.length > 0 ? (
        products.map((product, index) => {
          return (
            <ProductCard
              product={product}
              priority={index < 4}
              key={product.id}
            />
          );
        })
      ) : (
        <span className="text-stone-500 col-span-full">No products</span>
      )}
    </div>
  );
}
