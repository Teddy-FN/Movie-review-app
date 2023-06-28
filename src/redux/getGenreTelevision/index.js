import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.themoviedb.org/3/genre/tv/list?language=en";
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDZhYjdhNjM3Nzk0M2QzNjZmMTkxNzExMjM3NGZmMiIsInN1YiI6IjYwNzY1ZmE2MWRhN2E2MDA3NzNkYjZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.76pWuO7P1zX-gVW4I3QJBM7AjwmXPXB1nUZi6UKwD0w",
  },
};

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const getAllGenreTelevision = createSlice({
  name: "genreMovieList",
  initialState,
  reducers: {
    // param 1 state, param 2 action / payload
    loadingGetList: (state, payload) => {
      if (payload.payload === "loading") {
        state.loading = true;
      } else {
        state.loading = false;
      }
    },

    getAllList: (state, payload) => {
      state.data = payload.payload;
    },
  },
});

// Export Actions
export const { getAllList, loadingGetList } = getAllGenreTelevision.actions;

// Export Reducer
export default getAllGenreTelevision.reducer;

export const fetchGenreListTelevision = () => async (dispatch) => {
  dispatch(loadingGetList("loading"));
  try {
    const getGenreMovie = await axios.get(url, options);
    console.log("getGenreMovie =>", getGenreMovie);
    if (getGenreMovie.status === 200) {
      dispatch(loadingGetList("succeeded"));
      dispatch(getAllList(getGenreMovie.data.genres));
    }
    console.log(getGenreMovie);
  } catch (error) {
    dispatch(loadingGetList("failed"));
  }
};
