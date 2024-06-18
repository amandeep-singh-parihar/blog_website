import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex justify-evenly mt-4 shadow-inner border-2">
      <div className="w-[40vw] flex justify-between py-2 items-center">
        <div className="flex gap-3">
          {page > 1 && (
            <button
              className="px-2 py-1 border-2 rounded-md text-xs font-bold"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="px-3 py-1 border-2 rounded-md text-xs font-bold"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <div className="">
          <p className="font-bold text-xs">
            Page {page} of {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
