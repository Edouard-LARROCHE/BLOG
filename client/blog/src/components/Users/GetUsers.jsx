import React from 'react';
import { useSelector } from 'react-redux';
import Users from './Users';

const GetUsers = () => {
  const usersData = useSelector((state) => state.users);
  return (
    <div>
      {usersData.map((users) => (
        <Users key={users._id} users={users} />
      ))}
    </div>
  );
};

export default GetUsers;
