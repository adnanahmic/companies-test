import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import { companiesApi } from "../Api";

export default configureStore({
  reducer: {
    auth: authSlice,
    [companiesApi.reducerPath]: companiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companiesApi.middleware),
});
