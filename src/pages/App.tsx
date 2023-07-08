import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route element={'/404'} />
      </Routes>
    </BrowserRouter>
  );
};
