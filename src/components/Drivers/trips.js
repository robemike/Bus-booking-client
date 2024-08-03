import React from "react";
import './trips.css';
import { useNavigate } from "react-router-dom";

function Trips() {
    const services = [
        {
            name: "Super Metro",
            departureTime: "6:00 PM",
            arrivalTime: "3:00 AM",
            price: 2500,
            status: "FULLY BOOKED"
        },
        {
            name: "Guardian",
            departureTime: "6:30 PM",
            arrivalTime: "3:30 AM",
            price: 2800,
            status: "FULLY BOOKED"
        },
        {
            name: "Lopha Travels",
            departureTime: "7:00 PM",
            arrivalTime: "4:00 AM",
            price: 3000,
            status: "FULLY BOOKED"
        },
        {
            name: "Starbus",
            departureTime: "8:30 PM",
            arrivalTime: "6:15 AM",
            price: 3500,
            status: "12 SEATS AVAILABLE"
        }
    ];

    const servicesJSX = services.map((service, index) => (
        <div className="service" key={index}>
            <h3>{service.name}</h3>
            <p>Departure: {service.departureTime} | Arrival: {service.arrivalTime}</p>
            <p>Price: KSH {service.price}</p>
            <p className="status">{service.status}</p>
        </div>
    ));

    return (
        <div>
            <div className="schedule">
                <div className="header">Bus Schedule - Nairobi to Sugoi (July 24, 2024)</div>
                <div className="services">
                    {servicesJSX} {/* Render the services JSX here */}
                </div>
                {/* <div className="footer">All prices are in KSH</div> */}
            </div>
        </div>
    );
}

export default Trips;
