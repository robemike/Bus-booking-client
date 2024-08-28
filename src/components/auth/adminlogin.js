import React, { useEffect, useState } from "react";
import "./adminlogin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";
import Navbar from "../customer/Navbar";
import Footer from "../customer/Footer";

function AdminLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://bus-booking-server.onrender.com/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (email !== "laura@gmail.com" && password !== "3788450") {
        setError("This is a restricted area, kindly go back to your designated areas");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Login failed");
        return;
      }

      const data = await response.json();
      console.log(data);

      const { access_token } = data;

      // Save tokens in localStorage
      localStorage.setItem("access_token", access_token);
      let newUser = data.user;
      dispatch(addUser(newUser));
      console.log(localStorage.getItem("access_token"));

      // Navigate to admin dashboard after successful login
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error during logging the admin:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  function handleRoleChange(e) {
    setRole(e.target.value);
  }

  useEffect(() => {
    if (role === "Driver") {
      navigate("/drivers/login");
    } else if (role === "Customer") {
      navigate("/login");
    } else if (role === "Admin") {
      navigate("/admin/login");
    }
  }, [role, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <div className="admin-login">
        <h1>Welcome to Buslink</h1>
        <select value={role} onChange={handleRoleChange} required>
          <option>Select a role</option>
          <option>Customer</option>
          <option>Driver</option>
          <option>Admin</option>
        </select>
        <p>You are just one step away!</p>
        <h2>Fill in the details below to access your account.</h2>
        <hr />
        {error && <div className="error-message">{error}</div>}
        <label htmlFor="Email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email Address"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <button type="submit">Login</button>
        </div>
      </div>
      <Footer />
    </form>
  );
}

export default AdminLogin;
