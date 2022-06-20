import React, { useContext } from 'react';
import { UidContext } from '../AppContext';
import Logout from './Log/Logout';

const NavBar = () => {
  const uid = useContext(UidContext);

  return (
    <div>
      <img src='' alt='logo-blog' />
      <h2>Stack-BLOG</h2>
      {uid ? (
        <ul>
          <li>
            <h5>Bienvenue ...</h5>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      ) : (
        <img src='./assets/SVG/login.svg' alt='login' />
      )}
    </div>
  );
};

export default NavBar;
