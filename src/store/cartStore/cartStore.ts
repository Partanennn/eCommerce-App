import { create } from 'zustand';

interface CartStore {
  itemCount: number;
  items: string[];
  addItem: (newItem: string) => void;
  removeItem: (item: string) => void;
  resetCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  itemCount: 0,
  items: [],
  addItem: (newItem) =>
    set((state) => ({
      items: [...state.items, newItem],
    })),
  removeItem: (item: string) => set(() => ({})),
  resetCart: () =>
    set(() => ({
      items: [],
    })),
}));
