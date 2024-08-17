import React, { useState, useEffect } from "react";
import "./customerpage.css";

function Customer() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        
        const response = await fetch('https://bus-booking-server.onrender.com/bookings');
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          console.error('Failed to fetch bookings');
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="customer-page">
          <h1>Customer Bookings</h1>
          <hr />
          <div>
            <table>
              <thead>
                <tr>
                  <th>FROM - TO</th>
                  <th>BUS NO.</th>
                  <th>SEAT NO.</th>
                  <th>TRAVEL DATE</th>
                  <th>TIME</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings.map((booking, index) => (
                    <tr key={index}>
                      <td>{`${booking.current_address} - ${booking.destination}`}</td>
                      <td>{`Bus ${booking.bus_id}`}</td>
                      <td>{booking.seat_no || 'N/A'}</td> 
                      <td>{new Date(booking.booking_date).toLocaleDateString()}</td>
                      <td>{new Date(booking.depature_time).toLocaleTimeString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No bookings found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
