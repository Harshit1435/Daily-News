import './App.css';
// import Navbar from './Components/Navbar';
// import BlogPostItem from './Components/BlogPostItem';


import BlogPostDetails from './Components/BlogPostDetails';
import BlogPostList from './Components/BlogPostList';
import { Route, Routes } from 'react-router-dom';
// import { useState } from 'react';

function App() {
// const apiKey = process.env.REACT_APP_NEWS_API;
const apiKey=process.env.REACT_APP_NEWS_API
  return (
    <>
    
    <BlogPostDetails/>
    <Routes>
    <Route exact path="/" element={<BlogPostList apiKey={apiKey} category={'general'} />} />
    <Route exact path='/business' element={<BlogPostList apiKey={apiKey} category={'business'} />}></Route>
    <Route exact path='/entertainment' element={<BlogPostList apiKey={apiKey} category={'entertainment'} />}></Route>
    <Route exact path='/health' element={<BlogPostList apiKey={apiKey} category={'health'} />}></Route>
    <Route exact path='/science' element={<BlogPostList apiKey={apiKey} category={'science'} />}></Route>
    <Route exact path='/sports' element={<BlogPostList apiKey={apiKey} category={'sports'} />}></Route>
    <Route exact path='/technology' element={<BlogPostList apiKey={apiKey} category={'technology'} />}></Route>
    

    </Routes>
    </>
  );

  
}



export default App;
