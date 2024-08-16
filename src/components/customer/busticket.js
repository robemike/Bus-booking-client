// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const BusTicket = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { formData, bus, selectedSeats } = location.state;

//   const handleConfirmBooking = async () => {
    
//     const bookingData = {
//       ...formData,
//       bus_id: bus.id,
//       seats: selectedSeats,
//     };

//     try {
//       const response = await fetch("https://bus-booking-server.onrender.com/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (response.ok) {
//         alert("Booking successful!");
//         navigate("/"); 
//       } else {
//         alert("Booking failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting booking:", error);
//       alert("Booking failed. Please try again.");
//     }
//   };

//   return (
//     <div className="bus-ticket">
//       <h2>Booking Confirmation</h2>
//       <div>From: {formData.current_address}</div>
//       <div>To: {formData.destination}</div>
//       <div>Date: {formData.departure_date}</div>
//       <div>Travel Time: {formData.depature_time}</div>
//       <div>Bus: {bus.username}</div>
//       <div>Seats: {selectedSeats.join(", ")}</div>
//       <button onClick={handleConfirmBooking}>Confirm Booking</button>
//     </div>
//   );
// };

// export default BusTicket;



import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BusTicket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { formData, bus, selectedSeats } = location.state || {};

  useEffect(() => {
    if (!location.state || !formData || !bus || !selectedSeats) {
      alert("Required data is missing. Redirecting to the booking page.");
      navigate("/booking-page"); // Replace with the appropriate path to the booking form
    }
  }, [location.state, formData, bus, selectedSeats, navigate]);

  // If the data is missing, render nothing (the redirect will happen due to the useEffect)
  if (!location.state || !formData || !bus || !selectedSeats) {
    return null;
  }

  const handleConfirmBooking = async () => {
    const bookingData = {
      ...formData,
      bus_id: bus.id,
      seats: selectedSeats,
    };

    try {
      const response = await fetch("https://bus-booking-server.onrender.com/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert("Booking successful!");
        navigate("/");
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="bus-ticket">
      <h2>Booking Confirmation</h2>
      <div>From: {formData.current_address}</div>
      <div>To: {formData.destination}</div>
      <div>Date: {formData.departure_date}</div>
      <div>Travel Time: {formData.depature_time}</div>
      <div>Bus: {bus.username}</div>
      <div>Seats: {selectedSeats.join(", ")}</div>
      <button onClick={handleConfirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default BusTicket;
