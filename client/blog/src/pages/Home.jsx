import React from 'react';
import Register from '../components/Log/Register';
import Login from '../components/Log/Login';
import GetPost from '../components/Post/GetPost';

const Home = () => {
  return (
    <div className='home-blog'>
      <Register />
      <Login />

      <GetPost />
    </div>
  );
};

export default Home;
