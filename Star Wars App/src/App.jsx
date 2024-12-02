import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StarshipDetailPage from "./pages/StarshipDetailPage";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starship/:id" element={<StarshipDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
