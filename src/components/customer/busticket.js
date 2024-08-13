import React, { useState } from "react";
import './busticket.css';

function BusTicket() {
    const [formData, setFormData] = useState({
        departure: '',
        arrival: '',
        date: '',
        seat_number: '',
        total_price: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleConfirm = () => {
        setShowPopup(false);
        console.log("Order confirmed:", formData);
        // Handle order confirmation logic here
    };

    const handleCancel = () => {
        setShowPopup(false);
    };

    return (
        <div className="bus-ticket">
            <img className="img" src="https://www.shutterstock.com/image-photo/bus-traveling-on-asphalt-road-600nw-1345741577.jpg" alt="Bus"/>
            <h1 className="header">BUS TICKET</h1>
            <form className="container" onSubmit={handleSubmit}>
                <label htmlFor="departure">Departure Time:</label>
                <input type="time" id="departure" name="departure" value={formData.departure} onChange={handleChange} required/>

                <label htmlFor="arrival">Arrival Time:</label>
                <input type="time" id="arrival" name="arrival" value={formData.arrival} onChange={handleChange} required/>

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required/>

                <label htmlFor="seat_number">Seat Number:</label>
                <input type="text" id="seat_number" name="seat_number" value={formData.seat_number} onChange={handleChange} required/>

                <label htmlFor="total_price">Total Price:</label>
                <input type="text" id="total_price" name="total_price" value={formData.total_price} onChange={handleChange} required/>

                <button type="button" className="mpesa-btn">Pay with Mpesa</button>

                <input type="submit" value="Submit"/>
            </form>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Confirm Your Ticket</h2>
                        <p><strong>Departure Time:</strong> {formData.departure}</p>
                        <p><strong>Arrival Time:</strong> {formData.arrival}</p>
                        <p><strong>Date:</strong> {formData.date}</p>
                        <p><strong>Seat Number:</strong> {formData.seat_number}</p>
                        <p><strong>Total Price:</strong> {formData.total_price}</p>
                        <button className="btn confirm" onClick={handleConfirm}>Confirm</button>
                        <button className="btn cancel" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BusTicket;

