import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import Layout from "./pages/admin/Layout";
import Dashboard from './pages/admin/Dashboard';
import AddBlog from './pages/admin/AddBlog';
import ListBlog from './pages/ListBlog';
import Comments from './pages/admin/Comments';
import Login from './components/admin/Login';
import 'quill/dist/quill.snow.css';

const App = () => {
  return (
    <>
  
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about" element={<About />} />

        <Route path="/admin" element={true ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='addBlog' element={<AddBlog/>}/>
          <Route path='listBlog' element={<ListBlog/>}/>
          <Route path='comments' element={<Comments/>}/>
        </Route>

      </Routes>
    </>
  );
};

export default App;
