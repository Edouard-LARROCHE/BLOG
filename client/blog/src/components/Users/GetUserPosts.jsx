import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const GetUserPosts = ({ usersDataId }) => {
  const postsData = useSelector((state) => state.posts);
  const [postId, setPostId] = useState([]);

  useEffect(() => {
    let array = [];
    postsData.map((posts) => {
      array.push(posts.posterId === usersDataId);

      return setPostId(array);
    });
  }, [postsData, usersDataId]);

  console.log(postId);

  return (
    <div>
      <p>Nombre de poste: {postId.length}</p>
    </div>
  );
};

export default GetUserPosts;
