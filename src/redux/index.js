import { configureStore } from "@reduxjs/toolkit";
import getMovieListReducer from "./getMovie";

export const store = configureStore({
  reducer: {
    getMovie: getMovieListReducer,
  },
});
