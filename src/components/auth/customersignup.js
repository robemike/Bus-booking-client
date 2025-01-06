import React, { useState, useEffect } from "react";
import "./customersignup.css";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import Footer from "../customer/Footer";
import Navbar from "../customer/Navbar";

function Signup() {
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNo] = useState("");
  const [id_or_passport, setIdNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const validateInputs = () => {
    if (phone_number.length !== 10 || !/^\d+$/.test(phone_number)) {
      return "Phone number must be exactly 10 digits and numeric.";
    }

    if (id_or_passport.length !== 8 || !/^\d+$/.test(id_or_passport)) {
      return "ID or Passport must be exactly 8 digits and numeric.";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch("https://bus-booking-server-1.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          address,
          phone_number,
          id_or_passport,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Signup failed.");
        return;
      }

      const data = await response.json();
      const { access_token, new_customer } = data;

      // Save tokens in localStorage
      localStorage.setItem("access_token", access_token);

      // Dispatch user data to the Redux store
      dispatch(addUser(new_customer));

      navigate("/customer");
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  useEffect(() => {
    if (role === "Driver") {
      navigate("/drivers/signup");
    } else if (role === "Customer") {
      navigate("/signup");
    }
  }, [role, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <div className="customer-signup">
        <h1>Sign Up</h1>
        <select value={role} onChange={handleRoleChange} required>
          <option value="">Select a role</option>
          <option value="Customer">Customer</option>
          <option value="Driver">Driver</option>
        </select>
        <p>Please fill in the details below to create an account.</p>
        <hr />

        {error && <div className="error-message">{error}</div>}

        <label htmlFor="firstname">
          <b>First Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastname">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="address">
          <b>Address</b>
        </label>
        <input
          type="text"
          placeholder="Enter Address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label htmlFor="PhoneNo">
          <b>Phone No.</b>
        </label>
        <input
          type="text"
          placeholder="Enter Phone No."
          name="PhoneNo"
          value={phone_number}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
        />

        <label htmlFor="ID">
          <b>ID/Passport No.</b>
        </label>
        <input
          type="text"
          placeholder="Enter ID/Passport No."
          name="ID"
          value={id_or_passport}
          onChange={(e) => setIdNo(e.target.value)}
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

        <label htmlFor="confirm-psw">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm-psw"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div>
          <button type="submit">Sign Up</button>
          <div className="signin-link">
            <p>
              Already have an account?{" "}
              <a href="/login" onClick={() => navigate("/login")}>
                Login
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

export default Signup;
