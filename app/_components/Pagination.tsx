"use client";
import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  buttonClassName?: string;
  activeButtonClassName?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginate,
  buttonClassName = "bg-gray-300",
  activeButtonClassName = "bg-blue-500 text-white",
}) => {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  return (
    <ul className="flex flex-wrap mt-4">
      {Array.from({ length: pageNumbers }).map((_, index) => (
        <li key={index} className="mr-2 mb-2">
          <button
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? activeButtonClassName
                : buttonClassName
            } hover:bg-blue-600 focus:outline-none focus:bg-blue-600`}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
