import React, { memo } from "react";
import "./pagination.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageChange, pageOffset }) => {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageClassName="page-item pagination-page"
      pageLinkClassName="page-link"
      previousClassName="page-item previous"
      previousLinkClassName="page-link"
      nextClassName="page-item next"
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
  );
};
export const MemoizedPagination = memo(Pagination);
