import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

function TagPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />

      <div className="w-full flex justify-center mt-4">
        <div className="w-[40vw] mt-4">
          <div >
            <button
              className="px-3 py-1 border-2 rounded-md text-xs font-bold"
              onClick={() => navigate(-1)}
            >
              Back
            </button>

            <h2 className="font-bold text-xl mt-2">
              Blogs Tagged <span>#{tag}</span>
            </h2>
          </div>
        </div>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
}

export default TagPage;
