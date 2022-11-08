import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.pending](state) {
      state.isLoggedIn = false;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.pending](state) {
      state.isLoggedIn = false;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
