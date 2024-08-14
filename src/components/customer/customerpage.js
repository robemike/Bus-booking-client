<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import "./customerpage.css";

function Customer() {
  const [data, setData] = useState([
    {
      from_to: "Nairobi - Sugoi",
      seat_no: "3A",
      bus_no: "Bus 45",
      travel_date: "24-08-2024",
      time: "20:30",
    },
    {
      from_to: "Nairobi - Mombasa",
      seat_no: "2B",
      bus_no: "Bus 21",
      travel_date: "25-07-2024",
      time: "21:00",
    },
    {
      from_to: "Nairobi - Kisumu",
      seat_no: "4A",
      bus_no: "Bus 12",
      travel_date: "30-07-2024",
      time: "18:00",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleEditClick = (index) => {
    setIsEditing(true);
    setCurrentCustomer({ ...data[index], index });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    const updatedData = data.map((item, index) =>
      index === currentCustomer.index ? currentCustomer : item
    );
    setData(updatedData);
    setIsEditing(false);
    setCurrentCustomer(null);
  };
>>>>>>> merge

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
<<<<<<< HEAD
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
=======
                {data.map((customer, index) => (
                  <tr key={index}>
                    {isEditing && currentCustomer.index === index ? (
                      <>
                        <td>
                          <input
                            type="text"
                            name="from_to"
                            value={currentCustomer.from_to}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="bus_no"
                            value={currentCustomer.bus_no}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="seat_no"
                            value={currentCustomer.seat_no}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="travel_date"
                            value={currentCustomer.travel_date}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="time"
                            value={currentCustomer.time}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <button onClick={handleSaveEdit}>Save</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{customer.from_to}</td>
                        <td>{customer.bus_no}</td>
                        <td>{customer.seat_no}</td>
                        <td>{customer.travel_date}</td>
                        <td>{customer.time}</td>
                        <td>
                          <button onClick={() => handleEditClick(index)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(index)}>
                            Delete
                          </button>
                        </td>
                      </>
                    )}
>>>>>>> merge
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
