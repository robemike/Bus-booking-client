import React, { useState, useEffect } from "react";
// import { useParams } from'react-router-dom'

const BusTicket = () => {
  // const { id } = useParams()
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://bus-booking-server.onrender.com/tickets`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTickets(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tickets) return <p>No ticket data Available</p>;

  return (
    <div>
      {tickets.map((ticket) => (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
          <h2 className="text-xl font-bold mb-4">Bus Ticket</h2>
          <div className="mb-4">
            <strong>Bookng Date:</strong> {ticket.booking_date}
          </div>
          <div className="mb-4">
            <strong>Departure Time:</strong> {ticket.departure_time}
          </div>
          <div className="mb-4">
            <strong>Destination:</strong> {ticket.destination}
          </div>
          <div className="mb-4">
            <strong>ID:</strong> {ticket.id}
          </div>
          <div className="mb-4">
            <strong>Seats Booked:</strong> {ticket.number_of_seats}
          </div>
          <div className="mb-4">
            <strong>Selected Seats:</strong> {ticket.selected_seats}
          </div>
          <div className="mb-4">
            <strong>Total Cost:</strong> {ticket.total_cost}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusTicket;
