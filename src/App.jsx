import React from "react";
import "./styles/base.scss";
import Home from "./pages/Home";
import Epk from "./pages/Epk";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/epk" element={<Epk />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
