import React, { useMemo, useEffect, Fragment, useState } from "react";

// Redux / Fetching data
import { useSelector, useDispatch } from "react-redux";
import { fetchGenreListMovies } from "../../redux/getGenreMovie";

// Styled
import "./moviesList.scss";

// Import React router Dom
import { Link } from "react-router-dom";

const DEFAULT_GENRE = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  {
    id: 878,
    name: "Science Fiction",
  },
];

const MoviesList = () => {
  const dispatch = useDispatch();
  const [toogle, setToogle] = useState({ id: 28, name: "Action" });
  // const listAllGenreMovie = useSelector((state) => ({
  //   data: state.getGenreMovie.data,
  //   loading: state.getGenreMovie.loading,
  //   error: state.getGenreMovie.error,
  // }));

  useEffect(() => {
    console.log("toogle =>", toogle);
    dispatch(fetchGenreListMovies());
  }, []);

  const onChangeToogle = (item) => {
    console.log("ITEM =>", item);
    setToogle(() => {
      return {
        id: item.id,
        name: item.name,
      };
    });
  };

  const LIST_ALL_GENRE = useMemo(() => {
    const component = DEFAULT_GENRE.map((items, idx) => {
      console.log("TOOGLE =>", toogle);
      return (
        <li className="list_items">
          <button
            onClick={() => onChangeToogle(items)}
            key={idx}
            className={`${
              toogle.id === items.id && toogle.name === items.name
                ? "list_items_toggle_active"
                : ""
            }`}
          >
            {items.name}
          </button>
        </li>
      );
    });

    return component;
  }, [DEFAULT_GENRE, toogle]);

  return (
    <section className="movie_list container">
      <section className="movie_list_genre_container container">
        <h3>Genres</h3>
        <ul className="movie_list_genre_container_list">{LIST_ALL_GENRE}</ul>
        <Link to="/genre">
          <p>More</p>
        </Link>
      </section>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
      <h3>Genres</h3>
    </section>
  );
};

export default MoviesList;
