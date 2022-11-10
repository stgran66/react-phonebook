import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
};

const extraActions = [register, logIn, logOut, refreshUser];

const getActionsByType = type => extraActions.map(action => action[type]);

const getActionsByTypeWithoutRefresh = type =>
  extraActions
    .filter(action => action !== refreshUser)
    .map(action => action[type]);

const registerAndLogInSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const logOutSuccessReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

const refreshSuccessReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const pendingReducer = state => {
  state.isLoggedIn = false;
  state.isRefreshing = true;
};

const rejectedReducer = (state, action) => {
  state.isLoggedIn = false;
  state.error = action.payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, registerAndLogInSuccessReducer)
      .addCase(logIn.fulfilled, registerAndLogInSuccessReducer)
      .addCase(logOut.fulfilled, logOutSuccessReducer)
      .addCase(refreshUser.fulfilled, refreshSuccessReducer)
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(...getActionsByType('pending')), pendingReducer)
      .addMatcher(
        isAnyOf(...getActionsByTypeWithoutRefresh('rejected')),
        rejectedReducer
      ),
});

export const authReducer = authSlice.reducer;
