import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';

const Register = ({ handleChange }) => {
  const [formConnect, setFormConnect] = useState(false);
  const [errorPseudo, setErrorPseudo] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [controlPassword, setControlPassword] = useState('');
  const [data, setData] = useState({
    pseudo: '',
    email: '',
    password: '',
  });

  const handleRegister = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const terms = document.getElementById('terms');
    const termsError = document.querySelector('.terms-error');
    const controlPasswordError = document.querySelector('.password-error');
    controlPasswordError.innerHTML = '';
    termsError.innerHTML = '';

    if (data.password !== controlPassword) {
      controlPasswordError.innerHTML = 'Les mots de passe ne correspondent pas.';
    } else if (!terms.checked) {
      termsError.innerHTML = 'Veuillez valider les conditions générales';
    } else {
      await axios
        .post(`${process.env.REACT_APP_API}/user/register`, data)
        .then((res) => {
          if (res.data.errors) {
            setErrorPseudo(res.data.errors.pseudo);
            setErrorEmail(res.data.errors.email);
            setErrorPassword(res.data.errors.password);
          } else {
            setFormConnect(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {formConnect ? (
        <>
          <Login trueConnect='Votre compte est bien enregistré, veuillez vous connecter.' />
        </>
      ) : (
        <div className='login-form'>
          <form onSubmit={handleSubmit}>
            <h1>CRÉER UN COMPTE</h1>
            <div className='form-group field'>
              <input className='form-field' type='text' placeholder='Pseudo' name='pseudo' onChange={handleRegister} value={data.pseudo} required />
              <label className='form-label'> {!errorPseudo ? 'Pseudo' : <p className='error'>{errorPseudo}</p>} </label>
            </div>
            <div className='form-group field'>
              <input
                className='form-field'
                type='email'
                placeholder='Adresse mail'
                name='email'
                onChange={handleRegister}
                value={data.email}
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
                onChange={handleRegister}
                value={data.password}
                required
              />
              <label className='form-label'> {!errorPassword ? 'Mot de passe' : <p className='error'>{errorPassword}</p>} </label>
            </div>
            <div className='form-group field'>
              <input
                className='form-field'
                type='password'
                placeholder='Confirmer le mot de passe'
                name='password'
                onChange={(e) => setControlPassword(e.target.value)}
                value={controlPassword}
                required
              />
              <label className='form-label'> {!errorEmail ? 'Confirmer le mot de passe' : <p className='error'>{errorEmail}</p>} </label>
            </div>
            <div className='error-register'>
              <p className='password-error' />
              <p className='terms-error' />
            </div>
            <div className='checkbox' style={{ display: 'flex' }}>
              <input style={{ marginRight: '0.5rem' }} type='checkbox' id='terms' />
              <p style={{ marginRight: '0.4rem' }}>J'accepte les</p>
              <Link to='/'>
                <p style={{ textDecoration: 'underline' }}>conditions générales</p>
              </Link>
            </div>
            <button className='button-connect' type='submit'>
              <p>S'ENREGISTRER</p>
            </button>
          </form>
          <div className='no-account'>
            <div className='switch-create'>
              <p>Pas de compte ?</p>
              <p onClick={handleChange} id='login'>
                CREER UN COMPTE
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
