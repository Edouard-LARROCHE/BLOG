import React from 'react';
import GetPost from '../components/Post/GetPost';
import GetUsers from '../components/Users/GetUsers';

const Home = () => {
  return (
    <div className='home-blog'>
      <GetPost />
      <GetUsers />
    </div>
  );
};

export default Home;
