import { SquareMinus, SquarePlus } from "lucide-react";

export default function QuantitySelector({
  quantity,
  setQuantity,
  minQuantity = 1,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
  minQuantity?: number;
}) {
  return (
    <div className="flex flex-row items-center gap-2">
      <p>Quantity:</p>
      <button
        onClick={() => setQuantity(Math.max(quantity - 1, minQuantity))}
        className="disabled:opacity-50 cursor-pointer"
        disabled={quantity <= minQuantity}
      >
        <SquareMinus />
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="cursor-pointer"
      >
        <SquarePlus />
      </button>
    </div>
  );
}
