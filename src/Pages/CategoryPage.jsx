import React from "react";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />

      <div className="w-full flex justify-center mt-4">
        <div className="w-[40vw] mt-4">
          <div>
            <button 
                className="px-3 py-1 border-2 rounded-md text-xs font-bold"
                onClick={() => navigate(-1)}>Back</button>
            <h2 className="font-bold text-xl mt-2">
              Blogs on <span>{category}</span>
            </h2>
          </div>
        </div>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage;
