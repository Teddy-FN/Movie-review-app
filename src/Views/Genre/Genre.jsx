import React, { Fragment, useEffect, useMemo } from "react";
// Styled
import "./style.scss";
// Icon
import { FiVideo } from "@react-icons/all-files/fi/FiVideo";
import { FiTv } from "@react-icons/all-files/fi/FiTv";
// Fetching
import { useSelector, useDispatch } from "react-redux";
import { fetchGenreListMovies } from "../../redux/getGenreMovie";
import { fetchGenreListTelevision } from "../../redux/getGenreTelevision";
import { Link } from "react-router-dom";

// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Genre = () => {
  // Redux / Fetching data
  const dispatch = useDispatch();
  const listAllGenreMovie = useSelector((state) => ({
    data: state.getGenreMovie.data,
    loading: state.getGenreMovie.loading,
    error: state.getGenreMovie.error,
  }));

  const listAllGenreTelevision = useSelector((state) => ({
    data: state.getGenreTelevision.data,
    loading: state.getGenreTelevision.loading,
    error: state.getGenreTelevision.error,
  }));

  useEffect(() => {
    return () => {
      dispatch(fetchGenreListMovies());
      dispatch(fetchGenreListTelevision());
    };
  }, []);

  const CONTENT_GENRE_MOVIES = useMemo(() => {
    if (listAllGenreMovie.loading) {
      return (
        <Skeleton
          highlightColor="#2b1b2e"
          baseColor="#573b5c"
          height={550}
          count={1}
          enableAnimation
          duration={0.5}
        />
      );
    }

    if (listAllGenreMovie.data && !listAllGenreMovie.loading) {
      const componentGenreMovie = listAllGenreMovie.data.map((items, index) => {
        return (
          <button className="genre_movie_container_button" key={index}>
            <Link>{items.name}</Link>
          </button>
        );
      });
      return componentGenreMovie;
    }
  }, [listAllGenreMovie]);

  const CONTENT_GENRE_TELEVISION = useMemo(() => {
    if (listAllGenreTelevision.loading) {
      return (
        <Skeleton
          highlightColor="#2b1b2e"
          baseColor="#573b5c"
          height={550}
          count={1}
          enableAnimation
          duration={0.5}
        />
      );
    }

    if (listAllGenreTelevision.data && !listAllGenreTelevision.loading) {
      const componentGenreMovie = listAllGenreTelevision.data.map(
        (items, index) => {
          return (
            <button className="genre_movie_container_button" key={index}>
              <Link>{items.name}</Link>
            </button>
          );
        }
      );
      return componentGenreMovie;
    }
  }, [listAllGenreTelevision]);

  return (
    <Fragment>
      <div className="genre container">
        <div className="genre_title_container">
          <FiVideo size={20} />
          <h1>Movie Genre List</h1>
        </div>
        <div className="genre_movie_container">{CONTENT_GENRE_MOVIES}</div>
        <div className="genre_title_container">
          <FiTv size={20} />
          <h1>Television Genre List</h1>
        </div>
        <div className="genre_movie_container">{CONTENT_GENRE_TELEVISION}</div>
      </div>
    </Fragment>
  );
};

export default Genre;
