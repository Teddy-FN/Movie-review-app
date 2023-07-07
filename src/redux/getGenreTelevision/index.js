import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

  const URL =
    await `${process.env.REACT_APP_BASE_URL}/3/genre/tv/list?language=en`;
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_BASE_TOKEN}`,
    },
  };

  try {
    const getGenreMovie = await axios.get(URL, options);

    if (getGenreMovie.status === 200) {
      dispatch(loadingGetList("succeeded"));
      dispatch(getAllList(getGenreMovie.data.genres));
    }
    console.log(getGenreMovie);
  } catch (error) {
    dispatch(loadingGetList("failed"));
  }
};
