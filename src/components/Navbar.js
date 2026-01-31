import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch, darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <Link to="/" className="nav-brand">
        <h2> News Aggregator</h2>
      </Link>
      
      <div className="nav-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search news..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
