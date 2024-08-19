
import React, { useState, useEffect } from "react";
import './trips.css';
import { useNavigate } from "react-router-dom";

function Trips() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://bus-booking-server.onrender.com/drivers/view_scheduled_buses')
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
            .catch(error => console.error('Error fetching trip data:', error));
    }, []);

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    return (
        <div>
            <div className="trips-sidebar">
                <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
                <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
                <li><a onClick={() => navigate("/drivers/view_scheduled_buses")}>Trips</a></li>
                <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
            </div>
            <div className="trips-container">
                <div className="trips-schedule">
                    <div className="trips-header">Bus Schedule</div>
                    <div className="trips-services">
                        {services.length > 0 ? (
                            services.map((service, index) => (
                                <div className="trips-service" key={index} onClick={() => handleServiceClick(service)}>
                                    <h3>{service.bus.username}</h3>
                                    <p>Departure: {service.departure_time} | Arrival: {service.arrival_time}</p>
                                    <p>Occupied Seats:  {service.occupied_seats}</p>
                                    <p>Number Plate:  {service.bus.number_plate}</p>
                                    <p className="trips-status">{service.status}</p>
                                </div>
                            ))
                        ) : (
                            <p>No trips available</p>
                        )}
                    </div>
                </div>
            </div>

            {selectedService && (
                <div className="trips-modal">
                    <div className="trips-modal-content">
                        <h2>Trip Details</h2>
                        <p><strong>Bus Name:</strong> {selectedService.bus.username}</p>
                        <p><strong>Number Plate:</strong> {selectedService.bus.number_plate}</p>
                        <p><strong>Departure Time:</strong> {selectedService.departure_time}</p>
                        <p><strong>Arrival Time:</strong> {selectedService.arrival_time}</p>
                        <p><strong>Occupied Seats:</strong> {selectedService.occupied_seats}</p>
                        <p><strong>Status:</strong> {selectedService.status}</p>
                        <button className="trips-close-button" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Trips;