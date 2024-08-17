import React, { useState, useEffect } from "react";
import './buses.css';
import { useNavigate } from "react-router-dom";

function Buses() {
  const navigate = useNavigate();
  const [buses, setBuses] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    fetch('https://bus-booking-server.onrender.com/admin/buses')
      .then(response => response.json())
      .then(data => setBuses(data))
      .catch(error => {
        console.error('Error fetching bus data:', error);
      });
  }, []);

  return (
    <div className="adminbuses-container">

      <div className="adminbuses-row">
        <div className="adminbuses-sidebar">
          <a href="dashboard" onClick={() => navigate("/admin/dashboard")}>
            Dashboard
          </a>
          <a href="drivers" onClick={() => navigate("/admin/drivers")}>
            Drivers
          </a>
          <a href="buses" onClick={() => navigate("/admin/buses")}>
            Buses
          </a>
          <a href="customers" onClick={() => navigate("/admin/customers")}>
            Customers
          </a>
        </div>

        <div className="adminbuses-content">
          <h1>Buses</h1>

          <div className="adminbuses-list">
            <ul>
              {buses.map((bus, index) => (
                <li key={index} className="buses-item">
                  <strong>{bus.username} - {bus.number_plate}</strong> 
                  
                  
                  {/* <strong>{bus}</strong> */}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Buses;