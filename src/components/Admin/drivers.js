import React, { useState, useEffect } from "react";
import "./drivers.css";
import { useNavigate } from "react-router-dom";

function Drivers() {
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = () => {
      fetch("https://bus-booking-server.onrender.com/drivers")
        .then((response) => response.json())
        .then((data) => setDrivers(data))
        .catch((error) => console.error("Error fetching drivers:", error));
    };

    fetchDrivers(); 
  }, []); 

  return (
    <div className="drivers-container">
      <div className="driversidebar">
        <a onClick={() => navigate("/admin/dashboard")}>Dashboard</a>
        <a onClick={() => navigate("/admin/drivers")}>Drivers</a>
        <a onClick={() => navigate("/admin/buses")}>Buses</a>
        <a onClick={() => navigate("/admin/customers")}>Customers</a>
      </div>

      <div className="driverscontent">
        <h1>Drivers</h1>

        <ul className="drivers-list">
          {drivers.map((driver, index) => (
            <li key={index} className="driver-item">
              <div className="driver-field">
                <strong>Name:</strong> {driver.firstname}  {driver.lastname} {driver.phone_number}.
              </div>
              <div className="driver-field">
                <strong>License No:</strong> {driver.license_number}.
              </div>
              <div className="driver-field">
                <strong>Email:</strong> {driver.email}.
              </div>
              <div className="driver-field">
                <strong>Experience:</strong> {driver.experience_years} year(s)
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Drivers;

