import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Autre composant */}
        <Routes />
        {/* Autre composant */}
      </div>
    </BrowserRouter>
  );
};

export default App;
