import React from 'react';
import { useDispatch } from 'react-redux';
import { followUser } from '../../feature-redux/user.slice';

const FollowUser = ({ users }) => {
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(users._id));
  };
  return (
    <div>
      <p>follow</p>
      <button onClick={handleFollow}>FOLLOW</button>
    </div>
  );
};

export default FollowUser;
