"use client";
import Button from "../ui/Button";
import Link from "next/link";
import { useCart } from "@/app/_lib/stores";

export default function OrderSummary() {
  const { subtotal, shipping, tax, total } = useCart();
  return (
    <section>
      <h2 className="mb-4">Order Summary</h2>
      <div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="text-right font-bold">{subtotal().toFixed(2)}kr</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p className="text-right font-bold">{shipping().toFixed(2)}kr</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p className="text-right font-bold">
            {(subtotal() * tax).toFixed(2)}kr
          </p>
        </div>
      </div>
      <hr className="my-4 text-stone-300" />
      <div className="flex justify-between font-bold mt-4">
        <p>Total</p>
        <p className="text-right">{total().toFixed(2)}kr</p>
      </div>
      <div className="flex flex-col gap-4 items-center mt-10">
        <Button
          variant={"Medium"}
          color={"Primary"}
          width={"Full"}
          href="/cart/success"
        >
          Checkout
        </Button>
        <Link href="/" className="text-primary underline">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
