import React from 'react';
import { FaSearch } from "react-icons/fa";
import '../sass/navbar.sass';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` 
        }
      });

      if (response.ok) {
        // remove token from local storage
        localStorage.removeItem('accessToken');
        console.log("log out ok")
        setIsLoggedIn(false);
        // Redirect to the home page
        navigate('/');
      } else {
      
        console.error('Error logging out:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-logo">Travel Bloggers</Link>   
      <div className="navbar-links">
        <Link to="/about" className="link">About</Link>
        <Link to="/contact" className="link">Contact</Link>
        <div className="right-links">
          {isLoggedIn ? (
            <>
              <Link to="/my-account" className="link">My Account</Link>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/authentication" className="link" onClick={() => console.log('Login Soon')}>Login</Link>
              {/* <Link to="/authentication" className="link" onClick={() => console.log('Sign Up Soon')}>Sign Up</Link> */}
            </>
          )}
          <FaSearch className="link search-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
