import React, { useMemo, useEffect, useState } from "react";
import { MemoizedCarousel } from "../Component/Carousel";
import MoviesList from "../UI/MoviesList";

// Redux / Fetching data
import { useSelector, useDispatch } from "react-redux";
import { fetchGenreListMovies } from "../redux/getGenreMovie";
import { fetchAllListMovie } from "../redux/getMovie";

import ReactPaginate from "react-paginate";

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
  const [toogle, setToogle] = useState({ id: 28, name: "Action" });
  const [pageCount, setpageCount] = useState(100);
  const [pageOffset, setPageOffset] = useState(0);

  const listAllMovies = useSelector((state) => ({
    data: state.getMovie.data,
    loading: state.getMovie.loading,
    error: state.getMovie.error,
  }));

  useEffect(() => {
    dispatch(fetchGenreListMovies());
  }, []);

  useEffect(() => {
    dispatch(fetchAllListMovie(toogle));
  }, [toogle]);

  const onChangeToogle = (item) =>
    setToogle(() => {
      return {
        id: item.id,
        name: item.name,
      };
    });

  const handlePageChange = (event) => {
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    // setItemOffset(newOffset);
  };

  const LIST_ALL_GENRE = useMemo(() => {
    const component = DEFAULT_GENRE.map((items, idx) => (
      <li className="list_items" key={idx}>
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
  }, [DEFAULT_GENRE, toogle]);

  return (
    <React.Fragment>
      <MemoizedCarousel listGenre={LIST_ALL_GENRE} />
      <MoviesList
        data={listAllMovies}
        toogle={toogle}
        pageCount={pageCount}
        pageOffset={pageOffset}
      />
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={pageOffset}
      />
    </React.Fragment>
  );
};

export default Home;
