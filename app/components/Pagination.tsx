import React from "react";

interface PaginationProps {
  currentPage: number;
  totalLinks: number;
  linksPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalLinks,
  linksPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalLinks / linksPerPage);

  return totalPages ? (
    <div className="mt-4 text-xl font-medium text-center">
      &lt;
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`mx-1 px-2 ${
            currentPage === index + 1 ? "border border-gray-400" : "border-0"
          }`}
        >
          {index + 1}
        </button>
      ))}
      &gt;
    </div>
  ) : (
    ""
  );
};

export default Pagination;
