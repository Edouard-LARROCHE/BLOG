import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    getUserData: (state, action) => {
      state.user = action.payload;
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

export const { getUserData } = userSlice.actions;
export default userSlice.reducer;
