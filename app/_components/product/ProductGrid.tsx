import { Product } from "@/app/_lib/types";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.length > 0
        ? products.map((product, index) => {
            return (
              <ProductCard
                product={product}
                priority={index < 4}
                key={product.id}
              />
            );
          })
        : "No products"}
    </div>
  );
}
