import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postAction';
import Post from './Post';

const GetPost = () => {
  const postsData = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>POSTS</h1>
      {postsData.map((index) => (
        <Post key={index._id} title={index.title} subtitle={index.subtitle} author={index.author} content={index.content} />
      ))}
    </div>
  );
};

export default GetPost;
