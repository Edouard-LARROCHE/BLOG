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
    dispatch(unLikePost(post._id, uid));
    dispatch(getUser(uid));
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
            <img src='/assets/ICONS/like.png' alt='like' onClick={handleLike} />
          ) : (
            <img src='/assets/ICONS/unlike.png' alt='unlike' onClick={handleUnLike} />
          )
        ) : (
          <>
            <img src='/assets/ICONS/like.png' alt='like' onClick={popup} />
            <p> Se connecter pour liker</p>
          </>
        )}
      </div>
      <p style={{ transform: 'translateY(10px)' }}> {post.likers.length} </p>
    </div>
  );
};

export default LikePost;
