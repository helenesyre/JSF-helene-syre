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
    <div className="mb-8 mt-0 mx-4 md:mx-8 bg-stone-50 p-4 shadow-md rounded-md flex flex-col md:flex-row gap-4 justify-between md:items-center">
      <div className="flex flex-row md:items-center gap-4">
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
          <div className="block md:hidden">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
        </div>
      </div>
      {/* Quantity and Add to Cart */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full md:w-auto">
        {/* Quantity selector */}
        <div className="hidden md:block">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
        <Button
          variant={"Medium"}
          color={"Primary"}
          className="w-full md:w-auto"
          onClick={() => addProduct(product, quantity)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
