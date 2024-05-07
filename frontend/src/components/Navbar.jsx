import React from 'react';
import '../sass/navbar.sass';

function Navbar() {
  return (
    <nav className="navbar">
        
        <h3 className="navbar-logo">LOGO</h3> 
        
        <div className="navbar-links">
            
            <h6 className="link" aria-disabled="true" onClick={() => console.log('Login Soon')}> Login </h6>  
            <h6 className="link" aria-disabled="true" onClick={() => console.log('Sign Up Soon')}> Sign Up </h6>
            <h6 className="link" aria-disabled="true" onClick={() => console.log('Search Soon')}> Search </h6>
        </div>
    </nav>
  );
}

export default Navbar;

{/* <Link to="/" className="navbar-logo">Logo</Link> */}

{/*  <Link to="#" className="link">Login</Link>
        <Link to="#" className="link">Sign Up</Link>
        <Link to="#" className="link">Search</Link> */}