import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songSlice";
// import { songSlice } from "./songSlice";

export const store = configureStore({
  reducer: {
    songs: songReducer,
  },
});
