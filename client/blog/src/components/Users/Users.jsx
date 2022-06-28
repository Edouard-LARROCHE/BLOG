import React from 'react';

const Users = ({ users }) => {
  return (
    <div>
      <h1> {users.pseudo} </h1>
      <h2> {users.bio} </h2>
    </div>
  );
};

export default Users;
