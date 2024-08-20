import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../features/userSlice';
import { useDispatch, useSelector } from'react-redux';


function Navbar () {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const dispatch = useDispatch()
    
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("access_token")
    dispatch(addUser(''));
    alert('Logged out successfully');
    navigate("/")
  }


  return (
    <nav className="navbar">
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>

      <div className="navbar-left">
        <img src={Logo} alt="BusLink logo" className="buslink-logo" />

        <Link to= {'/'}className="brand">BusLink</Link>
      </div>
      <div className="navbar-right">
       {!user.id && <Link to={'/signup'} className='link'>Sign Up</Link>}
        {!user.id && <Link to={'/login'} className='link'>Log In</Link>}
        {user.id && <button onClick={handleLogOut} className='link' >Log out</button>}
      </div>
    </nav>
  );
};

export default Navbar;