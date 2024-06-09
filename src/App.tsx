import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navigation/NavBar';
import './localization/localization';
import HomePage from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { useThemeStore } from './store/themeStore/themeStore';
import { darkTheme, lightTheme } from './theme/theme';
import NotFound from './pages/NotFound'

const App = () => {
  const themeMode = useThemeStore((set) => set.theme);

  const selectedTheme = themeMode === 'light' ? lightTheme : darkTheme;

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
