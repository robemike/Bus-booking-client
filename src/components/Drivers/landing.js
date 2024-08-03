import React from "react";
import './landing.css'; 
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div id="navbar"className="navbar">
                 <h1>BUSLINK</h1>
            </div>            
            <div className="sidebar">
                <h1>BUSLINK</h1>
                <ul>
                    {/* <li><a onClick={() => navigate("/dashboard")}>Dashboard</a></li> */}
                    <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
                    <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
                    <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
                </ul>
            </div>
            <div className="content">
                <div className="cards-container">
                    <div className="card" onClick={() => navigate('/drivers/buses')}>
                        <h2>Buses</h2>
                        <p>View Buses.</p>
                    </div>
                    <div className="card" onClick={() => navigate('/drivers/trips')}>
                        <h2>Trips</h2>
                        <p>View Scheduled Trips.</p>
                    </div>
                    <div className="card" onClick={() => navigate('/drivers/customer-list')}>
                        <h2>Customers</h2>
                        <p>View and manage customers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
