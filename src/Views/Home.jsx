import React, { Fragment, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllListMovie } from "../redux/getMovie";
import Banner from "../Component/Banner";
import Header from "../Component/Header/Header";

const Home = () => {
  const dispatch = useDispatch();
  const listAllMovies = useSelector((state) => ({
    data: state.getMovie.data,
    loading: state.getMovie.loading,
    error: state.getMovie.error,
  }));

  useEffect(() => {
    dispatch(fetchAllListMovie());
  }, []);

  const ListMovieUpcoming = useMemo(() => {
    console.log("LIST ALL MOVIES =>", listAllMovies);
    if (listAllMovies.loading) return <h1>LOADING NI BRAY</h1>;
    if (listAllMovies.data)
      return listAllMovies?.data?.map((items, idx) => (
        <div key={idx}>{items.id}</div>
      ));
  }, [listAllMovies]);

  return (
    <Fragment>
      <Header />
      <Banner />
      {ListMovieUpcoming}
    </Fragment>
  );
};

export default Home;
