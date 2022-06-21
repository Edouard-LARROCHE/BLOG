import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';

const Router = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default Router;
