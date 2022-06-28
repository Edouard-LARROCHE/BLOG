import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Users from './Users';

const GetUsers = () => {
  const usersData = useSelector((state) => state.users);
  const userData = useSelector((state) => state.user);
  const [followId, setFollowId] = useState([]);

  useEffect(() => {
    let array = [];
    usersData.map((user) => {
      if (user._id !== userData._id) {
        return array.push(user._id);
      }
      return setFollowId(array);
    });
  }, [userData._id, usersData]);

  return (
    <div>
      {usersData.map((users) => (
        <Users key={users._id} users={users} followId={followId} />
      ))}
    </div>
  );
};

export default GetUsers;
