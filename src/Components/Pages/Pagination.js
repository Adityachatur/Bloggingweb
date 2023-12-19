import React from 'react';

const Pagination = ({ onPageChange, CurrentPage, pageSize, blogs }) => {
  const totalPage = Math.ceil(blogs.length / pageSize);

  const renderPaginationLink = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map((pagehandle) => (
      <li
        onClick={() => onPageChange(pagehandle)}
        className={`cursor-pointer ${pagehandle === CurrentPage ? "bg-orange-500 rounded" : ""} rounded md:p-1 m-2`}
        key={pagehandle}
      >
        <span href="#" className={pagehandle === CurrentPage ? "text-white" : "text-black"}>
          {pagehandle}
        </span>
      </li>
    ));
  }

  return (
    <div className="flex items-center justify-center mt-10 mb-5">
      <ul className="flex">
        <li>
          <button
            onClick={() => onPageChange(CurrentPage - 1)}
            disabled={CurrentPage === 1}
            className='px-4 py-2 mr-2 bg-blue-500 text-white rounded'
          >
            Prev
          </button>
        </li>

        <div className='flex'>{renderPaginationLink()}</div>

        <li>
          <button
            onClick={() => onPageChange(CurrentPage + 1)}
            disabled={CurrentPage === totalPage}
            className='px-4 py-2 ml-2 bg-blue-500 text-white rounded'
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;