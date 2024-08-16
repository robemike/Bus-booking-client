import React, { useState, useEffect } from "react";
import "./seats.css";

function Seats() {
  const [seatsData, setSeatsData] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [route, setRoute] = useState('');

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await fetch(`https://bus-booking-server.onrender.com/seats`);
        const data = await response.json();
        console.log(data);
        setSeatsData(data); 
        setRoute(data.route); 
      } catch (error) {
        console.error("Error fetching bus data:", error);
      }
    };

    fetchBusData();
  }, []);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeat === seatNumber) {
      setSelectedSeat(null); 
    } else {
      setSelectedSeat(seatNumber); 
    }
  };

  const handleBooking = async () => {
    try {
      const response = await fetch(`https://bus-booking-server.onrender.com/seats`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ seats: [selectedSeat] }),
      });

      if (response.ok) {
        alert("Seat booked successfully!");
        const updatedSeats = seatsData.map((seat) =>
          seat.seatNumber === selectedSeat
            ? { ...seat, status: "booked" }
            : seat
        );
        setSeatsData(updatedSeats);
        setSelectedSeat(null); 
      } else {
        console.error("Failed to book seat");
      }
    } catch (error) {
      console.error("Error booking seat:", error);
    }
  };

  const viewSeats = () => {
    if (!seatsData || seatsData.length === 0) {
      return <div>No seats available.</div>;
    }

    const seatRows = [];
    const seatsPerRow = 4; 

    for (let i = 0; i < seatsData.length; i += seatsPerRow) {
      const rowSeats = seatsData.slice(i, i + seatsPerRow);
      seatRows.push(
        <div key={i} className="seat-row">
          {rowSeats.map((seat) => (
            <div
              key={seat.seatNumber}
              className={`seat ${
                seat.status === "booked"
                  ? "occupied"
                  : selectedSeat === seat.seatNumber
                  ? "selected"
                  : "available"
              }`}
              onClick={() =>
                seat.status !== "booked" && handleSeatClick(seat.seatNumber)
              }
            >
              {seat.seatNumber}
            </div>
          ))}
        </div>
      );
    }
    return seatRows;
  };

  const viewDestinationTable = () => {
    return (
      <div className="container-tickets">
        <table className="destination-table">
          <thead>
            <tr>
              <th>Route: {route}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="rectangle occupied" />
                <span>Occupied</span>
                <div className="rectangle available" />
                <span>Available</span>
                <div className="rectangle selected" />
                <span>Selected</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container-seats">
      <h2>Select Your Seat</h2>
      <div className="seats-customer">
        <div className="seating-customer">
          {viewSeats()}
        </div>
        <div className="seating-destination">
          {viewDestinationTable()}
        </div>
      </div>
      <button onClick={handleBooking} disabled={!selectedSeat}>
        Book Selected Seat
      </button>
    </div>
  );
}

export default Seats;
