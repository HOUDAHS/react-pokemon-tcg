import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

import Types from "./Pages/Types";
import Cards from "./Pages/Cards";
import Card from "./Pages/Card";
import Error404 from "./Pages/Error404";

import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Types />} />
          <Route path="/:type" element={<Cards />} />
          <Route path="/:type/:id" element={<Card />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
