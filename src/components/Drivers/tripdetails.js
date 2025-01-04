

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import './tripDetails.css';

// function TripDetails() {
//     const { tripId } = useParams();
//     const [tripDetails, setTripDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchTripDetails = async () => {
//             try {
//                 const response = await fetch(`https://bus-booking-server-1.onrender.com//drivers/view_scheduled_buses/${tripId}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 console.log('Fetched trip details:', data); // Log fetched data
//                 setTripDetails(data);
//             } catch (error) {
//                 console.error('Error fetching trip details:', error);
//                 setError('Failed to fetch trip details');
//             }
//         };

//         fetchTripDetails();
//     }, [tripId]);

//     // Display error message if there was an error
//     if (error) {
//         return <p>{error}</p>;
//     }

//     // Check if tripDetails and its properties are defined before accessing them
//     if (!tripDetails || !tripDetails.bus) {
//         return <p>Loading trip details...</p>;
//     }

//     const occupiedSeats = tripDetails.occupied_seats || [];
//     const unoccupiedSeats = tripDetails.total_seats - occupiedSeats.length;

//     return (
//         <div className="trip-details-container">
//             <button onClick={() => navigate(-1)}>Back to Trips</button>
//             <h2>Bus: {tripDetails.bus.username || "Unknown"}</h2>
//             <p>Number Plate: {tripDetails.bus.number_plate || "Unknown"}</p>
//             <p>Departure: {tripDetails.departure_time || "Unknown"}</p>
//             <p>Arrival: {tripDetails.arrival_time || "Unknown"}</p>
//             <h3>Occupied Seats</h3>
//             <ul>
//                 {occupiedSeats.length > 0 ? (
//                     occupiedSeats.map((seat, index) => (
//                         <li key={index}>
//                             {seat.customers.firstname || "Unknown"} - Seat {seat.seat_number || "Unknown"}
//                         </li>
//                     ))
//                 ) : (
//                     <li>No occupied seats</li>
//                 )}
//             </ul>
//             <p>Unoccupied Seats: {unoccupiedSeats || "Unknown"}</p>
//         </div>
//     );
// }

// export default TripDetails;





// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import './tripDetails.css';

// function TripDetails() {
//     const { tripId } = useParams();
//     const [tripDetails, setTripDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchTripDetails = async () => {
//             try {
//                 const response = await fetch(`https://bus-booking-server-1.onrender.com//drivers/view_scheduled_buses/${tripId}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 console.log('Fetched trip details:', data); // Log fetched data
//                 setTripDetails(data);
//             } catch (error) {
//                 console.error('Error fetching trip details:', error);
//                 setError('Failed to fetch trip details');
//             }
//         };

//         fetchTripDetails();
//     }, [tripId]);

//     if (error) {
//         return <p>{error}</p>;
//     }

//     if (!tripDetails || !tripDetails.bus) {
//         return <p>Loading trip details...</p>;
//     }

//     const occupiedSeats = tripDetails.occupied_seats || [];
//     const unoccupiedSeats = tripDetails.total_seats - occupiedSeats.length;

//     return (
//         <div className="trip-details-container">
//             <button onClick={() => navigate(-1)}>Back to Trips</button>
//             <h2>Bus: {tripDetails.bus.username || "Unknown"}</h2>
//             <p>Number Plate: {tripDetails.bus.number_plate || "Unknown"}</p>
//             <p>Departure: {tripDetails.departure_time || "Unknown"}</p>
//             <p>Arrival: {tripDetails.arrival_time || "Unknown"}</p>
//             <h3>Occupied Seats</h3>
//             <ul>
//                 {occupiedSeats.length > 0 ? (
//                     occupiedSeats.map((seat, index) => (
//                         <li key={index}>
//                             {seat.customers.firstname || "Unknown"} - Seat {seat.seat_number || "Unknown"}
//                         </li>
//                     ))
//                 ) : (
//                     <li>No occupied seats</li>
//                 )}
//             </ul>
//             <p>Unoccupied Seats: {unoccupiedSeats || "Unknown"}</p>
//         </div>
//     );
// }

// export default TripDetails;





// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import './tripDetails.css';

// function TripDetails() {
//     const { tripId } = useParams();
//     const [tripDetails, setTripDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchTripDetails = async () => {
//             try {
//                 const response = await fetch(`https://bus-booking-server-1.onrender.com//drivers/view_scheduled_buses/${tripId}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 console.log('Fetched trip details:', data); // Log fetched data

//                 // Check if the expected properties are present
//                 if (data && data.bus) {
//                     setTripDetails(data);
//                 } else {
//                     throw new Error('Trip details data structure is not as expected.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching trip details:', error);
//                 setError('Failed to fetch trip details');
//             }
//         };

