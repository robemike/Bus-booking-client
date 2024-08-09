import React from "react";
import './landing.css';
import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="landing-container">
                <div className="landing-sidebar">
                    <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
                    <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
                    <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
                    <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
                </div>
                <div className="landing-content">
                    <div className="landing-cards">
                        <div className="landing-card" onClick={() => navigate('/drivers/buses')}>
                            <h2>Buses</h2>
                            <p>View Buses.</p>
                        </div>
                        <div className="landing-card" onClick={() => navigate('/drivers/trips')}>
                            <h2>Trips</h2>
                            <p>View Scheduled Trips.</p>
                        </div>
                        <div className="landing-card" onClick={() => navigate('/drivers/customer-list')}>
                            <h2>Customers</h2>
                            <p>View and manage customers.</p>
                        </div>
                    </div>
                </div>/
            </div>
        </div>
    );
}

export default Landing;
