import React from 'react';
import '../sass/subfooter.sass'; 
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function SubFooter() {
  return (
    <div className="subfooter">
        <blockquote className="travel-quote">
            "The most beautiful thing in the world is, of course, the world itself."
            <div className="quote-author">– Wallace Stevens</div>
        </blockquote>
        <div className="sub-footer-footer-content">
            <h3 >Travel Bloggers</h3>
            <div className="sub-link-container">
              <h4 className="link">About</h4>
              <h4 className="link">Contact</h4>
            </div>
            <div className="sub-social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            </div>
          </div>
          <div className="sub-legal">
              <p>© 2024 Travel Bloggers. All rights reserved.</p>
              <a href="#" className="sub-legal-link">Legal Notice</a>
        </div>
    </div>
  );
}

export default SubFooter;

