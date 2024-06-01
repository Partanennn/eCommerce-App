import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ContentContainer } from './components/ContentContainer';
import NavBar from './components/navigation/NavBar';
import './localization/localization';
import HomePage from './pages/Home/HomePage';
import { useThemeStore } from './state/themeStore';
import { darkTheme, lightTheme } from './theme/theme';

const App = () => {
  const themeMode = useThemeStore((set) => set.theme);

  const selectedTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ContentContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
