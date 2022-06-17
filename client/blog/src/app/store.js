import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../feature-redux/posts.slice';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
