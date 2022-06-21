import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UidContext } from '../AppContext';
import Logout from './Log/Logout';

const NavBar = () => {
  const uid = useContext(UidContext);
  const userConnectData = useSelector((state) => state.user);

  return (
    <div>
      <img src='./assets/ICONS/logo.png' alt='logo-blog' style={{ width: '80px' }} />
      <h2>Stack-BLOG</h2>
      {uid ? (
        <ul>
          <li>
            <h5>Bienvenue {userConnectData.pseudo}</h5>
          </li>
          <li>
            <div className='logout'>
              <Logout />
            </div>
            <div className='logout-popup'>
              <p>Logout</p>
            </div>
          </li>
        </ul>
      ) : (
        <Link to='/log'>
          <img src='./assets/SVG/login.svg' alt='login' />
        </Link>
      )}
    </div>
  );
};

export default NavBar;
