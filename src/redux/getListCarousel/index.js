import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
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

export const getCarouselListMovies = createSlice({
  name: "carouselList",
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
export const { getAllList, loadingGetList } = getCarouselListMovies.actions;

// Export Reducer
export default getCarouselListMovies.reducer;

export const fetchCarouselListMovies = () => async (dispatch) => {
  dispatch(loadingGetList("loading"));
  try {
    const getListData = await axios.get(url, options);
    console.log("getListData =>", getListData);
    if (getListData.status === 200) {
      dispatch(loadingGetList("succeeded"));
      dispatch(getAllList(getListData.data.results));
    }
    console.log(getListData);
  } catch (error) {
    dispatch(loadingGetList("failed"));
  }
};