//         fetchTripDetails();
//     }, [tripId]);

//     if (error) {
//         return <p>{error}</p>;
//     }

//     if (!tripDetails) {
//         return <p>Loading trip details...</p>;
//     }

//     const occupiedSeats = tripDetails.occupied_seats || [];
//     const totalSeats = tripDetails.total_seats || 0;
//     const unoccupiedSeats = totalSeats - occupiedSeats.length;

//     return (
//         <div className="trip-details-container">
//             <button onClick={() => navigate(-1)}>Back to Trips</button>
//             <h2>Bus: {tripDetails.bus.username || "Unknown"}</h2>
//             <p>Number Plate: {tripDetails.bus.number_plate || "Unknown"}</p>
//             <p>Departure: {tripDetails.departure_time || "Unknown"}</p>
//             <p>Arrival: {tripDetails.arrival_time || "Unknown"}</p>
//             <h3>Occupied Seats</h3>
//             <ul>
//                 {occupiedSeats.length > 0 ? (
//                     occupiedSeats.map((seat, index) => (
//                         <li key={index}>
//                             {seat.customers?.firstname || "Unknown"} - Seat {seat.seat_number || "Unknown"}
//                         </li>
//                     ))
//                 ) : (
//                     <li>No occupied seats</li>
//                 )}
//             </ul>
//             <p>Unoccupied Seats: {unoccupiedSeats}</p>
//         </div>
//     );
// }

// export default TripDetails;







// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import './tripDetails.css';

// function TripDetails() {
//     const { tripId } = useParams();
//     const [tripDetails, setTripDetails] = useState(null);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchTripDetails = async () => {
//             try {
//                 const response = await fetch(`https://bus-booking-server-1.onrender.com//drivers/view_scheduled_buses/${tripId}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 console.log('Fetched trip details:', data); // Log fetched data
//                 setTripDetails(data);
//             } catch (error) {
//                 console.error('Error fetching trip details:', error);
//                 setError('Failed to fetch trip details');
//             }
//         };

//         fetchTripDetails();
//     }, [tripId]);

//     // Display error message if there was an error
//     if (error) {
//         return <p>{error}</p>;
//     }

//     // Check if tripDetails and its properties are defined before accessing them
//     if (!tripDetails || !tripDetails.bus) {
//         return <p>Loading trip details...</p>;
//     }

//     const occupiedSeats = tripDetails.occupied_seats || [];
//     const unoccupiedSeats = tripDetails.total_seats - occupiedSeats.length;

//     return (
//         <div className="trip-details-container">
//             <button onClick={() => navigate(-1)}>Back to Trips</button>

//             {/* Display Bus Image */}
//             {tripDetails.bus.image_url && (
//                 <img src={tripDetails.bus.image_url} alt="Bus" className="bus-image" />
//             )}

//             <h2>Bus: {tripDetails.bus.username || "Unknown"}</h2>
//             <p>Number Plate: {tripDetails.bus.number_plate || "Unknown"}</p>
//             <p>Route: {tripDetails.route || "Unknown"}</p>
//             <p>Departure: {tripDetails.departure_time || "Unknown"}</p>
//             <p>Arrival: {tripDetails.arrival_time || "Unknown"}</p>
            
//             <h3>Occupied Seats</h3>
//             <ul>
//                 {occupiedSeats.length > 0 ? (
//                     occupiedSeats.map((seat, index) => (
//                         <li key={index}>
//                             {seat.customers.firstname || "Unknown"} - Seat {seat.seat_number || "Unknown"}
//                         </li>
//                     ))
//                 ) : (
//                     <li>No occupied seats</li>
//                 )}
//             </ul>
//             <p>Unoccupied Seats: {unoccupiedSeats || "Unknown"}</p>
//         </div>
//     );
// }

// export default TripDetails;



import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './tripDetails.css';

function TripDetails() {
    const location = useLocation();
    const { service } = location.state || {};
    const navigate = useNavigate();

    if (!service) {
        return <div>No trip details available.</div>;
    }

    return (
        <div className="trip-details-container">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <h2>Trip Details</h2>
            <p><strong>Bus Name:</strong> {service.bus.username}</p>
            <p><strong>Number Plate:</strong> {service.bus.number_plate}</p>
            <p><strong>Departure Time:</strong> {service.departure_time}</p>
            <p><strong>Arrival Time:</strong> {service.arrival_time}</p>
            <p><strong>Route:</strong> {service.bus.route}</p>
            <p><strong>Occupied Seats:</strong> {service.occupied_seats}</p>
            <p><strong>Status:</strong> {service.status}</p>
        </div>
    );
}

export default TripDetails;
