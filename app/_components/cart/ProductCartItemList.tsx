"use client";

import { Cart, useCart } from "@/app/_lib/stores";
import ProductCartItem from "./ProductCartItem";

export default function ProductCartItemList() {
  const { products, cartItemCount, removeProduct } = useCart();
  const hasItems = cartItemCount() > 0;

  if (!hasItems) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <section className="flex flex-col gap-4">
      {products.map((product) => (
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
