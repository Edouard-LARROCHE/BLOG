import React from 'react';
import { useSelector } from 'react-redux';
import Posts from './Posts';

const GetPost = () => {
  const postData = useSelector((state) => state.posts[0]);
  console.log(postData);

  return (
    <div>
      {/* {postData.map((post) => {
        return <Posts key={post._id} post={post} />;
      })} */}
      <h1> {postData.title} </h1>
    </div>
  );
};

export default GetPost;
