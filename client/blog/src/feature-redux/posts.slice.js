import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null,
  },
  reducers: {
    getPostsData: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
    dispatch(getPostsData(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const { getPostsData } = postsSlice.actions;
export default postsSlice.reducer;
