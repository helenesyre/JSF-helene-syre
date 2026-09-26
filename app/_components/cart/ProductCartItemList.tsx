"use client";

import { useCart } from "@/app/_lib/stores";
import ProductCartItem from "./ProductCartItem";
import { useSyncExternalStore } from "react";

export default function ProductCartItemList() {
  const { removeProduct } = useCart();
  const products = useSyncExternalStore(
    useCart.subscribe,
    () => useCart.getState().products,
    () => null,
  );

  const cartItemCount = useSyncExternalStore(
    useCart.subscribe,
    () => useCart.getState().cartItemCount(),
    () => 0,
  );

  const hasItems = cartItemCount > 0;

  if (!products || !hasItems) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <section className="flex flex-col gap-4">
      {products?.map((product) => (
        <ProductCartItem
          key={product.id}
          product={product}
          onRemove={() => removeProduct(product)}
          onIncrease={() => useCart.getState().increaseQuantity(product)}
          onDecrease={() => useCart.getState().decreaseQuantity(product)}
        />
      ))}
    </section>
  );
}
