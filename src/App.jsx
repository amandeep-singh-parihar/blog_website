import React, { useContext, useEffect } from 'react'
// import Header from './Components/Header';
// import Blogs from './Components/Blogs';
// import Pagination from './Components/Pagination';
import { AppContext } from './Context/AppContext';
import "./App.css"
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams,setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(()=>{
    // fetchBlogPosts();
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      //iska matlab tag wala page show krna hai
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search])

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      {/* jab bhi hamare url me blog k aage kuch bhi likha aayega to use blogId man liya jayega */}
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  );
}

export default App;