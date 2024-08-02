import React from "react";
import './signup.css'; 
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/");
    }
    return (
        <form action="action_page.php" style={{ border: '1px solid #ccc' }}>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>

                <div class="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        <a href="#">Driver</a>
                        <a href="#">Customer</a>
                        <a href="#">Admin</a>
                    </div>
                </div>
                <hr />

                

                <label htmlFor= 'firstname'><b> First Name</b></label>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    name="name"
                    required
                />

                <label htmlFor="lastname"><b>Last Name</b></label>
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastname"
                    required
                />
                <label htmlFor="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    required
                />

                <label htmlFor='lisno'><b>License No.</b></label>
                <input
                    type = 'text'
                    placeholder='Enter License No.'
                    name='lisno'
                    required
                />

                <label htmlFor="PhoneNo"><b>Phone No.</b></label>
                <input
                    type="text"
                    placeholder="Enter Phone No."
                    name="PhoneNo"
                    required
                />

                <label htmlFor="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="psw-repeat"
                    required
                />

                

                <div className="clearfix">
                    <button type="button" onClick={handleCancel} className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

export default Signup;
