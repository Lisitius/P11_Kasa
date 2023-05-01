import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home";
import Location from "./pages/Location/Location";

const FileRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/location/:id" element={<Location />} />
      {/* Routes */}
    </Routes>
  );
};

export default FileRoute;
