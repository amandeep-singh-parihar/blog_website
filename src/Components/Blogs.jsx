import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

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
          {posts.map((post) => (
            <div key={post.id} className="w-full flex flex-col items-center">
              <div className="w-[40vw]">
                <p className="font-bold mt-6">{post.title}</p>
                <p className="text-xs mt-2">
                  By <span className="italic">{post.author}</span> on{" "}
                  <span className="font-semibold">{post.category}</span>
                </p>
                <p className="text-xs mt-1 font-medium">
                  Posted On <span>{post.date}</span>
                </p>
                <p className="text-sm font-medium mt-4">{post.content}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag, index) => {
                    return (
                      <span
                        className="text-blue-600 text-xs font-medium underline"
                        key={index}
                      >{`#${tag}`}</span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;
