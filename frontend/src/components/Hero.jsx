import React from 'react';
import Navbar from './Navbar'; // Assure-toi que le chemin est correct
import '../sass/hero.sass';

function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <h1 className="hero-title">Ready to Travel?</h1>
      <div className="search-bar">
        <input type="text" placeholder="Your next destination..." />
        <button type="submit">Search</button>
      </div>
    </div>
  );
}

export default Hero;
