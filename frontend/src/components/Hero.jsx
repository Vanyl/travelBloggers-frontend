import React from 'react';
import Navbar from './Navbar'; 
import { FaSearch } from "react-icons/fa";
import '../sass/hero.sass';

function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <h1 className="hero-title">Ready to Travel?</h1>
      <div className="search-bar">
        <input type="text" placeholder="Your next destination..." />
        <button type="submit"><span className="search-icon"><FaSearch /></span></button>
      </div>
      <div className="scroll-indicator">
      <div className="mouse"></div>
      </div>
    </div>
  );
}

export default Hero;
