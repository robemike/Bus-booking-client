import React, { useState, useEffect } from "react";
import './trips.css';
import { useNavigate } from "react-router-dom";

function Trips() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
       
        fetch('https://bus-booking-server.onrender.com/trips')
            .then(response => response.json())
            .then(data => {
               
                setServices(data);
            })
            .catch(error => console.error('Error fetching trip data:', error));
    }, []);

    return (
        <div>
            <div className="trips-sidebar">
                <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
                <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
                <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
                <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
            </div>
            <div className="trips-container">
                <div className="trips-schedule">
                    <div className="trips-header">Bus Schedule</div>
                    <div className="trips-services">
                        {services.length > 0 ? (
                            services.map((service, index) => (
                                <div className="trips-service" key={index}>
                                    <h3>{service.name}</h3>
                                    <p>Departure: {service.departure_time} | Arrival: {service.arrivalTime}</p>
                                    <p>Price: KSH {service.price}</p>
                                    <p className="trips-status">{service.status}</p>
                                </div>
                            ))
                        ) : (
                            <p>No trips available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trips;
