import React, { useState } from "react";
import './customerlogin.css'
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const navigate = useNavigate();

  

    return (
        <form onSubmit={handleSubmit}>

            <div className="customer-login">
                <h1>Welcome to Buslink</h1>
                <p>You are just one step away!</p>
                <h2>Fill in the details below to access your account.</h2>
                <hr></hr>
                <label htmlFor="Email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email Address"
                    name="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="psw"><b>Password</b></label>
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
                <div className="signin-link">
                        <p>Don't have an account <a href="#" onClick={() => navigate("/signup")}>Sign up</a>.</p>
                    </div>
                </div>
                
            </div>
        </form>
    );
}

export default Login;

