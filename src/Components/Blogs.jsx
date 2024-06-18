import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

function Blogs() {
  //consume
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="relative min-h-screen">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="pt-16">
          <p>No Post Found</p>
        </div>
      ) : (
        <div className="mt-4 mb-16">
          {posts.map((post) => {
            return (
              <Card key={post.id} post={post}/>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Blogs;
