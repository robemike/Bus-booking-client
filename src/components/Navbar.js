import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {useNavigate,useOutletContext} from 'react-router-dom'


const Navbar = () => {

  // const [user, setUser] = useOutletContext();
  // const navigate = useNavigate()

  // const handleLogOut = () => {
  //   localStorage.removeItem("access_token")
  //   setUser(null)
  //   navigate("/login")
  // }
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand">BusLink</span>
      </div>
      <div className="navbar-right">
        <Link to={'/signup'} className='link'>Sign Up</Link>
        <Link className='link'>Contact Us</Link>
        <Link to={'/login'} className='link'>Log In</Link>
        {/* <Link to={`/buses/${bus.id}/seats`}></Link> */}
        <button className='baton' >Log out</button>
      </div>
    </nav>
  );
};

export default Navbar;