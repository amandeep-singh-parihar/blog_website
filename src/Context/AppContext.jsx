import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//step1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  //the children over here represents the children which is under the AppContextProvider in the main.jsx
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate=useNavigate();

  //data filling

  async function fetchBlogPosts(page = 1,tag=null,category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if(tag){
      url+=`&tag=${tag}`;
    }
    if(category){
      url+=`&category=${category}`;
    }
    try {
      const result = await fetch(url);
      const data=await result.json();
    //   console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
        console.log("Error in fetching data");
        setPage(1);
        setPosts([]);
        setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page){
    navigate({search: `?page=${page}`})
    //when the user click on the page change button
    setPage(page);
    //set the page for that page
    // fetchBlogPosts(page);
    //we call the fuction for that page
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
