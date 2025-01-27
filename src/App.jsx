import React from "react";

import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TvSeries from "./Pages/TvSeries";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Series" element={<TvSeries />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App
