import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

const App = () => (
  <BrowserRouter>
    {/* NAV */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<div>Test</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
