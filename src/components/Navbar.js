import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand">BusLink</span>
      </div>
      <div className="navbar-right">
        <Link to={'/signup'} className='link'>Sign Up</Link>
        <Link className='link'>Contact Us</Link>
        <Link to={'/login'} className='link'>Log In</Link>
        {/* <Link to={'/logout'} className='link'>Log Out</Link> */}
        {/* <Link to={`/buses/${bus.id}/seats`}></Link> */}
      </div>
    </nav>
  );
};

export default Navbar;