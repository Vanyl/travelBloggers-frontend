import React from 'react';
import { FaSearch } from "react-icons/fa";
import '../sass/navbar.sass';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="navbar">
        <Link to="/" className="navbar-logo">Travel Bloggers</Link>   
        <div className="navbar-links">
          <Link to="/authentication" className="link" onClick={() => console.log('Login Soon')}>Login</Link>
          <Link to="/authentication" className="link" onClick={() => console.log('Sign Up Soon')}>Sign Up</Link>
          <Link to="/about" className="link" onClick={() => console.log('About Soon')}>About</Link>
          <Link to="#" className="link" onClick={() => console.log('Contact Soon')}>Contact</Link>
          <Link to="#" className="link" onClick={() => console.log('Search Soon')}><FaSearch /></Link>
        </div>
    </nav>
  );
}

export default Navbar;



