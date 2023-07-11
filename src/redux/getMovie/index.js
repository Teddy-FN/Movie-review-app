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

    getAllListPage: (state, payload) => {
      state.pagination = payload.payload;
    },
  },
});

// // Export Actions
export const { getAllList, loadingGetList, getAllListPage } =
  getMovieList.actions;

// // Export Reducer
export default getMovieList.reducer;

// FETCHING DATA
export const fetchAllListMovie =
  ({ id, page }) =>
  async (dispatch) => {
    console.log("page WKWKKW =>", page++);
    dispatch(loadingGetList("loading"));
    try {
      const getListData = await URL_API.get(
        `/3/movie/${id}/recommendations?language=en-US&page=${page++}`
      );
      if (getListData.status === 200) {
        dispatch(loadingGetList("loading"));

        setTimeout(() => {
          // console.log("getListData =>", getListData);
          dispatch(loadingGetList("succeeded"));
          dispatch(getAllList(getListData.data.results));
          dispatch(getAllListPage(getListData.data.total_pages));
        }, 3000);
      }
    } catch (error) {
      dispatch(loadingGetList("failed"));
    }
  };
