import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { dateParser } from '../utils/DateParser';
import LikePost from './LikePost';

const Posts = ({ post }) => {
  const [posterIdData, setPosterIdData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${process.env.REACT_APP_API}/user/${post.posterId}`)
        .then((res) => {
          setPosterIdData(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, [post.posterId]);

  return (
    <div className='post-container'>
      <div className='post-user-create'>
        <img src='/assets/ICONS/perso.jpg' alt='user' />
        <p>
          créer par {posterIdData.pseudo} le {dateParser(post.createdAt)}
        </p>
      </div>
      <h1> {post.title} </h1>
      <h2> {post.subtitle} </h2>
      <p> {post.content} </p>
      <LikePost post={post} />
    </div>
  );
};

export default Posts;
