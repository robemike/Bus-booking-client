import React, { useState } from "react";
import './driversignup.css'; 
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNo] = useState('');
    const [license_number, setLicenseNo] = useState('');
    const [years_of_experience, setYearsOfExperience] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                    phone_number,
                    license_number,
                    years_of_experience,
                    password
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Signup failed');
            }

            const data = await response.json();
            const { access_token } = data;

            localStorage.setItem("access_token", access_token);
            let driver = data.driver
            dispatch(addUser(driver))
            navigate("/drivers/login");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="driversignup-container">
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

                <label htmlFor="PhoneNo"><b>Phone No.</b></label>
                <input
                    type="text"
                    placeholder="Enter Phone No."
                    name="PhoneNo"
                    value={phone_number}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                />

                <label htmlFor='license_no'><b>License No.</b></label>
                <input
                    type='text'
                    placeholder='Enter License No.'
                    name='license_no'
                    value={license_number}
                    onChange={(e) => setLicenseNo(e.target.value)}
                    required
                />

                <label htmlFor="exp"><b>Years of Experience</b></label>
                <input
                    type="text"
                    placeholder="Enter Years of Experience"
                    name="exp"
                    value={years_of_experience}
                    onChange={(e) => setYearsOfExperience(e.target.value)}
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

                <div className="driversignup-clearfix">
                    <button type="submit" className="driversignup-btn">Sign Up</button>
                    <div className="driversignup-signin-link">
                        <p>Already have an account? <a href="#" onClick={() => navigate("/drivers/login")}>Sign in</a>.</p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Signup;