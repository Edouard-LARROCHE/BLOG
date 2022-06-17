import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null,
  },
  reducers: {
    setPostsData: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPostsData } = postsSlice.actions;
export default postsSlice.reducer;
