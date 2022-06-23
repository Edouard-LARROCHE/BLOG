import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../../feature-redux/posts.slice';

const LikePost = () => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost());
  };

  return (
    <div>
      <button onClick={handleLike}>LIKE</button>
    </div>
  );
};

export default LikePost;
