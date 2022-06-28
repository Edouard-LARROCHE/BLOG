import React from 'react';
import FollowUser from './FollowUser';

const Users = ({ users }) => {
  return (
    <div>
      <h1> {users.pseudo} </h1>
      <h2> {users.bio} </h2>
      <FollowUser users={users} />
    </div>
  );
};

export default Users;
