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

const ARR = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const MoviesList = (props) => {
  console.log("props =>", props);
  const ListMovieUpcoming = useMemo(() => {
    if (!props.data.data && props.data.loading) {
      return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          {ARR.map((items, index) => {
            console.log("HELLO", items);
            return (
              <Skeleton
                highlightColor="#2b1b2e"
                baseColor="#573b5c"
                height={350}
                width={250}
                direction="ltr"
                enableAnimation
                duration={1}
              />
            );
          })}
        </div>
      );
    }

    if (props.data.data && !props.data.loading) {
      return props.data?.data?.map((items, idx) => {
        return (
          <div key={idx} className="movie_list_container_card">
            <LazyLoadImage
              alt={items.poster_path}
              effect="blur"
              width={250}
              loading="lazy"
              height="auto"
              src={"https://image.tmdb.org/t/p/original/" + items.poster_path}
              {...props}
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
