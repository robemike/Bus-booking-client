import React from "react";
import './signupd.css'; 


function SignupDriver() {

    return (
        <div className="container">
            <div className="form-container">
                <b>Sign Up</b>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <form action="/action_page.php">
                    <label htmlFor="first-name"><b>First Name</b></label>
                    <input type="text" placeholder="Enter First Name" name="first-name" required />
                    
                    <label htmlFor="last-name"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter Last Name" name="last-name" required />
                    
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" required />
                    
                    <label htmlFor="license-number"><b>License No.</b></label>
                    <input type="text" placeholder="Enter License No." name="license-number" required />
                    
                    <label htmlFor="phone-number"><b>Phone No.</b></label>
                    <input type="text" placeholder="Enter Phone No." name="phone-number" required />
                    
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />
                    
                    <label htmlFor="confirm-password"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="confirm-password" required />
                    
                    
                    <button type="submit">Sign Up</button>
                    <p>
                     Already have an account?<a href="./login"> Login</a>
                    </p>
                
                </form>
            </div>
        </div>
    );
}

export default SignupDriver;
