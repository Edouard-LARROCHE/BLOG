import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../../feature-redux/posts.slice';
import { UidContext } from '../../AppContext';

const LikePost = () => {
  const dispatch = useDispatch();
  const uid = useContext(UidContext);

  const handleLike = () => {
    dispatch(likePost('62ac56e0020cb46a81d6ad11', uid));
  };

  return (
    <div>
      <button onClick={handleLike}>LIKE</button>
    </div>
  );
};

export default LikePost;
