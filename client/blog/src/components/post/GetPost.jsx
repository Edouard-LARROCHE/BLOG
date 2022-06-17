import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPostsData } from '../../feature-redux/posts.slice';

const GetPost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:5500/posts').then((res) => dispatch(setPostsData(res.data)));
  }, [dispatch]);

  return (
    <div>
      <h1>POSTS</h1>
    </div>
  );
};

export default GetPost;
