import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../feature-redux/posts.slice';
import userReducer from '../feature-redux/user.slice';
import usersReducer from '../feature-redux/users.slice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    users: usersReducer,
  },
});
