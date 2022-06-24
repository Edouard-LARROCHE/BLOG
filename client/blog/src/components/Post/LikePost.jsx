import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../../feature-redux/posts.slice';
import { getUser } from '../../feature-redux/user.slice';
import { UidContext } from '../../AppContext';

const LikePost = ({ post }) => {
  const dispatch = useDispatch();
  const uid = useContext(UidContext);

  const handleLike = () => {
    dispatch(likePost(post._id, uid));
    dispatch(getUser(uid));
  };

  return (
    <div>
      <button onClick={handleLike}>LIKE</button>
    </div>
  );
};

export default LikePost;
