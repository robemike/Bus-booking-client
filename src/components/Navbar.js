import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand">BusLink</span>
      </div>
      <div className="navbar-right">
        <a href="">Sign up</a>
        <a href="">Contact us</a>
        <a href="">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;