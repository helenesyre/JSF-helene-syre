import { create } from "zustand";
import { Product } from "./types";

import { persist, createJSONStorage } from "zustand/middleware";

export type CartProduct = Product & {
  quantity: number;
};

export type Cart = {
  products: CartProduct[];
  cartItemCount: () => number;
  addProduct: (newProduct: Product, quantity?: number) => void;
  increaseQuantity: (product: Product, quantity?: number) => void;
  decreaseQuantity: (product: Product, quantity?: number) => void;
  removeProduct: (productToRemove: Product) => void;
  updateProducts: (newProducts: CartProduct[]) => void;
  clearCart: () => void;
  subtotal: () => number;
  shipping: () => number;
  tax: number;
  total: () => number;
};

export const useCart = create<Cart>()(
  persist(
    (set, get) => ({
      products: [],
      cartItemCount: () =>
        get().products.reduce((count, product) => count + product.quantity, 0),
      addProduct: (newProduct: Product, quantity: number = 1) => {
        if (quantity <= 0) return;
        set((state) => ({
          products: state.products.some(
            (product) => product.id === newProduct.id,
          )
            ? state.products.map((product) =>
                product.id === newProduct.id
                  ? { ...product, quantity: product.quantity + quantity }
                  : product,
              )
            : [...state.products, { ...newProduct, quantity }],
        }));
      },
      increaseQuantity: (product: Product, quantity: number = 1) =>
        set((state) => ({
          products: state.products.map((stateProduct) =>
            stateProduct.id === product.id
              ? { ...stateProduct, quantity: stateProduct.quantity + quantity }
              : stateProduct,
          ),
        })),
      decreaseQuantity: (product: Product, quantity: number = 1) =>
        set((state) => ({
          products: state.products
            .map((stateProduct) =>
              stateProduct.id === product.id
                ? (() => {
                    if (stateProduct.quantity - quantity <= 0) {
                      return null;
                    }
                    return {
                      ...stateProduct,
                      quantity: Math.max(stateProduct.quantity - quantity, 0),
                    };
                  })()
                : stateProduct,
            )
            .filter((product) => product !== null),
        })),
      removeProduct: (productToRemove: Product) =>
        set((state) => ({
          products: state.products.filter(
            (product) => product.id !== productToRemove.id,
          ),
        })),
      updateProducts: (newProducts: CartProduct[]) =>
        set({ products: newProducts }),
      subtotal: () =>
        get().products.reduce(
          (sum, product) => sum + product.quantity * product.price,
          0,
        ),
      shipping: () => (get().products.length > 0 ? 100 : 0),
      tax: 0.25,
      total: () =>
        get().subtotal() + get().shipping() + get().subtotal() * get().tax,
      clearCart: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
