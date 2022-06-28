import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    getUserData: (state, action) => {
      return action.payload;
    },
    followUserId: (state, action) => {
      return {
        ...state,
        following: [action.payload.idToFollow, ...state.following],
      };
    },
  },
});

export const getUser = (uid) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/user/${uid}`);
    dispatch(getUserData(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const followUser = (followerId, idToFollow) => async (dispatch) => {
  axios({
    method: 'patch',
    url: `${process.env.REACT_APP_API}/user/follow/` + followerId,
    data: { idToFollow },
  })
    .then(() => {
      dispatch(followUserId({ idToFollow }));
    })
    .catch((err) => console.log(err));
};

export const { getUserData, followUserId } = userSlice.actions;
export default userSlice.reducer;
