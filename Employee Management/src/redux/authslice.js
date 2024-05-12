import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userEmail: '',
    userPassword: '',
    isLoggedIn: false,
    error: '',
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserPassword: (state, action) => {
      state.userPassword = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUserEmail, setUserPassword, setLoggedIn, setError } = authSlice.actions;

export const selectAuth = state => state.auth;

export default authSlice.reducer;
