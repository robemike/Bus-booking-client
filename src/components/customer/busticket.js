import React from "react";
import { useLocation } from "react-router-dom";
import './busticket.css';

function BusTicket() {
    const location = useLocation();
    const { formData, bus, selectedSeats } = location.state;
    const totalCost = bus.cost_per_seat * selectedSeats.length;
    const selectedSeatsString = selectedSeats.join(", ");
    console.log(formData);

    const handleConfirm = () => {
        
        console.log("Order confirmed:", formData);
    };

    return (
        <div className="bus-ticket">
            <img className="img" src="https://www.shutterstock.com/image-photo/bus-traveling-on-asphalt-road-600nw-1345741577.jpg" alt="Bus" />
            <h1 className="header">BUS TICKET</h1>
            <div className="container">
                <p><strong>Current Address:</strong> {formData.current_address}</p>
                <p><strong>Destination:</strong> {formData.destination}</p>
                <p><strong>Booking Date:</strong> {formData.departure_date}</p>
                <p><strong>Departure Time:</strong> {formData.departure_time}</p>
                <p><strong>Selected Seats:</strong> {selectedSeatsString}</p>
                <p><strong>Total Cost:</strong> ${totalCost}</p>
                <button className="btn confirm" onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    );
}

export default BusTicket;
