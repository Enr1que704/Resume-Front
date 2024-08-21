import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Experience from "./pages/experience";
import PastJobs from "./pages/pastJobs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/pastjobs" element={<PastJobs />} />
      </Routes>
    </Router>
  );
}

export default App;
