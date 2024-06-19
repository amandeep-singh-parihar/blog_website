import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-evenly shadow-inner border-t-2 bg-white py-2 h-10">
      <div className="w-[40vw] flex justify-between items-center">
        <div className="flex gap-3">
          {page > 1 && (
            <button
              className="px-2 py-1 border-2 rounded-md text-xs font-bold hover:bg-gray-100"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="px-3 py-1 border-2 rounded-md text-xs font-bold hover:bg-gray-100"
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
