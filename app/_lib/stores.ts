import { create } from "zustand";
import { Product } from "./types";

import { persist, createJSONStorage } from "zustand/middleware";

// Cart product type definition
export type CartProduct = Product & {
  quantity: number;
};

// Cart store type definition
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

// Cart store with persistence
export const useCart = create<Cart>()(
  persist(
    (set, get) => ({
      // Initial state of the cart
      products: [],
      // Function to get the total number of items in the cart
      cartItemCount: () =>
        get().products.reduce((count, product) => count + product.quantity, 0),
      // Function to add a product to the cart
      addProduct: (newProduct: Product, quantity: number = 1) => {
        if (quantity <= 0) return;
        useToast.getState().addMessage({
          message: `${newProduct.title} added to cart`,
          duration: 3000,
        });
        // Update the cart state with the new product and quantity
        set((state) => ({
          // Check if the product already exists in the cart
          products: state.products.some(
            (product) => product.id === newProduct.id,
          )
            ? // If the product exists, update its quantity; otherwise, add it to the cart
              state.products.map((product) =>
                product.id === newProduct.id
                  ? { ...product, quantity: product.quantity + quantity }
                  : product,
              )
            : [...state.products, { ...newProduct, quantity }],
        }));
      },
      // Increase the quantity of a product in the cart
      increaseQuantity: (product: Product, quantity: number = 1) =>
        set((state) => ({
          products: state.products.map((stateProduct) =>
            stateProduct.id === product.id
              ? { ...stateProduct, quantity: stateProduct.quantity + quantity }
              : stateProduct,
          ),
        })),
      // Decrease the quantity of a product in the cart
      decreaseQuantity: (product: Product, quantity: number = 1) =>
        set((state) => ({
          products: state.products
            .map((stateProduct) =>
              stateProduct.id === product.id
                ? (() => {
                    // If the resulting quantity is less than or equal to 0, remove the product from the cart
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
      // Remove a product from the cart
      removeProduct: (productToRemove: Product) =>
        (() => {
          useToast.getState().addMessage({
            message: `${productToRemove.title} removed from cart`,
            duration: 3000,
          });
          // Update the cart state by removing the specified product
          set((state) => ({
            products: state.products.filter(
              (product) => product.id !== productToRemove.id,
            ),
          }));
        })(),
      // Update the cart with the new list of products
      updateProducts: (newProducts: CartProduct[]) =>
        set({ products: newProducts }),
      // Calculate the subtotal of the cart
      subtotal: () =>
        get().products.reduce(
          (sum, product) => sum + product.quantity * product.price,
          0,
        ),
      // Calculate the shipping cost based on the number of products in the cart
      shipping: () => (get().products.length > 0 ? 100 : 0),
      // Tax rate applied to the cart subtotal
      tax: 0.25,
      // Calculate the total cost of the cart including subtotal, shipping, and tax
      total: () =>
        get().subtotal() + get().shipping() + get().subtotal() * get().tax,
      // Clear all products from the cart
      clearCart: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// Toast message type definition
export type ToastMessage = {
  message: string;
  duration: number;
};

// Toast store
export const useToast = create<{
  messages: ToastMessage[];
  addMessage: (message: ToastMessage) => void;
  removeMessage: (index: number) => void;
  clearMessages: () => void;
}>()((set) => ({
  // Toast store state and actions
  messages: [],
  // Add a new toast message to the store
  addMessage: (message: ToastMessage) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
  // Remove a toast message from the store by its index
  removeMessage: (index: number) => {
    set((state) => ({
      messages: state.messages.filter((_, i) => i !== index),
    }));
  },
  // Clear all toast messages from the store
  clearMessages: () => {
    set({ messages: [] });
  },
}));
