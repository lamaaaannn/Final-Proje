import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blogdesign from './components/Blogdesign'; 
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import "./App.css";
import AppDesign from "./pages/AppDesign";
import AppDesign2 from "./pages/AppDesign2";
import ProjeDetail1 from "./pages/ProjeDetail1";
import ProjeDetail2 from "./pages/ProjeDetail2";
import ProjeDetail3 from "./pages/ProjeDetail3";
import ProjeDetail4 from "./pages/ProjeDetail4";
import Design from "./components/Blogdesign";
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/appdesign" element={<AppDesign />} />
        <Route path="/appdesign2" element={<AppDesign2 />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/projedetail1" element={<ProjeDetail1/>} />
        <Route path="/projedetail2" element={<ProjeDetail2/>} />
        <Route path="/projedetail3" element={<ProjeDetail3/>} />
        <Route path="/projedetail4" element={<ProjeDetail4/>} />
        <Route path="/blogdesign/:id" element={<Blogdesign/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default App;
