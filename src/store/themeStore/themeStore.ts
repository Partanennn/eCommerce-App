import { create } from 'zustand';

export type ThemeModes = 'light' | 'dark';

interface ThemeState {
  theme: ThemeModes;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}));
