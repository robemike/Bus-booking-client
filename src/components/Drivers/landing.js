import React, { useState, useEffect } from "react";
import './landing.css';
import { useNavigate } from "react-router-dom";

function Landing() {
    const [buses, setBuses] = useState([]);
    const [trips, setTrips] = useState([]);
    const [customers, setCustomers] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBuses = async () => {
            try {
                const response = await fetch('https://bus-booking-server.onrender.com/buses');
                const data = await response.json();
                setBuses(data);
            } catch (error) {
                console.error('Error fetching buses:', error);
            }
        };

        const fetchTrips = async () => {
            try {
                const response = await fetch('https://bus-booking-server.onrender.com/trips');
                const data = await response.json();
                setTrips(data);
            } catch (error) {
                console.error('Error fetching trips:', error);
            }
        };

        const fetchCustomers = async () => {
            try {
                const response = await fetch('https://bus-booking-server.onrender.com/customers');
                const data = await response.json();
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchBuses();
        fetchTrips();
        fetchCustomers();
    }, []);

    return (
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
                        <p>Total Buses: {buses.length}</p>
                    </div>
                    <div className="landing-card" onClick={() => navigate('/drivers/trips')}>
                        <h2>Trips</h2>
                        <p>Total Trips: {trips.length}</p>
                    </div>
                    <div className="landing-card" onClick={() => navigate('/drivers/customer-list')}>
                        <h2>Customers</h2>
                        <p>Total Customers: {customers.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

