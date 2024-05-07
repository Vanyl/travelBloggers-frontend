import React from 'react';
import { FaSearch } from "react-icons/fa";
import '../sass/navbar.sass';

function Navbar() {
  return (
    <nav className="navbar">
        {/* <Link to="/" className="navbar-logo">Logo</Link> */}
        <h3 className="navbar-logo">Travel Bloggers</h3> 
        
        <div className="navbar-links">
            {/*  <Link to="#" className="link" onClick={() => console.log('Login Soon')}>Login</Link>
      <Link to="#" className="link" onClick={() => console.log('Sign Up Soon')}>Sign Up</Link>
      <Link to="#" className="link" onClick={() => console.log('About Soon')}>About</Link>
      <Link to="#" className="link" onClick={() => console.log('Contact Soon')}>Contact</Link>
      <Link to="#" className="link" onClick={() => console.log('Search Soon')}><FaSearch /></Link> */}
            <h6 className="link" aria-disabled="true" onClick={() => console.log('Login Soon')}> Log in </h6>  
            
            <h6 className="link" aria-disabled="true" onClick={() => console.log('About Soon')}> About </h6>
            <h6 className="link" aria-disabled="true" onClick={() => console.log('Contact Soon')}> Contact </h6>
            <h6 className="link" aria-disabled="true" onClick={() => console.log('Search Soon')}><FaSearch /> </h6>
        </div>
    </nav>
  );
}

export default Navbar;



