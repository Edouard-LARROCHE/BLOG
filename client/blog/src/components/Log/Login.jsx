import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5500/user/login', data)
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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>SE CONNECTER</h1>
        <input type='email' placeholder='Adresse mail' name='email' onChange={handleChange} value={data.email} required />
        <input type='password' placeholder='Mot de passe' name='password' onChange={handleChange} value={data.password} required />
        {error && <p>{error}</p>}
        <button type='submit'>
          <p>CONNEXION</p>
        </button>
      </form>
    </div>
  );
};

export default Login;
