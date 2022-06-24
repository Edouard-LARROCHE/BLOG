import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../../feature-redux/posts.slice';
import { getUser } from '../../feature-redux/user.slice';
import { UidContext } from '../../AppContext';

const LikePost = ({ post }) => {
  const dispatch = useDispatch();
  const uid = useContext(UidContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    dispatch(likePost(post._id, uid));
    dispatch(getUser(uid));
    setIsLiked(true);
  };

  const handleUnLike = () => {
    // dispatch();
    setIsLiked(false);
  };

  useEffect(() => {
    if (post.likers.includes(uid)) setIsLiked(true);
    else setIsLiked(false);
  }, [post.likers, uid]);

  return (
    <div>
      <button onClick={handleLike}>LIKE</button>
    </div>
  );
};

export default LikePost;
