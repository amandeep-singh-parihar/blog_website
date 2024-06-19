import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails({ post }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[40vw]">
        <NavLink to={`/blog/${post.id}`}>
          <span className="font-bold mt-6 hover:underline ease-linear">{post.title}</span>
        </NavLink>
        <p className="text-xs mt-2">
          By {" "}
          <span className="italic">{post.author}</span>
          on{" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className="font-semibold hover:underline ease-linear">{post.category}</span>
          </NavLink>
        </p>
        <p className="text-xs mt-1 font-medium">Posted on {post.date}</p>
        <p className="text-sm font-medium mt-4">{post.content}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span className="text-blue-600 text-xs font-medium underline">{`#${tag}`}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
