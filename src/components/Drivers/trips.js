import React, { useState, useEffect } from "react";
import './trips.css';
import { useNavigate } from "react-router-dom";

function Trips() {
    const [services, setServices] = useState([]); 
    const navigate = useNavigate(); 

   
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('https://bus-booking-server.onrender.com/');
                const data = await response.json();
                setServices(data); 
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchServices();
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
                    <div className="trips-header">Bus Schedule - Nairobi to Sugoi (July 24, 2024)</div>
                    <div className="trips-services">
                        {services.length > 0 ? (
                            services.map((service, index) => (
                                <div className="trips-service" key={index}>
                                    <h3>{service.name}</h3>
                                    <p>Departure: {service.departureTime} | Arrival: {service.arrivalTime}</p>
                                    <p>Price: KSH {service.price}</p>
                                    <p className={`trips-status ${service.status === "FULLY BOOKED" ? "full" : "available"}`}>
                                        {service.status}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>Loading services...</p>
                        )}
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Trips;
