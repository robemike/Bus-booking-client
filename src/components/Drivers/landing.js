import React, {useState, useEffect} from "react";
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
                const response = await fetch('https://bus-booking-server-1.onrender.com//drivers/drivers/buses');
                const data = await response.json();
                setBuses(data);
            } catch (error) {
                console.error('Error fetching buses:', error);
            }
        };

        const fetchTrips = async () => {
            try {
                const response = await fetch('https://bus-booking-server-1.onrender.com//drivers/view_scheduled_buses');
                const data = await response.json();
                setTrips(data);
            } catch (error) {
                console.error('Error fetching trips:', error);
            }
        };

        const fetchCustomers = async () => {
            try {
                const response = await fetch('https://bus-booking-server-1.onrender.com//drivers/customers');
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
        <div>
            <div className="landing-container">
                <div className="landing-sidebar">
                    <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
                    <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
                    <li><a onClick={() => navigate("/drivers/view_scheduled_buses")}>Trips</a></li>
                    <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
                </div>
                <div className="landing-content">
                    <div className="landing-cards">
                        <div className="landing-card" onClick={() => navigate('/drivers/buses')}>
                            <h2>Buses</h2>
                            <p>View Buses.</p>
                        </div>
                        <div className="landing-card" onClick={() => navigate('/drivers/view_scheduled_buses')}>
    
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

export default Landing