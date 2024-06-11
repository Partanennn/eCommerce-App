import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { getCategories } from './api/categories/getCategories';
import NavBar from './components/navigation/NavBar';
import './localization/localization';
import HomePage from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { categoriesStore } from './store/categoriesStore/categoriesStore';
import { useThemeStore } from './store/themeStore/themeStore';
import { darkTheme, lightTheme } from './theme/theme';
import NotFound from './pages/NotFound'

const App = () => {
  const themeMode = useThemeStore((set) => set.theme);

  const selectedTheme = themeMode === 'light' ? lightTheme : darkTheme;
  const setCategories = categoriesStore((set) => set.setCategories);

  const { data, isLoading, error } = useQuery({
    queryKey: ['categries'],
    queryFn: () => getCategories(),
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      setCategories(data);
    }
  }, [data]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
