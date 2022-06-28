import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../feature-redux/user.slice';
import { getUsers } from '../../feature-redux/users.slice';

const FollowUser = ({ followId }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.following.includes(followId)) {
      setIsFollowed(true);
    } else setIsFollowed(false);
  }, [userData.following, followId]);

  const handleFollow = () => {
    dispatch(followUser(userData._id, followId));
    dispatch(getUsers(userData._id));
  };

  const handleUnFollow = () => {
    dispatch(unFollowUser(userData._id, followId));
    dispatch(getUsers(userData._id));
  };

  return (
    <div>
      {isFollowed && <button onClick={handleUnFollow}>UNFOLLOW</button>}
      {isFollowed === false && <button onClick={handleFollow}>FOLLOW</button>}
    </div>
  );
};

export default FollowUser;
