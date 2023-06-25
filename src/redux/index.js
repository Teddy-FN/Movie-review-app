import { configureStore } from "@reduxjs/toolkit";
// import getMovieListReducer from "./getMovie";
import getMovieCarouselListReducer from "./getListCarousel";

export const store = configureStore({
  reducer: {
    // getMovie: getMovieListReducer,
    getCarousel: getMovieCarouselListReducer,
  },
});
