import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
  // user: null,
  // token: null,
  // isAuthenticated: false,
  // isLoading: false,
  // error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;

// loginStart: (state: { isLoading: boolean }) => {
//   state.isLoading = true;
// },
// loginSuccess: (
//   state: {
//     user: any;
//     token: any;
//     isAuthenticated: boolean;
//     isLoading: boolean;
//     error: null;
//   },
//   action: { payload: { user: any; token: any } }
// ) => {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isAuthenticated = true;
//   state.isLoading = false;
//   state.error = null;
// },
// loginFailure: (
//   state: { isLoading: boolean; error: any },
//   action: { payload: any }
// ) => {
//   state.isLoading = false;
//   state.error = action.payload;
// },
// logout: (state: { user: null; token: null; isAuthenticated: boolean }) => {
//   state.user = null;
//   state.token = null;
//   state.isAuthenticated = false;
// },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure, logout } =
//   authSlice.actions;

export default authSlice.reducer;
