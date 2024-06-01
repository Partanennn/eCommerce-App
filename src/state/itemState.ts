import { create } from 'zustand';

interface ItemState {
  itemCount: number;
  increase: (increasment: number) => void;
}

export const useItemStore = create<ItemState>((set) => ({
  itemCount: 0,
  increase: (increasment) =>
    set((state) => ({ itemCount: state.itemCount + increasment })),
}));
