import React from "react";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";


import './busticket.css';

function BusTicket() {
    const location = useLocation();
    const { formData, bus, selectedSeats } = location.state;
    const totalCost = bus.cost_per_seat * selectedSeats.length;
    const selectedSeatsString = selectedSeats.join(", ");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        const fetchPhoneNumber = async () => {
            try {
                const response = await fetch(`https://bus-booking-server.onrender.com/customers/${formData.customer_id}`);
                const customerData = await response.json();
                console.log(customerData);
                setPhoneNumber(customerData.phone_number);
;            } catch (error) {
                console.error("Error fetching phone number:", error);
            }
        };

        fetchPhoneNumber();
    }, [formData.customer_id]);

    const handleConfirm = () => {
        console.log("Order confirmed:", formData);
    };

    const handleMpesaPayment = async () => {
        try {
            const response = await fetch('/pay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: formData.phone_number,  
                    amount: totalCost,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("M-Pesa STK Push initiated:", data);
                alert('M-Pesa STK Push has been sent. Please complete the payment on your phone.');
            } else {
                console.error('M-Pesa STK Push failed:', data);
                alert('Failed to initiate M-Pesa payment. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
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
                <p><strong>Phone Number:</strong> {setPhoneNumber}</p>              
                <p><strong>Total Cost:</strong> Ksh{totalCost}</p>
                <button className="btn confirm" onClick={handleConfirm}>Confirm</button>
                <button className="btn mpesa" onClick={handleMpesaPayment}>Mpesa</button>
            </div>
        </div>
    );
}

export default BusTicket;

