"use client";
import { useEffect } from "react";
import { CreditCardCheck } from "lucide-react";
import Button from "../../_components/ui/Button";
import { useCart } from "@/app/_lib/stores";

// Success page
export default function Success() {
  // Access the clearCart function from the cart store
  const { clearCart } = useCart();
  // Clear the cart when the success page is loaded
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center gap-8 p-14 bg-stone-50 rounded shadow-md">
        <CreditCardCheck
          className="bg-emerald-100 text-emerald-600 p-4 rounded-full"
          size={72}
          strokeWidth={1.5}
        />
        <div className="flex flex-col items-center gap-2">
          <h1>Order Successful!</h1>
          <p>
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant={"Medium"} color={"Primary"} href="/">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
