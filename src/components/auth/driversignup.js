import React from "react";
import './driversignup.css'; 
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    // const handleCancel = () => {
    //     navigate("/login");
    // }
    return (
        <form action="action_page.php" style={{ border: '1px solid #ccc' }}>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in the details below to create an account.</p>
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


                <label htmlFor="PhoneNo"><b>Phone No.</b></label>
                <input
                    type="text"
                    placeholder="Enter Phone No."
                    name="PhoneNo"
                    required
                />
                <label htmlFor='lisno'><b>License No.</b></label>
                <input
                    type='text'
                    placeholder='Enter ID/Passport No.'
                    name='ID'
                    required
                />

                <label htmlFor="exp"><b>Years of Experience</b></label>
                <input
                    type="text"
                    placeholder="Enter Years of Experience"
                    name="exp"
                    required
                />

                <label htmlFor="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                />

                <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="psw-repeat"
                    required
                />



                <div className="clearfix">
                    <button type="submit" className="signupbtn">Sign Up</button>
                    <div className="signin-link">
                        <p>Already have an account? <a href="#" onClick={() => navigate("/drivers/login")}>Sign in</a>.</p>
                    </div>

                </div>
            </div>
        </form>
    );
}

export default Signup;