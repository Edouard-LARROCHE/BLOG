import React from 'react';

const Post = ({ title, subtitle, author, content }) => {
  return (
    <div>
      <h2> {title} </h2>
      <h2> {subtitle} </h2>
      <h2> {author} </h2>
      <h2> {content} </h2>
    </div>
  );
};

export default Post;
