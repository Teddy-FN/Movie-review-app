import { createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../Service/Axios";

const initialState = {
  data: [],
  error: null,
  loading: false,
  pagination: 0,
};

export const getMovieList = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    // param 1 state, param 2 action / payload
    loadingGetDetail: (state, payload) => {
      if (payload.payload === "loading") {
        state.loading = true;
      } else {
        state.loading = false;
      }
    },

    getDetailMovie: (state, payload) => {
      state.data = payload.payload;
    },
  },
});

// // Export Actions
export const { getDetailMovie, loadingGetDetail } = getMovieList.actions;

// // Export Reducer
export default getMovieList.reducer;

// FETCHING DATA
export const fetchDetailMovie = (id) => async (dispatch) => {
  dispatch(loadingGetDetail("loading"));
  try {
    const getDetailData = await URL_API.get(`/3/movie/${id}`);

    if (getDetailData.status === 200) {
      console.log(getDetailData);
      dispatch(loadingGetDetail("loading"));
      setTimeout(() => {
        dispatch(loadingGetDetail("succeeded"));
        dispatch(getDetailMovie(getDetailData.data));
      }, 3000);
    }
  } catch (error) {
    dispatch(loadingGetDetail("failed"));
  }
};
