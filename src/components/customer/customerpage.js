import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./customerpage.css";

function Customer() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("customerId"); 

  useEffect(() => {
    const fetchBookings = async () => {
      if (!userId) {
        console.error("No user ID found");
        return;
      }

      try {
        const response = await fetch(`https://bus-booking-server.onrender.com/user-bookings/${userId}`);
        if (response.ok) {
          const data = await response.json();
          const sortedBookings = data.sort((a, b) => new Date(a.depature_time) - new Date(b.depature_time));
          setBookings(sortedBookings);
        } else {
          console.error("Failed to fetch bookings");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [userId]);

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="customer-page">
          <h1>Customer Bookings</h1>
          <hr />
          <div>
            <button onClick={() => navigate("/")} className="bg-warning">Make Booking</button>
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
                  bookings.map((booking, index) => {
                    const isCurrent = new Date(booking.depature_time) >= new Date();
                    return (
                      <React.Fragment key={index}>
                        {/* Separator row between current and previous bookings */}
                        {index === 0 || (index > 0 && isCurrent !== (new Date(bookings[index - 1].depature_time) >= new Date())) ? (
                          <tr>
                            <td colSpan="6" className="booking-separator">
                              {isCurrent ? "Current Bookings" : "Previous Bookings"}
                            </td>
                          </tr>
                        ) : null}
                        <tr>
                          <td>{`${booking.current_address} - ${booking.destination}`}</td>
                          <td>{`Bus ${booking.bus_id}`}</td>
                          <td>{booking.selected_seats.seat_no || "N/A"}</td>
                          <td>{new Date(booking.booking_date).toLocaleDateString()}</td>
                          <td>{new Date(booking.depature_time).toLocaleTimeString()}</td>
                          <td>
                            {/* Add actions like view or cancel booking if needed */}
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6">No bookings found</td>
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
