import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import './localization/localization';
import HomePage from './pages/Home/HomePage';
import theme from './theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<div>Test</div>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
