import React from 'react';
import './Navbar.css'; // Ensure the path is correct
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../features/userSlice';

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    dispatch(addUser(''));
    alert('Logged out successfully');
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="BusLink logo" className="buslink-logo" />
        <Link to="/" className="brand">BusLink</Link>
      </div>
      <div className="navbar-right">
        {!user.id && <Link to="/signup" className="link">Sign Up</Link>}
        {!user.id && <Link to="/login" className="link">Log In</Link>}
        {user.id && <button onClick={handleLogOut} className="link">Log out</button>}
      </div>
    </nav>
  );
}

export default Navbar;
