import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: undefined,
    token: undefined,
  },
  reducers: {
    setData: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn;
      state.user = payload.user;
      state.token = payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = undefined;
      state.token = undefined;
    },
  },
});

export const { setData, logout } = authSlice.actions;

export default authSlice.reducer;
