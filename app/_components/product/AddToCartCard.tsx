import { Product } from "@/app/_lib/types";
import QuantitySelector from "./QuantitySelector";
import Image from "next/image";
import Button from "../ui/Button";
import { useState } from "react";
import { useCart } from "@/app/_lib/stores";

export default function AddToCartCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(1);

  const { addProduct } = useCart();

  return (
    <div className="sticky bottom-8 col-span-2 m-8 bg-stone-50 p-4 shadow-md rounded-md flex justify-between items-center">
      <div className="flex flex-row items-center gap-4">
        {/* Product image */}
        <div className="w-20 h-20 relative">
          <Image
            src={product.image.url}
            alt={product.image.alt ?? product.title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          {/* Product title */}
          <h2 className="text-2xl">{product.title}</h2>
          {/* Product tag */}
          <span className="uppercase text-red-900 font-semibold">
            {product.tags.join(" & ")}
          </span>
        </div>
      </div>
      {/* Quantity and Add to Cart */}
      <div className="flex flex-row items-center gap-10">
        {/* Quantity selector */}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button
          variant={"Medium"}
          color={"Primary"}
          onClick={() => addProduct(product, quantity)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
