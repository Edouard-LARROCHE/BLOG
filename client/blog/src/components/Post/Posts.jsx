import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
      <p>créer par {posterIdData.pseudo}</p>
      <h1> {post.title} </h1>
    </div>
  );
};

export default Posts;
