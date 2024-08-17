// import React from "react";
// import { useLocation } from "react-router-dom";
// import './busticket.css';

// function BusTicket() {
//     const location = useLocation();
//     const { formData, bus, selectedSeats } = location.state;
//     const totalCost = bus.cost_per_seat * selectedSeats.length;
//     const selectedSeatsString = selectedSeats.join(", ");
//     console.log(formData);

//     const handleConfirm = () => {
        
//         console.log("Order confirmed:", formData);
//     };

//     return (
//         <div className="bus-ticket">
//             <img className="img" src="https://www.shutterstock.com/image-photo/bus-traveling-on-asphalt-road-600nw-1345741577.jpg" alt="Bus" />
//             <h1 className="header">BUS TICKET</h1>
//             <div className="container">
//                 <p><strong>Current Address:</strong> {formData.current_address}</p>
//                 <p><strong>Destination:</strong> {formData.destination}</p>
//                 <p><strong>Booking Date:</strong> {formData.departure_date}</p>
//                 <p><strong>Departure Time:</strong> {formData.departure_time}</p>
//                 <p><strong>Selected Seats:</strong> {selectedSeatsString}</p>
//                 <p><strong>Total Cost:</strong> ${totalCost}</p>
//                 <button className="btn confirm" onClick={handleConfirm}>Confirm </button>
//             </div>
//         </div>
//     );
// }

// export default BusTicket;

// import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import './busticket.css';

// function BusTicket() {
//     const { customerid } = useParams();
//     const location = useLocation();
//     const { formData, bus, selectedSeats } = location.state;
//     const totalCost = bus.cost_per_seat * selectedSeats.length;
//     const selectedSeatsString = selectedSeats.join(", ");
//     const [phoneNumber, setPhoneNumber] = useState("");

//     // Fetch phone number when component mounts
//     useEffect(() => {
//         const fetchPhoneNumber = async () => {
//             try {
//                 const response = await fetch(`https://bus-booking-server.onrender.com/customers/${customerid}`);
//                 const customerData = await response.json();
//                 console.log(customerData);
//                 setPhoneNumber(customerData.phone_number);
// ;            } catch (error) {
//                 console.error("Error fetching phone number:", error);
//             }
//         };

//         fetchPhoneNumber();
//     }, [customerid]);

//     const handleConfirm = async () => {
//         try {
//             const response = await fetch('https://bus-booking-server.onrender.com/bookings', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     ...formData,
//                     bus_id: bus.id,
//                     selected_seats: selectedSeats,
//                 }),
//             });

//             if (response.ok) {
//                 const result = await response.json();
//                 console.log("Order confirmed:", result);
//                 alert("Booking confirmed! Proceed to payment.");
//             } else {
//                 console.error("Error confirming order:", response.statusText);
//             }
//         } catch (error) {
//             console.error("Error confirming order:", error);
//         }
//     };

//     const handlePayment = () => {
//         // Payment logic here using phoneNumber
//         console.log("Initiating payment for phone number:", phoneNumber);
//         alert(`Payment initiated for phone number: ${phoneNumber}`);
//     };

//     return (
//         <div className="bus-ticket">
//             <img className="img" src="https://www.shutterstock.com/image-photo/bus-traveling-on-asphalt-road-600nw-1345741577.jpg" alt="Bus" />
//             <h1 className="header">BUS TICKET</h1>
//             <div className="container">
//                 <p><strong>Current Address:</strong> {formData.current_address}</p>
//                 <p><strong>Destination:</strong> {formData.destination}</p>
//                 <p><strong>Booking Date:</strong> {formData.departure_date}</p>
//                 <p><strong>Departure Time:</strong> {formData.departure_time}</p>
//                 <p><strong>Selected Seats:</strong> {selectedSeatsString}</p>
//                 <p><strong>Phone Number:</strong> {setPhoneNumber}</p>
//                 <p><strong>Total Cost:</strong> ${totalCost}</p>
//                 <button className="btn confirm" onClick={handleConfirm}>Confirm</button>
//                 {phoneNumber && (
//                     <button className="btn payment" onClick={handlePayment}>Make Payment</button>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default BusTicket;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './busticket.css';

function BusTicket() {
    const location = useLocation();
    const { formData, bus, selectedSeats } = location.state;
    const totalCost = bus.cost_per_seat * selectedSeats.length;
    const selectedSeatsString = selectedSeats.join(", ");
    const [phoneNumber, setPhoneNumber] = useState("");

    // Fetch phone number when component mounts
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

    const handleConfirm = async () => {
        try {
            const response = await fetch('https://bus-booking-server.onrender.com/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    bus_id: bus.id,
                    selected_seats: selectedSeats,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Order confirmed:", result);
                alert("Booking confirmed! Proceed to payment.");
            } else {
                console.error("Error confirming order:", response.statusText);
            }
        } catch (error) {
            console.error("Error confirming order:", error);
        }
    };

    const handlePayment = () => {
        // Payment logic here using phoneNumber
        console.log("Initiating payment for phone number:", phoneNumber);
        alert(`Payment initiated for phone number: ${phoneNumber}`);
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
                <p><strong>Total Cost:</strong> ${totalCost}</p>
                <button className="btn confirm" onClick={handleConfirm}>Confirm</button>
                {phoneNumber && (
                    <button className="btn payment" onClick={handlePayment}>Make Payment</button>
                )}
            </div>
        </div>
    );
}

export default BusTicket;

