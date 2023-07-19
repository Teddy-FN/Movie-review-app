import { createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../Service/Axios";

const initialState = {
  data: {
    backdrops: [],
    logos: [],
    posters: [],
  },
  error: null,
  loading: false,
};

export const getMovieImage = createSlice({
  name: "movieImage",
  initialState,
  reducers: {
    // param 1 state, param 2 action / payload
    loadingGetImage: (state, payload) => {
      if (payload.payload === "loading") {
        state.loading = true;
      } else {
        state.loading = false;
      }
    },

    getImageMovie: (state, payload) => {
      console.log("PAYLOAD =>", payload);
      // state.data = [...payload.payload];
    },
  },
});

// // Export Actions
export const { getImageMovie, loadingGetImage } = getMovieImage.actions;

// // Export Reducer
export default getMovieImage.reducer;

// FETCHING DATA
export const fetchImageMovie = (id) => async (dispatch) => {
  dispatch(loadingGetImage("loading"));
  try {
    const getImageData = await URL_API.get(`/3/movie/${id}/images`);
    console.log("getImageData =>", getImageData);
    if (getImageData.status === 200) {
      console.log(getImageData);
      dispatch(loadingGetImage("loading"));
      setTimeout(() => {
        dispatch(loadingGetImage("succeeded"));
        dispatch(getImageMovie(getImageData.data));
      }, 3000);
    }
  } catch (error) {
    dispatch(loadingGetImage("failed"));
  }
};
