import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default Router;
