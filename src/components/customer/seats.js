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
        const response = await fetch(`http://127.0.0.1:5555/buses/${busId}/seats`);
        const data = await response.json();
        console.log(data);
        setSeatsData(data);
      } catch (error) {
        console.error("Error fetching bus data:", error);
      }
    };

    fetchBusData();
  }, [busId]);

  const handleSeatClick = (seat) => {
    console.log(seat);
    
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };
console.log(selectedSeats);

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
              key={seat.seat_number}
              className={
                seat.status === "booked"
                  ? "occupied"
                  : selectedSeats.includes(seat.seat_number)
                  ? "selected"
                  : "available"
                }
              onClick={() =>
                seat.status !== "booked" && handleSeatClick(seat.seat_number)
              }
            >
              {seat.seat_number}
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
              <th>Route: {bus.route}</th>
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
 }

  return (
    <div className="container-seats">
      <div className="seats-customer">
        <div className="seating-customer">{viewSeats()}</div>
        <div className="seating-destination">{viewDestinationTable()}</div>
      </div>
      <button onClick={handleBooking} disabled={selectedSeats.length === 0}>
        Book Selected Seats
      </button>
    </div>
  );
}

export default Seats;