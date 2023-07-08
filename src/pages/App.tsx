import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={'/'} />
      </Routes>
    </BrowserRouter>
  );
};
