import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "slice",
  initialState: {
    isLoggedIn: false,
    user: undefined,
    token: undefined,
  },
  reducers: {
    setData: (state, payload) => {
      state = payload;
    },
    logout: (state) => {
      state = {
        isLoggedIn: false,
        user: undefined,
        token: undefined,
      };
    },
  },
});

export const { setData, logout } = authSlice.actions;

export default authSlice.reducer;
