import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../Components/Header";
import Spinner from "../Components/Spinner";
import BlogDetails from "../Components/BlogDetails";

function BlogPage() {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    // console.log("url is below");
    // console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
      // in this in the API go and read the API
    } catch (error) {
      console.log("Error in blog id");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className="w-full flex justify-center mt-4">
        <div className="w-[40vw] mt-4">
          <div>
            <button
              className="px-3 py-1 border-2 rounded-md text-xs font-bold hover:bg-gray-100 mb-4"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner />
            </div>
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              <h2>Related Blogs</h2>
              {relatedBlogs.map((post) => (
                <div key={post.id}>
                  <BlogDetails post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="font-bold text-xl mt-2">No Blog Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
