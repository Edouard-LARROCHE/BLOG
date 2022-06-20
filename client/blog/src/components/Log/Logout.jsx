import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

const Logout = () => {
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
    <div>
      <img src='./assets/SVG/logout.svg' alt='logout' onClick={logout} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default Logout;
