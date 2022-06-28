import React from 'react';
import { useDispatch } from 'react-redux';
import { followUser } from '../../feature-redux/user.slice';

const FollowUser = ({ users, followId }) => {
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(users._id, followId));
  };
  return (
    <div>
      <button onClick={handleFollow}>FOLLOW</button>
    </div>
  );
};

export default FollowUser;
