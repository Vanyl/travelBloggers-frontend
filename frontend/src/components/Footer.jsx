import React from 'react';
import '../sass/footer.sass';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h3 className="footer-blog-title">Travel Bloggers</h3>
        <div className="link-container">
          <h4 className="link">About</h4>
          <h4 className="link">Contact</h4>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
      </div>
      <div className="legal">
        <p>© 2024 Travel Bloggers. All rights reserved.</p>
        <a href="#" className="legal-link">Legal Notice</a>
      </div>
    </div>
  );
}

export default Footer;
