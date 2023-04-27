import React from "react";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import FileRoute from "./routes";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <FileRoute />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
