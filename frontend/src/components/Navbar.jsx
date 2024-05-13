import React from 'react';
import { FaSearch } from "react-icons/fa";
import '../sass/navbar.sass';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
  
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Travel Bloggers</Link>   
      <div className="navbar-links">
        <Link to="/about" className="link">About</Link>
        <Link to="#" className="link">Contact</Link>
        <div className="right-links">
          {isLoggedIn ? (
            <>
              <Link to="/my-account" className="link">My Account</Link>
              <Link to="/logout" className="link">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/authentication" className="link" onClick={() => console.log('Login Soon')}>Login</Link>
              <Link to="/authentication" className="link" onClick={() => console.log('Sign Up Soon')}>Sign Up</Link>
            </>
          )}
          <FaSearch className="link search-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
