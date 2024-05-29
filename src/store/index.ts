import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import filterSlice from "./filterSlice";
import bookingSlice from "./bookingSlice";


export const store = configureStore({
  reducer: {
    user:authSlice,
    filter:filterSlice,
    booking:bookingSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
