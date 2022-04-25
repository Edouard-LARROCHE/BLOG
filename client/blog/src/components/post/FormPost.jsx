import React, { useState } from 'react';
import axios from 'axios';

const FormPost = () => {
  const [data, setData] = useState({
    title: '',
    subtitle: '',
    author: '',
    content: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('http://localhost:5500/posts', data)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Form Post</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='title' name='title' onChange={handleChange} value={data.title} required />
          <input type='text' placeholder='subtitle' name='subtitle' onChange={handleChange} value={data.subtitle} required />
          <input type='text' placeholder='author' name='author' onChange={handleChange} value={data.author} required />
          <input type='text' placeholder='content' name='content' onChange={handleChange} value={data.content} required />
          <button type='submit'>Poster</button>
        </form>
      </div>
    </div>
  );
};

export default FormPost;
