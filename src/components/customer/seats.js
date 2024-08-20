
import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./seats.css";


function Seats() {
  // Parameters and state
  const { busId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, bus } = location.state;
  const [seatsData, setSeatsData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await fetch(
          `https://bus-booking-server.onrender.com/buses/${busId}/seats`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        console.log("Fetched data:", data);

        // Calculate available seats
        const available = data.filter((seat) => seat.status !== "booked").length;
        setSeatsData(data);
        setAvailableSeats(available);
      } catch (error) {
        console.error("Error fetching bus data:", error);
      }
    };

    fetchBusData();
  }, [busId]);

  // Handle seat click
  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  // Handle booking
  const handleBooking = async () => {
    const numberOfSeats = selectedSeats.length;

    try {
      const response = await fetch(
        "https://bus-booking-server.onrender.com/book-seats",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bus_id: busId,
            selected_seats: selectedSeats,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);

        // Fetch updated seat data after booking
        const updatedResponse = await fetch(
          `https://bus-booking-server.onrender.com/buses/${busId}/seats`
        );
        if (!updatedResponse.ok) throw new Error("Network response was not ok");
        const updatedSeatsData = await updatedResponse.json();
        console.log("Updated seats data:", updatedSeatsData);

        // Calculate available seats
        const available = updatedSeatsData.filter((seat) => seat.status !== "booked").length;
        setSeatsData(updatedSeatsData);
        setAvailableSeats(available);
        setSelectedSeats([]);
        setErrorMessage(""); // Clear any previous error message

        // Navigate to the next page
        navigate("/busticket", {
          state: { formData, bus, selectedSeats, numberOfSeats },
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to book seats.");
      }
    } catch (error) {
      console.error("Error booking seats:", error);
      setErrorMessage("An error occurred while booking seats. Please try again.");
    }
  };

  // Render seat rows
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
          <div className="seat-pair">
            {rowSeats.slice(0, 2).map((seat) => (
              <div
                key={seat.seat_number}
                className={
                  seat.status === "booked"
                    ? "seat occupied"
                    : selectedSeats.includes(seat.seat_number)
                    ? "seat selected"
                    : "seat available"
                }
                onClick={() =>
                  seat.status !== "booked" && handleSeatClick(seat.seat_number)
                }
              >
                {seat.seat_number}
              </div>
            ))}
          </div>
          <div className="aisle-space"></div>
          <div className="seat-pair">
            {rowSeats.slice(2, 4).map((seat) => (
              <div
                key={seat.seat_number}
                className={
                  seat.status === "booked"
                    ? "seat occupied"
                    : selectedSeats.includes(seat.seat_number)
                    ? "seat selected"
                    : "seat available"
                }
                onClick={() =>
                  seat.status !== "booked" && handleSeatClick(seat.seat_number)
                }
              >
                {seat.seat_number}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return seatRows;
  };

  return (
    <div className="container-seats">
      <div className="seats-customer">
        <div className="seating-customer">{viewSeats()}</div>
        <div className="seating-destination">
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
              <button className="seats-button" 
        onClick={handleBooking} 
        disabled={selectedSeats.length === 0 || selectedSeats.length > availableSeats}
      >
        Book Selected Seats
      </button>
      
      <div className="seat-info">
        <p>Selected Seats: {selectedSeats.length}</p>
        <p>Available Seats: {availableSeats}</p>
        {availableSeats === 0 && (
          <p className="fully-booked">This bus is fully booked.</p>
        )}
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}
      </div>
            </table>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Seats;
