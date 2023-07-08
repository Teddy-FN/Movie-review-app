import { createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../../Service/Axios";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const getMovieList = createSlice({
  name: "movieList",
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

// // Export Actions
export const { getAllList, loadingGetList } = getMovieList.actions;

// // Export Reducer
export default getMovieList.reducer;

// FETCHING DATA
export const fetchAllListMovie = (props) => async (dispatch) => {
  console.log("props", props);
  dispatch(loadingGetList("loading"));
  try {
    const getListData = await URL_API.get(
      `/3/movie/${props.id}/recommendations?language=en-US&page=1`
    );
    if (getListData.status === 200) {
      dispatch(loadingGetList("succeeded"));
      dispatch(getAllList(getListData.data.results));
    }
  } catch (error) {
    dispatch(loadingGetList("failed"));
  }
};
