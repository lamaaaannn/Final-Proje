import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
// import Blog from './Blog';
// import About from './About';
// import Contact from './Contact';
import "./App.css";
import AppDesign from "./pages/AppDesign";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/appdesign" element={<AppDesign />} />
        {/* 
          <Route path="/blog" element={<Blog/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
