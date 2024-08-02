import React, { useState } from "react";
import './login.css'
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

    const handleCancel = () => {
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
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
                <button type="button" onClick={handleCancel} className="cancelbtn">Cancel</button>
                </div>
                
            </div>
        </form>
    );
}

export default Login;


