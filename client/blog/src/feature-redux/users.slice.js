import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: null,
  },
  reducers: {
    getUsersData: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const getUSers = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/user`);
    dispatch(getUsersData(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const { getUsersData } = usersSlice.actions;
export default usersSlice.reducer;
