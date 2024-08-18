import React, { useState } from "react";
import './customersignup.css'; 
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNo] = useState('');
    const [id_or_passport, setIdNo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('https://bus-booking-server.onrender.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    address,
                    phone_number,
                    id_or_passport,
                    password
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Signup failed');
            }

            const data = await response.json();
            const { token } = data;

            localStorage.setItem('jwt', token); 
            navigate("/login");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="customer-signup">
                <h1>Sign Up</h1>
                <p>Please fill in the details below to create an account.</p>
                <hr />

                <label htmlFor='firstname'><b>First Name</b></label>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />

                <label htmlFor="lastname"><b>Last Name</b></label>
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <label htmlFor="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="address"><b>Address</b></label>
                <input
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />

                <label htmlFor="PhoneNo"><b>Phone No.</b></label>
                <input
                    type="text"
                    placeholder="Enter Phone No."
                    name="PhoneNo"
                    value={phone_number}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                />

                <label htmlFor='ID'><b>ID/Passport No.</b></label>
                <input
                    type='text'
                    placeholder='Enter ID/Passport No.'
                    name='ID'
                    value={id_or_passport}
                    onChange={(e) => setIdNo(e.target.value)}
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

                <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="psw-repeat"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <div className="clearfix">
                    <button type="submit" className="signupbtn">Sign Up</button>
                    <div className="signin-link">
                        <p>Already have an account? <a onClick={() => navigate("/login")}>Login</a>.</p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Signup;