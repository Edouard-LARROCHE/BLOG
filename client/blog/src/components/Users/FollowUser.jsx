import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../../feature-redux/user.slice';

const FollowUser = ({ followId }) => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userData._id, followId));
  };
  return (
    <div>
      <button onClick={handleFollow}>FOLLOW</button>
    </div>
  );
};

export default FollowUser;
