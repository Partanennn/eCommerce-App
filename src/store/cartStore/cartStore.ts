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
      itemCount: state.itemCount + 1,
    })),
  removeItem: (item: string) =>
    set((state) => {
      const index = state.items.indexOf(item);
      if (index >= 0) {
        const newItems = [...state.items];
        newItems.splice(index, 1);
        return {
          items: newItems,
          itemCount: newItems.length,
        };
      }
      return {};
    }),
  resetCart: () =>
    set(() => ({
      items: [],
      itemCount: 0,
    })),
}));
