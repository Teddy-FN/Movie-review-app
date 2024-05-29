import React, { useMemo, useEffect, useState } from "react";
import { MemoizedCarousel } from "../Component/Carousel";
import MoviesList from "../UI/MoviesList";
import { MemoizedPagination } from "../Component/Pagination";

// Redux / Fetching data
import { useSelector, useDispatch } from "react-redux";
import { fetchGenreListMovies } from "../redux/getGenreMovie";
import { fetchAllListMovie } from "../redux/getMovie";

const DEFAULT_GENRE = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  {
    id: 878,
    name: "Science Fiction",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const [toogle, setToogle] = useState({ id: 28, name: "Action", page: 0 });

  // Active Select Pagination
  // const [pageOffset, setPageOffset] = useState(0);

  const listAllMovies = useSelector((state) => ({
    data: state.getMovie.data,
    loading: state.getMovie.loading,
    error: state.getMovie.error,
    pagination: state.getMovie.pagination,
  }));

  useEffect(() => {
    dispatch(fetchGenreListMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllListMovie(toogle));
  }, [dispatch, toogle]);

  const onChangeToogle = (item) =>
    setToogle(() => {
      return {
        id: item.id,
        name: item.name,
      };
    });

  const handlePageChange = (event) => {
    console.log("EVENT HANDLE CHANGE PAGE =>", event);
    setToogle((prevState) => {
      return {
        ...prevState,
        page: event.selected,
      };
    });
  };

  const LIST_ALL_GENRE = useMemo(() => {
    const component = DEFAULT_GENRE.map((items, index) => (
      <li className="list_items" key={index}>
        <button
          onClick={() => onChangeToogle(items)}
          className={`${
            toogle.id === items.id && toogle.name === items.name
              ? "list_items_toggle_active"
              : ""
          }`}
        >
          {items.name}
        </button>
      </li>
    ));

    return component;
  }, [toogle]);

  return (
    <React.Fragment>
      <MemoizedCarousel listGenre={LIST_ALL_GENRE} />
      <MoviesList data={listAllMovies} toogle={toogle} />
      <MemoizedPagination
        handlePageChange={handlePageChange}
        pageCount={listAllMovies?.pagination ?? 0}
        pageOffset={toogle?.page}
      />
    </React.Fragment>
  );
};

export default Home;
