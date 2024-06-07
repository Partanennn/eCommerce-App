import { create } from 'zustand';
import { IProduct } from '../../api/products/getProduct';

interface CartStore {
  itemCount: number;
  items: IProduct[];
  addItem: (newItem: IProduct) => void;
  removeItem: (item: IProduct) => void;
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
  removeItem: (item) =>
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
