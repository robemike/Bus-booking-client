import React, { useState } from "react";
import "./logind.css";

function LoginDriver() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
    <div className="container">
      <h1>Welcome to Buslink</h1>
      <p>You are just one step away</p>
      <b>Login</b> <br/>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="passw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="passsw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p>
          Don't have an account?<a href="./signup"> Signup</a>
        </p>
      </form>
    </div>
    </div>
  );
}

export default LoginDriver;