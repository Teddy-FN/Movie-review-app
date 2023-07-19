import { configureStore } from "@reduxjs/toolkit";
import getMovieListReducer from "./getMovie";
import getMovieCarouselListReducer from "./getListCarousel";
import getGenreMovieReducer from "./getGenreMovie";
import getGenreTelevision from "./getGenreTelevision";
import getDetailMovies from "./getdetailMovie";
import getImageMovie from "./getImageMovie";

export const store = configureStore({
  reducer: {
    getMovie: getMovieListReducer,
    getCarousel: getMovieCarouselListReducer,
    getGenreMovie: getGenreMovieReducer,
    getGenreTelevision: getGenreTelevision,
    getDetailMovies: getDetailMovies,
    getImageMovie: getImageMovie,
  },
});
