import React, { useState } from "react";
import './driverslogin.css';
import { useNavigate } from "react-router-dom";

function Logins() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [licenseNo, setLicenseNo] = useState(''); 
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const credentials = {
            email: username,
            password: password,
            licenseNo: licenseNo 
        };

        fetch("https://bus-booking-server.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.token) {
                
                localStorage.setItem("jwtToken", data.token);

                navigate("/drivers/landing");
            } else {
                setError("Invalid login credentials. Please try again.");
            }
        })
        .catch(err => {
            setError(`Login failed: ${err.message}`);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="drivers-login">
                <h1>Welcome to Buslink</h1>
                <p>You are just one step away!</p>
                <h2>Fill in the details below to access your account.</h2>
                <hr />
                {error && <p className="error-message">{error}</p>}
                <label htmlFor="Email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email Address"
                    name="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                </div>
            </div>
        </form>
    );
}

export default Logins;
