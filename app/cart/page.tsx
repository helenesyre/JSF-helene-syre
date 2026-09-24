import { Trash } from "lucide-react";
import Button from "../_components/ui/Button";
import Link from "next/link";

export default function Cart() {
  return (
    <div className="py-8 px-12">
      <h1 className="mb-8">Your Cart</h1>
      <div className="grid grid-cols-2 gap-16">
        {/* Cart items will be listed here */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4 p-4 bg-stone-50 shadow-md rounded-lg">
            <div className="flex items-center justify-center w-24 h-24 bg-gray-200">
              Image
            </div>
            <div className="flex-1">
              <h3>Product Name</h3>
              <p>0.00kr</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 bg-gray-300">-</button>
              <p>1</p>
              <button className="px-2 py-1 bg-gray-300">+</button>
            </div>
            <Trash
              size={20}
              strokeWidth={1.5}
              className="text-red-700 cursor-pointer"
            />
          </div>
          <div className="flex flex-row items-center gap-4 p-4 bg-stone-50 shadow-md rounded-lg">
            <div className="flex items-center justify-center w-24 h-24 bg-gray-200">
              Image
            </div>
            <div className="flex-1">
              <h3>Product Name</h3>
              <p>0.00kr</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 bg-gray-300">-</button>
              <p>1</p>
              <button className="px-2 py-1 bg-gray-300">+</button>
            </div>
            <Trash
              size={20}
              strokeWidth={1.5}
              className="text-red-700 cursor-pointer"
            />
          </div>
        </section>
        {/* Order summary will be displayed here */}
        <section>
          <h2 className="mb-4">Order Summary</h2>
          <div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="text-right font-bold">0.00kr</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p className="text-right font-bold">0.00kr</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p className="text-right font-bold">0.00kr</p>
            </div>
          </div>
          <hr className="my-4 text-stone-300" />
          <div className="flex justify-between font-bold mt-4">
            <p>Total</p>
            <p className="text-right">0.00kr</p>
          </div>
          <div className="flex flex-col gap-4 items-center mt-10">
            <Button
              variant={"Medium"}
              color={"Primary"}
              width={"Full"}
              href="/cart/payment"
            >
              Checkout
            </Button>
            <Link href="/" className="text-primary underline">
              Continue Shopping
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
