import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          setError(res.data.errors.password || res.data.errors.email);
        } else {
          window.location = '/';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <h1>BIENVENUE</h1>
        <div className='form-group field'>
          <input
            className='form-field'
            type='email'
            placeholder='Adresse mail'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label className='form-label'>Adresse mail</label>
        </div>
        <div className='form-group field'>
          <input
            className='form-field'
            type='password'
            placeholder='Mot de passe'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <label className='form-label'>Mot de passe</label>
        </div>
        {error && <p className='error'>{error}</p>}
        <div className='button-connect' type='submit' onClick={handleSubmit}>
          <p>CONNEXION</p>
        </div>
      </form>
      <div className='no-account'>
        <div className='switch-create'>
          <p>Pas de compte ?</p>
          <p>CREER UN COMPTE</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
