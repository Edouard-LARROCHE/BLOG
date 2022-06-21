import React, { useState } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

const Logout = () => {
  const [popupOut, setPopupOut] = useState('popup');

  const removeCookie = (key) => {
    if (window !== 'undefined') {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API}/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie('jwt'))
      .catch((err) => console.log(err));

    window.location = '/';
  };

  return (
    <div className={popupOut}>
      <img
        src='./assets/SVG/logout.svg'
        alt='logout'
        onClick={logout}
        style={{ width: '30px', marginTop: '20px', cursor: 'pointer' }}
        onMouseOver={() => setPopupOut('popup-after')}
        onMouseLeave={() => setPopupOut('popup')}
      />
      <p>Se déconnecter</p>
    </div>
  );
};

export default Logout;
