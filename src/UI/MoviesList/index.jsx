import React, { useMemo } from "react";
import "./moviesList.scss";

// Styled
import "./moviesList.scss";

// Import React router Dom

import ReactStars from "react-rating-stars-component";

// Lazy Load Image Component
import { LazyLoadImage } from "react-lazy-load-image-component";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MoviesList = (props) => {
  const ListMovieUpcoming = useMemo(() => {
    if (props.data.loading)
      arr.map((items, index) => {
        return (
          <Skeleton
            key={index}
            highlightColor="#2b1b2e"
            baseColor="#573b5c"
            height={600}
            count={5}
            enableAnimation
            duration={1}
          />
        );
      });

    if (props.data.data)
      return props.data?.data?.map((items, idx) => {
        return (
          <div key={idx} className="movie_list_container_card">
            <LazyLoadImage
              alt={items.poster_path}
              effect="blur"
              width={250}
              height="auto"
              src={"https://image.tmdb.org/t/p/original/" + items.poster_path}
            />
            <div
              style={{
                alignSelf: "start",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <p>{items.title}</p>
              <ReactStars
                count={10}
                value={items.vote_average}
                edit={false}
                size={16}
                activeColor="#ffd700"
              />
            </div>
          </div>
        );
      });
  }, [props.data]);

  return (
    <section className="container">
      <h1 className="movie_genre_text">{props.toogle.name} Movies</h1>
      <section className="movie_list_container">{ListMovieUpcoming}</section>
    </section>
  );
};

export default MoviesList;
