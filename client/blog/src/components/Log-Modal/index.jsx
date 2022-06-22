import React, { useState } from 'react';
import useModal from './useModal';
import Modal from './modal';
import Login from '../Log/Login';
import Register from '../Log/Register';

const IndexModal = () => {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const [popupLog, setPopupLog] = useState('popup');
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(true);

  const handleChange = (e) => {
    if (e.target.id === 'register') {
      setRegister(true);
      setLogin(false);
    } else if (e.target.id === 'login') {
      setLogin(true);
      setRegister(false);
    }
  };

  return (
    <>
      <div className={popupLog}>
        <img
          src='./assets/SVG/login.svg'
          alt='login'
          style={{ width: '30px', cursor: 'pointer', background: '#161b22' }}
          onClick={toggleLoginForm}
          onMouseOver={() => setPopupLog('popup-after')}
          onMouseLeave={() => setPopupLog('popup')}
        />
        <p>Se connecter</p>
      </div>

      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm}>
        {login && <Login handleChange={handleChange} />}
        {register && <Register handleChange={handleChange} />}
      </Modal>
    </>
  );
};

export default IndexModal;
