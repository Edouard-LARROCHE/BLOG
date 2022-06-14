import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/postAction';

const FormPost = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const data = { title, subtitle, author, content };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(createPost({ ...data }));
      setTitle('');
      setSubtitle('');
      setAuthor('');
      setContent('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Form Post</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='title' name='title' onChange={(e) => setTitle(e.target.value)} value={title} required />
          <input type='text' placeholder='subtitle' name='subtitle' onChange={(e) => setSubtitle(e.target.value)} value={subtitle} required />
          <input type='text' placeholder='author' name='author' onChange={(e) => setAuthor(e.target.value)} value={author} required />
          <input type='text' placeholder='content' name='content' onChange={(e) => setContent(e.target.value)} value={content} required />
          <button type='submit'>Poster</button>
        </form>
      </div>
    </div>
  );
};

export default FormPost;
