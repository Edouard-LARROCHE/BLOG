import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UidContext } from '../AppContext';
import Logout from './Log/Logout';

const NavBar = () => {
  const uid = useContext(UidContext);
  const userConnectData = useSelector((state) => state.user);
  const [popupLog, setPopupLog] = useState('popup');

  return (
    <div className='navBar'>
      {/* <img src='./assets/ICONS/logo.png' alt='logo-blog' style={{ width: '80px' }} /> */}
      <h2>Stack-BLOG</h2>
      {uid ? (
        <div className='user-connect'>
          <h5>Bienvenue {userConnectData.pseudo}</h5>
          <Logout />
        </div>
      ) : (
        <div className={popupLog}>
          <Link to='/log'>
            <img
              src='./assets/SVG/login.svg'
              alt='login'
              style={{ width: '30px', marginTop: '20px' }}
              onMouseOver={() => setPopupLog('popup-after')}
              onMouseLeave={() => setPopupLog('popup')}
            />
          </Link>
          <p>Se connecter</p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
