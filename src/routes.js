import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/404/404.jsx";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home";
import Location from "./pages/Location/Location";

const FileRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/location/:id" element={<Location />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default FileRoute;
