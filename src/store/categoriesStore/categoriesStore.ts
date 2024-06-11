import { create } from 'zustand';
import { translateWordsToTranslationKey } from '../../utils/navBarHelpers';

interface ICategoriesStore {
  categories: string[];
  setCategories: (newCategories: string[]) => void;
}

export const categoriesStore = create<ICategoriesStore>((set) => ({
  categories: [],
  setCategories: (categories) =>
    set(() => ({
      categories: translateWordsToTranslationKey(categories),
    })),
}));
