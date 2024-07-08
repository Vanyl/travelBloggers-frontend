import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import '../sass/navbar.sass';


function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const userInput = searchQuery.toLowerCase();
    const userInputCapitalFirstLetter = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    navigate(`/country/${userInputCapitalFirstLetter}`);
  };


  const handleLogout = async () => {
    try {
      const response = await fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response.ok) {
        localStorage.removeItem('accessToken');
        console.log('Logout successful');
        setIsLoggedIn(false);
        navigate('/');
      } else {
        console.error('Error logging out:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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
      <div className={`navbar-links ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
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
            </>
          )}
          <form onSubmit={handleSearch} className="search-form">
            <div className={`search-container ${showSearch ? 'open' : ''}`}>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: showSearch ? '200px' : '0', opacity: showSearch ? '1' : '0' }}
              />  
              <FaSearch className="link search-icon" onClick={() => setShowSearch(!showSearch)} />
            </div>
          </form>
        </div>
      </div>

      <div className="hamburger-icon" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <RxHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;

