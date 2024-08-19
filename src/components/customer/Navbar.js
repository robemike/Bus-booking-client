import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>

      <div className="navbar-left">
        <img src={Logo} alt="BusLink logo" className="buslink-logo" />

        <Link to= {'/'}className="brand">BusLink</Link>
      </div>
      <div className="navbar-right">
        <Link to={'/signup'} className='link'>Sign Up</Link>
        <Link to={'/login'} className='link'>Log In</Link>
        {/* <Link to={`/buses/${bus.id}/seats`}></Link> */}
      </div>
    </nav>
  );
};

export default Navbar;