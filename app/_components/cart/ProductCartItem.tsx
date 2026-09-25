import { CartProduct } from "@/app/_lib/stores";
import { Trash } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ProductCartItem({
  product,
  onRemove,
  onIncrease,
  onDecrease,
}: {
  product: CartProduct;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div className="flex flex-row items-center gap-4 p-4 bg-stone-50 shadow-md rounded-lg">
      <div className="w-20 h-20 relative">
        <Image
          src={product.image.url}
          alt={product.image.alt ?? product.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3>{product.title}</h3>
        <p>{product.price.toFixed(2)}kr</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onDecrease} className="px-2 py-1 bg-gray-300">
          -
        </button>
        <p>{product.quantity}</p>
        <button onClick={onIncrease} className="px-2 py-1 bg-gray-300">
          +
        </button>
      </div>
      <button onClick={onRemove}>
        <Trash
          size={20}
          strokeWidth={1.5}
          className="text-red-700 cursor-pointer"
        />
      </button>
    </div>
  );
}
