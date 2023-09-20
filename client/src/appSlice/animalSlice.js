// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: null,
    loginForm: {
      email: '',
      password: '',
    },
    signupForm: {
      // ... initial signup form state ...
    },
  },
  reducers: {
    updateLoginForm: (state, action) => {
      const { name, value } = action.payload;
      state.loginForm[name] = value;
    },
    login: (state) => {
      // Implement your login logic here
      state.loggedIn = true;
      state.loginForm = {
        email: '',
        password: '',
      };
    },
    logout: (state) => {
      // Implement your logout logic here
      state.loggedIn = false;
    },
  },
});

export const { updateLoginForm, login, logout } = authSlice.actions;
export default authSlice.reducer;
