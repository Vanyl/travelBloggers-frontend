import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import '../sass/hero.sass';
import Search from './Search.jsx'

function Hero() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.elements[0].value.toLowerCase();
    const userInputCapitalFirstLetter = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    navigate(`/country/${userInputCapitalFirstLetter}`);
  };

  return (
    <div className="hero">
      <h1 className="hero-title">Ready to Travel?</h1>
      <Search />
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </div>
  );
}

export default Hero;