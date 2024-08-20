import React, { useState } from "react";
import './customerlogin.css';
import { useNavigate } from "react-router-dom";
import Footer from "../customer/Footer";
import Navbar from "../customer/Navbar";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
           
            const response = await fetch('https://bus-booking-server.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
               
                localStorage.setItem('token', data.token);

               
                navigate('/');
            } else {
              
                setError(data.message || 'Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Navbar />
            <div className="customer-login">
                <h1>Welcome to Buslink</h1>
                <p>You are just one step away!</p>
                <h2>Fill in the details below to access your account.</h2>
                <hr />
                {error && <div className="error-message">{error}</div>}
                <label htmlFor="Email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email Address"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                        <p>Don't have an account? <a href="signup" onClick={() => navigate("/signup")}>Sign up</a>.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </form>
        
    );
}

export default Login;