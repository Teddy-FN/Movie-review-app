import React from "react";

// Styled
import "./genre.scss";

// Import React router Dom
import { Link } from "react-router-dom";

const ToogleGenre = ({ listGenre }) => {
  return (
    <section className="movie_list container">
      <section className="movie_list_genre_container container">
        <h3>Genres</h3>
        <ul className="movie_list_genre_container_list">{listGenre}</ul>
        <Link to="/genre">
          <p>More</p>
        </Link>
      </section>
    </section>
  );
};

export default ToogleGenre;
