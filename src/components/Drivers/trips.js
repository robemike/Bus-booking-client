// import React from "react";
// import './trips.css';
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar.js";

// function Trips() {

//     const navigate = useNavigate()
//     const services = [
//         {
//             name: "Super Metro",
//             departureTime: "6:00 PM",
//             arrivalTime: "3:00 AM",
//             price: 2500,
//             status: "FULLY BOOKED"
//         },
//         {
//             name: "Guardian",
//             departureTime: "6:30 PM",
//             arrivalTime: "3:30 AM",
//             price: 2800,
//             status: "FULLY BOOKED"
//         },
//         {
//             name: "Lopha Travels",
//             departureTime: "7:00 PM",
//             arrivalTime: "4:00 AM",
//             price: 3000,
//             status: "FULLY BOOKED"
//         },
//         // {
//         //     name: "Starbus",
//         //     departureTime: "8:30 PM",
//         //     arrivalTime: "6:15 AM",
//         //     price: 3500,
//         //     status: "12 SEATS AVAILABLE"
//         // }
//     ];

//     return (
//         <div>
//              {/* <Navbar /> */}

//              <div className="sidebar">
//                 <ul>
//                     <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
//                     <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
//                     <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
//                     <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
//                 </ul>
//             </div>
//         <div className="container">
//             <div className="schedule">
//                 <div className="header">Bus Schedule - Nairobi to Sugoi (July 24, 2024)</div>
//                 <div className="services">
//                     {services.map((service, index) => (
//                         <div className="service" key={index}>
//                             <h3>{service.name}</h3>
//                             <p>Departure: {service.departureTime} | Arrival: {service.arrivalTime}</p>
//                             <p>Price: KSH {service.price}</p>
//                             <p className="status">{service.status}</p>
//                         </div>
//                     ))} {/* Render the services JSX here */}
//                 </div>
//                 {/* <div className="footer">All prices are in KSH</div> Uncommented footer */}
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Trips;


// import React from "react";
// import './trips.css';
// import { useNavigate } from "react-router-dom";
// // import Navbar from "./Navbar.js";

// function Trips() {
//     const services = [
//         {
//             name: "Super Metro",
//             departureTime: "6:00 PM",
//             arrivalTime: "3:00 AM",
//             price: 2500,
//             status: "FULLY BOOKED"
//         },
//         {
//             name: "Guardian",
//             departureTime: "6:30 PM",
//             arrivalTime: "3:30 AM",
//             price: 2800,
//             status: "FULLY BOOKED"
//         },
//         {
//             name: "Lopha Travels",
//             departureTime: "7:00 PM",
//             arrivalTime: "4:00 AM",
//             price: 3000,
//             status: "FULLY BOOKED"
//         },
//          {
//              name: "Starbus",
//              departureTime: "8:30 PM",
//              arrivalTime: "6:15 AM",
//              price: 3500,
//              status: "12 SEATS AVAILABLE"
//          }
//     ];

//     const navigate = useNavigate();  // Navigate to different routes using react-router-dom

//     return (
//         <div>
//         <div className="trips-sidebar">
//             <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
//             <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
//             <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
//             <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
//         </div>
//         <div className="trips-container">
//             <div className="trips-schedule">
//                 <div className="trips-header">Bus Schedule - Nairobi to Sugoi (July 24, 2024)</div>
//                 <div className="trips-services">
//                     {services.map((service, index) => (
//                         <div className="trips-service" key={index}>
//                             <h3>{service.name}</h3>
//                             <p>Departure: {service.departureTime} | Arrival: {service.arrivalTime}</p>
//                             <p>Price: KSH {service.price}</p>
//                             <p className="trips-status">{service.status}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </div>
// );
// }

// export default Trips;


// import React, { useState, useEffect } from "react";
// import './busticket.css';

// function BusTicket({ bookingId }) {
//     const [formData, setFormData] = useState({
//         departure: '',
//         arrival: '',
//         date: '',
//         seat_number: '',
//         total_price: '',
//         number_of_seats: ''
//     });

//     const [showPopup, setShowPopup] = useState(false);

//     useEffect(() => {
//         if (bookingId) {
//             // Fetch data for the specific booking
//             fetch(`https://bus-booking-server.onrender.com/bookings/${bookingId}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     setFormData({
//                         departure: data.departure || '',
//                         arrival: data.arrival || '',
//                         date: data.date || '',
//                         seat_number: data.seat_number || '',
//                         total_price: data.total_price || '',
//                         number_of_seats: data.number_of_seats || ''
//                     });
//                     setShowPopup(true); // Show the popup when data is loaded
//                 })
//                 .catch(error => console.error('Error fetching booking data:', error));
//         }
//     }, [bookingId]);

//     const handleConfirm = () => {
//         fetch(`https://bus-booking-server.onrender.com/bookings/${bookingId}/confirm`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ /* Optionally, you can send additional data if required */ })
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log("Order confirmed:", data);
//             setShowPopup(false);
//             // Handle additional logic here
//         })
//         .catch(error => console.error('Error confirming order:', error));
//     };

//     const handleCancel = () => {
//         setShowPopup(false);
//     };

//     return (
//         <div className="bus-ticket">
//             <img className="img" src="https://www.shutterstock.com/image-photo/bus-traveling-on-asphalt-road-600nw-1345741577.jpg" alt="Bus"/>
//             <h1 className="header">BUS TICKET</h1>

//             {showPopup && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <h2>Confirm Your Ticket</h2>
//                         <p><strong>Departure Time:</strong> {formData.departure}</p>
//                         <p><strong>Arrival Time:</strong> {formData.arrival}</p>
//                         <p><strong>Date:</strong> {formData.date}</p>
//                         <p><strong>Seat Number:</strong> {formData.seat_number}</p>
//                         <p><strong>Number of Seats:</strong> {formData.number_of_seats}</p>
//                         <p><strong>Total Price:</strong> {formData.total_price}</p>
//                         <button className="btn confirm" onClick={handleConfirm}>Confirm</button>
//                         <button className="btn cancel" onClick={handleCancel}>Cancel</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default BusTicket;



import React, { useState, useEffect } from "react";
import './trips.css';
import { useNavigate } from "react-router-dom";

function Trips() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data from backend when component mounts
        fetch('https://bus-booking-server.onrender.com/trips')
            .then(response => response.json())
            .then(data => {
                // Assuming the data is an array of trip objects
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
