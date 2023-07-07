import { createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../Service/Axios";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const getAllGenreMovie = createSlice({
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
export const { getAllList, loadingGetList } = getAllGenreMovie.actions;

// Export Reducer
export default getAllGenreMovie.reducer;

export const fetchGenreListMovies = () => async (dispatch) => {
  dispatch(loadingGetList("loading"));
  try {
    const getGenreMovie = await URL_API.get("/3/genre/movie/list?language=en");
    console.log("getGenreMovie =>", getGenreMovie);
    if (getGenreMovie.status === 200) {
      dispatch(loadingGetList("succeeded"));
      dispatch(getAllList(getGenreMovie.data.genres));
    }
  } catch (error) {
    dispatch(loadingGetList("failed"));
  }
};
