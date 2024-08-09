import React from "react";
import "./seats.css";

function Seats() {
  const rows = 9;
  const seatsPerRow = 4;

  const seats = [];
  for (let row = 1; row <= rows; row++) {
    for (let seat = 1; seat <= seatsPerRow; seat++) {
      seats.push(`${row}${String.fromCharCode(64 + seat)}`);
    }
  }

  const createSeats = () => {
    const seatRows = [];
    for (let row = 1; row <= rows; row++) {
      const rowSeats = [];
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        if (seat === 3) {
          rowSeats.push(
            <div key={`space-${row}`} className="vertical-space" />
          );
        }
        rowSeats.push(
          <div key={`${row}${String.fromCharCode(64 + seat)}`} className="seat">
            {`${row}${String.fromCharCode(64 + seat)}`}
          </div>
        );
      }
      seatRows.push(
        <div key={row} className="seat-row">
          {rowSeats}
        </div>
      );
    }
    return seatRows;
  };

  const createDestinationTable = () => {
    return (
    <div className="container-tickets">
      
      <table className="destination-table">
        <thead>
          <tr>
            <th>From: NAIROBI</th>
            <th>To: KISUMU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="rectangle occupied"/>
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
      <div className="seats-customer">
        <div className="seating-customer">
          {createSeats()}
        </div>
        <div className="seating-destination">
          {createDestinationTable()}
        </div>
      </div>
    </div>
  );
}

export default Seats;
