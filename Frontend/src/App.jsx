import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Experiences from "./pages/Experiences";
import About from "./pages/About";

const App = () => {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
