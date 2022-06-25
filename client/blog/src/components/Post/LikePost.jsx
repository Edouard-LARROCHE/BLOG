import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { likePost, unLikePost } from '../../feature-redux/posts.slice';
import { getUser } from '../../feature-redux/user.slice';
import { UidContext } from '../../AppContext';

const LikePost = ({ post }) => {
  const dispatch = useDispatch();
  const uid = useContext(UidContext);
  const [isLiked, setIsLiked] = useState(false);
  const [popupLike, setPopupLike] = useState('popup');

  const popup = () => {
    setPopupLike('popup-after');
    setTimeout(() => {
      setPopupLike('popup');
    }, 2000);
  };

  const handleLike = () => {
    dispatch(likePost(post._id, uid));
    dispatch(getUser(uid));
    setIsLiked(true);
  };

  const handleUnLike = () => {
    // dispatch(unLikePost(post._id, uid));
    // dispatch(getUser(uid));
    console.log('unlike');
    setIsLiked(false);
  };

  useEffect(() => {
    if (post.likers.includes(uid)) setIsLiked(true);
    else setIsLiked(false);
  }, [post.likers, uid]);

  return (
    <div>
      <div className={popupLike}>
        {uid ? (
          isLiked === false ? (
            <button onClick={handleLike}> like </button>
          ) : (
            <button onClick={handleUnLike}> unlike </button>
          )
        ) : (
          <>
            <button onClick={popup}> like </button>
            <p> Se connecter pour liker</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LikePost;
