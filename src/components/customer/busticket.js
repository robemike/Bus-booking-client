import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './busticket.css';

function BusTicket() {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData, bus, selectedSeats, numberOfSeats } = location.state || {};
    const totalCost = bus ? bus.cost_per_seat * selectedSeats.length : 0;
    const selectedSeatsString = selectedSeats ? selectedSeats.join(", ") : '';
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        if (formData?.customer_id) {
            const fetchPhoneNumber = async () => {
                try {
                    const response = await fetch(`https://bus-booking-server.onrender.com/customers/${formData.customer_id}`);
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`);
                    }
                    const customerData = await response.json();
                    console.log("Customer Data:", customerData);
                    setPhoneNumber(customerData.phone_number);
                } catch (error) {
                    console.error("Error fetching phone number:", error);
                }
            };

            fetchPhoneNumber();
        }
    }, [formData?.customer_id]);

    const handleConfirm = async () => {
        console.log("Form Data:", formData); 
        
        // Check for customer_id
        if (!formData || !formData.customer_id) {
            console.error("Missing customer_id in formData");
            alert("An error occurred: Missing customer ID. Please try again.");
            return;
        }

        const bookingData = {
            ...formData,
            bus_id: bus.id,
            selected_seats: selectedSeats,
            number_of_seats: numberOfSeats,
        };

        console.log('Booking data being sent:', bookingData); 

        try {
            const response = await fetch('https://bus-booking-server.onrender.com/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Order confirmed:", result);
                alert("Booking confirmed! Proceed to payment.");
            } else {
                const errorText = await response.text(); 
                console.error("Error confirming order:", response.statusText, errorText);
                alert(`Error: ${response.statusText}. Details: ${errorText}`);
            }
        } catch (error) {
            console.error("Error confirming order:", error);
            alert("An error occurred while confirming your booking. Please try again.");
        }
    };

    const handleMpesaPayment = async () => {
        if (!phoneNumber) {
            alert('Please enter a phone number.');
            return;
        }

        try {
            const response = await fetch(`https://bus-booking-server.onrender.com/pay?phone_number=${phoneNumber}&amount=${totalCost}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log("M-Pesa STK Push initiated:", data);
                alert('M-Pesa STK Push has been sent. Please complete the payment on your phone.');
            } else {
                console.error('M-Pesa STK Push failed:', response.statusText);
                alert('Failed to initiate M-Pesa payment. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const handleBack = () => {
        // Save data to local storage before navigating back
        localStorage.setItem('savedFormData', JSON.stringify(formData));
        localStorage.setItem('savedBus', JSON.stringify(bus));
        localStorage.setItem('savedSelectedSeats', JSON.stringify(selectedSeats));
        localStorage.setItem('savedNumberOfSeats', numberOfSeats);

        // Navigate to home page
        navigate('/');
    };

    if (!formData || !bus) {
        return <div>Loading...</div>;
    }

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
                <p><strong>Phone Number:</strong></p>
                <input 
                    type="text" 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    placeholder="Enter your phone number starting with 254" 
                    className="phone-input"
                />
                <p><strong>Number of Seats:</strong> {numberOfSeats}</p>
                <p><strong>Total Cost:</strong> Ksh {totalCost}</p>
                <button className="btn confirm" onClick={handleConfirm}>Confirm</button>
                <button id="mpesa" className="btn mpesa" onClick={handleMpesaPayment}>Pay with Mpesa</button>
                <button className="btn back" onClick={handleBack}>Back</button>
            </div>
        </div>
    );
}

export default BusTicket;