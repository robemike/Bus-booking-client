import React, { useState, useEffect } from "react";
import "./driverslogin.css";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import Navbar from "../customer/Navbar";
import Footer from "../customer/Footer";

function Logins() {
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = {
      email: email,
      password: password,
      license_number: licenseNo,
    };
    console.log(credentials);
    fetch("https://bus-booking-server.onrender.com/drivers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
            const errorData = response.json();
            setError(errorData.error || "Signup failed");
            return;
          }
      
          const data = response.json();
          console.log(data)
          const { access_token } = data;
      
          // Save tokens in localStorage
          localStorage.setItem("access_token", access_token);
          let newUser = data.driver
          dispatch(addUser(newUser))
          console.log(localStorage.getItem("access_token"));
      
          navigate("/drivers/landing");
  })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwtToken", data.token);

          navigate("/drivers/landing");
        } else {
          setError("Invalid login credentials. Please try again.");
        }
      })
      .catch((err) => {
        setError(`Login failed: ${err.message}`);
      });
  };
  function handleRoleChange(e) {
    setRole(e.target.value);
  }
  useEffect(() => {
    if (role === "Driver") {
      navigate("/drivers/login");
    } else if (role === "Customer") {
      navigate("/login");
    }
  }, [role]);

  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <div className="drivers-login">
        <h1>Welcome to Buslink</h1>
        <select value={role} onChange={handleRoleChange} required>
          <option>Select a role</option>
          <option>Customer</option>
          <option>Driver</option>
        </select>
        <p>You are just one step away!</p>
        <h2>Fill in the details below to access your account.</h2>
        <hr />
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="Email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="Lisno">License No.</label>
        <input
          type="text"
          placeholder="Enter License No."
          name="Lisno"
          value={licenseNo}
          onChange={(e) => setLicenseNo(e.target.value)}
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
        <p>
              Don't have an account?{" "}
              <a href="#" onClick={() => navigate("/drivers/signup")}>
                Sign Up
              </a>
              .
            </p>
      </div>
      <Footer />
    </form>
  );
}

export default Logins;
