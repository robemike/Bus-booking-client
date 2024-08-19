import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:support@buslink.com">support@buslink.com</a></p>
          <p>Phone: +254 113 720 062</p>
          <p>Address: Nairobi, Kenya</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <a href="https://facebook.com/" className="social-link">Facebook</a>
          <a href="https://twitter.com/" className="social-link">Twitter</a>
          <a href="https://instagram.com/" className="social-link">Instagram</a>
        </div>
        <div className="footer-section">
          <h2>About Us</h2>
          <p>BusLink is dedicated to providing the best bus travel experience. Our mission is to connect people with reliable and affordable transportation options.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BusLink. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;