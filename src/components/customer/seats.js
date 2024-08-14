import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./seats.css";

function Seats() {
  const { busId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, bus } = location.state; 
  const [seatsData, setSeatsData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await fetch(`https://bus-booking-server.onrender.com/buses/${busId}`);
        const data = await response.json();
        setSeatsData(data.number_of_seats);
      } catch (error) {
        console.error("Error fetching bus data:", error);
      }
    };

    fetchBusData();
  }, [busId]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = () => {
    navigate('/busticket', { state: { formData, bus, selectedSeats } });
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
                  : selectedSeats.includes(seat.seatNumber)
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

  return (
    <div className="container-seats">
      <div className="seats-customer">
        <div className="seating-customer">{viewSeats()}</div>
      </div>
      <button onClick={handleBooking} disabled={selectedSeats.length === 0}>
        Book Selected Seats
      </button>
    </div>
  );
}

export default Seats;