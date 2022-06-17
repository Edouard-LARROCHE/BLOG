import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../../feature-redux/posts.slice';

const GetPost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>POSTS</h1>
    </div>
  );
};

export default GetPost;
