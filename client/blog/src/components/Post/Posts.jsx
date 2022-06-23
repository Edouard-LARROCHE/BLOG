import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { dateParser } from '../utils/DateParser';

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
    <div>
      <p>
        créer par {posterIdData.pseudo} le {dateParser(post.createAt)}
      </p>
      <h1> {post.title} </h1>
      <h2> {post.subtitle} </h2>
      <p> {post.content} </p>
    </div>
  );
};

export default Posts;
