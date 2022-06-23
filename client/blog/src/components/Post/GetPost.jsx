import React from 'react';
import { useSelector } from 'react-redux';
import Posts from './Posts';

const GetPost = () => {
  const postData = useSelector((state) => state.posts);

  return (
    <div>
      {postData?.map((post) => (
        <Posts key={post._id} post={post} />
      ))}
    </div>
  );
};

export default GetPost;
