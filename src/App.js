// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router for routing
import { Link } from "react-router-dom"; // Used for navigation links
import Footer from "./Footer"; // Import Footer component correctly
import "./App.css"; // Import your CSS file

// Components for different pages
import Home from "./pages/Home";  // Home component in pages folder
import About from "./pages/About";  // About component in pages folder
import Contact from "./pages/Contact";  // Contact component in pages folder

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="navbar">
            <div className="brand">
              <Link to="/" className="brand-name">Resumex</Link>
            </div>
            <nav className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer /> {/* Include Footer here */}
      </div>
    </Router>
  );
}

export default App;
