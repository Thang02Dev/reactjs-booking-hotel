import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "../../assets/myboostrap.module.css";
import ReactPaginate from "react-paginate";
const Pagination = (props) => {
  return (
    <div className="my-3 text-center ">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <svg
            className="w-3.5 h-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        }
        onPageChange={(e) => {
          props.handlePageChange(e.selected + 1);
        }}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={props.count || 0}
        previousLabel={
          <svg
            className="w-3.5 h-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
        }
        renderOnZeroPageCount={null}
        breakLinkClassName={
          "border-neutral-300  border-solid flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        containerClassName={"  inline-flex -space-x-px text-base h-10"}
        pageLinkClassName={
          "border-neutral-300  border-solid flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        previousLinkClassName={
          "border-neutral-300  border-solid flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        nextLinkClassName={
          "border-neutral-300  border-r-[1px] border-solid flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        activeLinkClassName={
          "font-medium flex items-center justify-center px-3 h-8 text-blue-500  border border-gray-300 bg-blue-100 hover:bg-blue-200 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        }
      />
    </div>
  );
};

export default Pagination;
