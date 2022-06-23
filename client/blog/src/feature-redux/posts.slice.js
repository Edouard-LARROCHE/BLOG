import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    getPostsData: (state, action) => {
      return action.payload;
    },
    likePostData: (state, action) => {
      return state.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            likers: [action.payload.userId, ...post.likers],
          };
        }
        return post;
      });
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

export const likePost = (postId, userId) => (dispatch) => {
  axios({
    method: 'patch',
    url: `${process.env.REACT_APP_API}/posts/like-post/` + postId,
    data: { id: userId },
  })
    .then((res) => {
      dispatch(likePostData(res.data));
    })
    .catch((err) => console.log(err));
};

export const { getPostsData, likePostData } = postsSlice.actions;
export default postsSlice.reducer;
