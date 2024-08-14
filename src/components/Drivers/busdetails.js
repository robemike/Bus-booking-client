import React, { useState, useEffect } from "react";
import "./busdetails.css";
import { useParams } from "react-router-dom";

function BusDetails() {
  const { busName } = useParams(); // Get busName from the URL
  const [isEditing, setIsEditing] = useState(false);
  const [busData, setBusData] = useState(null);
  const [editedBus, setEditedBus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://bus-booking-server.onrender.com/buses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const bus = data.find((bus) => bus.username === busName);
        if (bus) {
          setBusData(bus);
          setEditedBus({ ...bus });
        } else {
          setError("Bus not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError("Failed to load bus data");
        setLoading(false);
      });
  }, [busName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // You might want to send the edited data back to the server here
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedBus({ ...editedBus, [e.target.name]: e.target.value });
  };

  return (
    <div className="bus-details-container">
      <div className="bus-details-card">
        <h2 className="bus-details-title">{busData.name}</h2>
        <div className="bus-details-item">
          <strong>Number Plate:</strong>
          {isEditing ? (
            <input
              type="text"
              name="number_plate"
              value={editedBus.number_plate}
              onChange={handleChange}
            />
          ) : (
            busData.number_plate
          )}
        </div>
        <div className="bus-details-item">
          <strong>Route:</strong>
          {isEditing ? (
            <input
              type="text"
              name="route"
              value={editedBus.route}
              onChange={handleChange}
            />
          ) : (
            busData.route
          )}
        </div>
        <div className="bus-details-item">
          <strong>Number of Seats:</strong>
          {isEditing ? (
            <input
              type="number"
              name="number_of_seats"
              value={editedBus.number_of_seats}
              onChange={handleChange}
            />
          ) : (
            busData.number_of_seats
          )}
        </div>
        <div className="bus-details-item">
          <strong>Cost per Seat:</strong>
          {isEditing ? (
            <input
              type="text"
              name="cost_per_seat"
              value={editedBus.cost_per_seat}
              onChange={handleChange}
            />
          ) : (
            busData.cost_per_seat
          )}
        </div>
        <div className="bus-details-item">
          <strong>Travel Time:</strong>
          {isEditing ? (
            <input
              type="text"
              name="travel_time"
              value={editedBus.travel_time}
              onChange={handleChange}
            />
          ) : (
            busData.travel_time
          )}
        </div>

        {isEditing ? (
          <button className="bus-details-save-button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="bus-details-edit-button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default BusDetails;
