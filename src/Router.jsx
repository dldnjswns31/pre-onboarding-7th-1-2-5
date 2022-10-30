import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import List from './pages/List';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/issue/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
