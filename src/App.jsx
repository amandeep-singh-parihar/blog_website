import React, { useContext, useEffect } from 'react'
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import { AppContext } from './Context/AppContext';
import "./App.css"

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[])

  return (
    <div>
        <Header/>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default App;