import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, ProductVariant } from '../types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number, variantId?: string) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: Product, quantity = 1, variantId?: string) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item: CartItem) => item.product.id === product.id && item.variantId === variantId
          );

          if (existingItemIndex >= 0) {
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += quantity;
            return { items: newItems, isOpen: true };
          }

          return {
            items: [...state.items, { product, quantity, variantId }],
            isOpen: true
          };
        });
      },

      removeItem: (productId: string, variantId?: string) => {
        set((state) => ({
          items: state.items.filter(
            (item: CartItem) => !(item.product.id === productId && item.variantId === variantId)
          )
        }));
      },

      updateQuantity: (productId: string, quantity: number, variantId?: string) => {
        if (quantity <= 0) {
          get().removeItem(productId, variantId);
          return;
        }

        set((state) => ({
          items: state.items.map((item: CartItem) =>
            item.product.id === productId && item.variantId === variantId
              ? { ...item, quantity }
              : item
          )
        }));
      },

      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      getTotal: () => {
        return get().items.reduce((total: number, item: CartItem) => {
          const price = item.variantId
            ? item.product.variants?.find((v: ProductVariant) => v.id === item.variantId)?.price || item.product.price
            : item.product.price;
          return total + price * item.quantity;
        }, 0);
      }
    }),
    {
      name: 'chadframed-cart',
      partialize: (state: CartState) => ({ items: state.items })
    }
  )
);
