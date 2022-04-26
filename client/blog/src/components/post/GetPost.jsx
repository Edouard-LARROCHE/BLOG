import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/postAction';

const GetPost = () => {
  const postsData = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>BLOG</h1>
      {postsData.map((id) => (
        <p> {id._id} </p>
      ))}
    </div>
  );
};

export default GetPost;
