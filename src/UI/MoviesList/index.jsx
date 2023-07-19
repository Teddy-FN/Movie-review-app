import React, { useMemo } from "react";
// PlaceHolder Image
import PlaceHolderImage from "../../Assets/Img/placeholder.png";
// Styled
import "./moviesList.scss";
import { Link } from "react-router-dom";

// React Start
import ReactStars from "react-rating-stars-component";

// Lazy Load Image Component
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { MemoizedSkeletonLoading } from "../../Component/SkeletonLoading";

const ARR = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const MoviesList = (props) => {
  console.log("props =>", props);
  const ListMovieUpcoming = useMemo(() => {
    if (props.data.loading) {
      return (
        <div className="skeleton_wrapper">
          {ARR.map((items) => (
            <MemoizedSkeletonLoading key={items} />
          ))}
        </div>
      );
    }

    if (props.data.data && !props.data.loading) {
      return props.data?.data?.map((items, idx) => (
        <Link
          key={idx}
          className="movie_list_container_card"
          to={`detail/${items.id}`}
        >
          <LazyLoadImage
            alt="poster_list_movie"
            effect="blur"
            width="250"
            loading="lazy"
            height="auto"
            placeholderSrc={PlaceHolderImage}
            src={"https://image.tmdb.org/t/p/original/" + items.poster_path}
          />
          <div className="poster_container">
            <p>{items.title}</p>
            <ReactStars
              count={10}
              value={items.vote_average}
              edit={false}
              size={16}
              activeColor="#ffd700"
            />
          </div>
        </Link>
      ));
    }
  }, [props.data]);

  return (
    <section className="container">
      <h1 className="movie_genre_text">{props.toogle.name} Movies</h1>
      <section className="movie_list_container">{ListMovieUpcoming}</section>
    </section>
  );
};

export default MoviesList;
