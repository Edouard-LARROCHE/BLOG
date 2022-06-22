import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { UidContext } from '../AppContext';
import IndexModal from './Log-Modal';
import Logout from './Log/Logout';

const NavBar = () => {
  const uid = useContext(UidContext);
  const userConnectData = useSelector((state) => state.user);

  return (
    <div className='navBar'>
      <div className='logo-stack'>
        <img src='https://img.icons8.com/ios/50/000000/bbb.png' alt='logo-stack' />
        <h2 className='app-name'>Stack-BLOG</h2>
      </div>
      {uid ? (
        <div className='user-connect'>
          <h5>Bienvenue {userConnectData.pseudo}</h5>
          <Logout />
        </div>
      ) : (
        <div>
          <IndexModal />
        </div>
      )}
    </div>
  );
};

export default NavBar;
