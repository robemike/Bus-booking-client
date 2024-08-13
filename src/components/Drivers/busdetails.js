import React, { useState } from "react";
import "./busdetails.css";
import { useParams } from "react-router-dom";

function BusDetails() {
  const { busName } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [busData, setBusData] = useState([
    {
      name: "SUPER METRO",
      number_plate: "KZF 456F",
      route: "Nairobi - Thika",
      number_of_seats: 40,
      cost_per_seat: "KSh 100",
      travel_time: "1h 30m",
    },
    {
      name: "THE GUARDIAN",
      number_plate: "KWT 654T",
      route: "Nairobi - Kisumu",
      number_of_seats: 50,
      cost_per_seat: "KSh 1500",
      travel_time: "5h 45m",
    },
    // Add other bus data here
  ]);

  const bus = busData.find((bus) => bus.name === busName);

  const [editedBus, setEditedBus] = useState({ ...bus });

  if (!bus) {
    return <div>Bus not found</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setBusData(
      busData.map((b) =>
        b.name === bus.name ? { ...editedBus } : b
      )
    );
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedBus({ ...editedBus, [e.target.name]: e.target.value });
  };

  return (
    <div className="bus-details-container">
      <div className="bus-details-card">
        <h2 className="bus-details-title">{bus.name}</h2>
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
            bus.number_plate
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
            bus.route
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
            bus.number_of_seats
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
            bus.cost_per_seat
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
            bus.travel_time
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
