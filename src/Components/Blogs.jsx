import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

function Blogs() {
  //consume
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="relative min-h-screen">
      <div className="w-full flex justify-center mt-2">
        <div className="w-[40vw]">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner />
            </div>
          ) : posts.length === 0 ? (
            <div className="font-bold text-xl mt-2">
              <p>No Post Found</p>
            </div>
          ) : (
            <div className="mt-4 mb-16">
              {posts.map((post) => {
                return <BlogDetails key={post.id} post={post} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
