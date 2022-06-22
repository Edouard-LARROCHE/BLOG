import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ handleChange, trueConnect }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

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
          setErrorEmail(res.data.errors.email);
          setErrorPassword(res.data.errors.password);
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
        <p> {trueConnect} </p>
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
          <label className='form-label'> {!errorEmail ? 'Adresse mail' : <p className='error'>{errorEmail}</p>} </label>
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
          <label className='form-label'>{!errorPassword ? 'Mot de passe' : <p className='error'>{errorPassword}</p>}</label>
        </div>

        <button className='button-connect' type='submit'>
          <p>CONNEXION</p>
        </button>
      </form>
      <div className='no-account'>
        <div className='switch-create'>
          <p>Pas de compte ?</p>
          <p onClick={handleChange} id='register'>
            CREER UN COMPTE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
