import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:5500/posts', data)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>BLOG</h1>
      {data.map((index) => (
        <div key={index._id}>
          <p> {index.title} </p>
        </div>
      ))}
    </div>
  );
};

export default GetPost;
