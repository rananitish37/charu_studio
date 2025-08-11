import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
 import Services from "./components/Services";
 import Portfolio from "./components/Portfolio";
 import Academy from "./components/Academy";
 import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
