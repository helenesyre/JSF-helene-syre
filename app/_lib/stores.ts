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
        // toast
        useToast.getState().addMessage({
          message: `${newProduct.title} added to cart`,
          duration: 3000,
        });
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
                      useToast.getState().addMessage({
                        message: `${stateProduct.title} removed from cart`,
                        duration: 3000,
                      });
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
        (() => {
          useToast.getState().addMessage({
            message: `${productToRemove.title} removed from cart`,
            duration: 3000,
          });
          set((state) => ({
            products: state.products.filter(
              (product) => product.id !== productToRemove.id,
            ),
          }));
        })(),
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

export type ToastMessage = {
  message: string;
  duration: number;
};

export const useToast = create<{
  messages: ToastMessage[];
  addMessage: (message: ToastMessage) => void;
  removeMessage: (index: number) => void;
  clearMessages: () => void;
}>()((set, get) => ({
  messages: [],
  addMessage: (message: ToastMessage) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
  removeMessage: (index: number) => {
    set((state) => ({
      messages: state.messages.filter((_, i) => i !== index),
    }));
  },
  clearMessages: () => {
    set({ messages: [] });
  },
}));
