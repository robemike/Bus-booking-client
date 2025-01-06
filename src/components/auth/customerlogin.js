import React, { useEffect, useState } from "react";
import "./customerlogin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";
import Navbar from "../customer/Navbar";
import Footer from "../customer/Footer";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("https://bus-booking-server-1.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Login failed. Please check your credentials.");
        return;
      }

      const data = await response.json();
      const { access_token, user } = data;

      // Save tokens in localStorage
      localStorage.setItem("access_token", access_token);

      // Dispatch user data to the Redux store
      dispatch(addUser(user));

      // Redirect based on role or default to the customer dashboard
      navigate("/customer");
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

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
      <div className="customer-login">
        <h1>Welcome to Buslink</h1>
        <select value={role} onChange={handleRoleChange} required>
          <option value="">Select a role</option>
          <option value="Customer">Customer</option>
          <option value="Driver">Driver</option>
          <option value="Admin">Admin</option>
        </select>
        <p>You are just one step away!</p>
        <h2>Fill in the details below to access your account.</h2>
        <hr />
        {error && <div className="error-message">{error}</div>}
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div>
          <button type="submit">Login</button>
          <div className="signin-link">
            <p>
              Don't have an account?{" "}
              <a href="/signup" onClick={() => navigate("/signup")}>
                Sign up
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </form>
  );
}

export default Login;
