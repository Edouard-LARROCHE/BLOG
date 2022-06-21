import React, { useState } from 'react';
import useModal from './useModal';
import Modal from './modal';

const IndexModal = () => {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const [popupLog, setPopupLog] = useState('popup');

  return (
    <>
      <div className={popupLog}>
        <img
          src='./assets/SVG/login.svg'
          alt='login'
          style={{ width: '30px', marginTop: '20px', background: '#161b22' }}
          onClick={toggleLoginForm}
          onMouseOver={() => setPopupLog('popup-after')}
          onMouseLeave={() => setPopupLog('popup')}
        />

        <p>Se connecter</p>
      </div>

      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm}></Modal>
    </>
  );
};

export default IndexModal;
