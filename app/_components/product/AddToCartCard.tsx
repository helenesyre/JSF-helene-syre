import { Product } from "@/app/_lib/types";
import { SquareMinus, SquarePlus } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

export default function AddToCartCard({ product }: { product: Product }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-50 p-4 m-8 shadow-md rounded-md flex justify-between items-center">
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
        <div className="flex flex-row items-center gap-2">
          <p>Quantity:</p>
          <span>
            <SquareMinus />
          </span>
          <span>1</span>
          <span>
            <SquarePlus />
          </span>
        </div>
        <Button variant={"Medium"} color={"Primary"}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
