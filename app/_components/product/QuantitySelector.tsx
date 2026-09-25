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
  const quantityValueClass =
    "px-2 py-1 border border-stone-300 border-1.5 bg-white w-10 h-10 flex items-center justify-center rounded";
  const buttonClass =
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-stone-500 text-stone-500 hover:text-red-800 cursor-pointer";
  return (
    <div className="flex flex-row items-center gap-2">
      <p className="text-stone-500 font-medium">Quantity:</p>
      <button
        onClick={() => setQuantity(Math.max(quantity - 1, minQuantity))}
        className={buttonClass}
        disabled={quantity <= minQuantity}
      >
        <SquareMinus size={32} strokeWidth={1.5} />
      </button>
      <span className={quantityValueClass}>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)} className={buttonClass}>
        <SquarePlus size={32} strokeWidth={1.5} />
      </button>
    </div>
  );
}
