// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page=1";
// const options = {
//   headers: {
//     "X-RapidAPI-Key": "d576ea0a05msha2c709ebd83281cp187d1cjsna7a85b900e39",
//     "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//   },
// };

// const initialState = {
//   data: [],
//   error: null,
//   loading: false,
// };

// export const getMovieList = createSlice({
//   name: "movieList",
//   initialState,
//   reducers: {
//     // param 1 state, param 2 action / payload
//     loadingGetList: (state, payload) => {
//       if (payload.payload === "loading") {
//         state.loading = true;
//       } else {
//         state.loading = false;
//       }
//     },

//     getAllList: (state, payload) => {
//       state.data = payload.payload;
//     },
//   },
// });

// // Export Actions
// export const { getAllList, loadingGetList } = getMovieList.actions;

// // Export Reducer
// export default getMovieList.reducer;

// // FETCHING DATA
// export const fetchAllListMovie = () => async (dispatch) => {
//   dispatch(loadingGetList("loading"));
//   try {
//     const getListData = await axios.get(url, options);
//     if (getListData.status === 200) {
//       dispatch(loadingGetList("succeeded"));
//       dispatch(getAllList(getListData.data.results));
//     }
//   } catch (error) {
//     dispatch(loadingGetList("failed"));
//   }
// };
