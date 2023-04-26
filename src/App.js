import React from "react";
import { BrowserRouter } from "react-router-dom";
import FileRoute from "./routes";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Autre composant */}
        <FileRoute />
        {/* Autre composant */}
      </div>
    </BrowserRouter>
  );
};

export default App;
