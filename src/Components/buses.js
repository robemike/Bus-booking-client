import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';

function Buses() {
  const navigate = useNavigate();

  const buses = [
    "Bus 1",
    "Bus 2",
    "Bus 3",
    "Bus 4",
    "Bus 5",
    "Bus 6",
    "Bus 7",
    "Bus 8",
    "Bus 9",
    "Bus 10",
  ];

  return (
    <div className="container">
      <div className="navbar">
        <h1>BUSLINK</h1>
      </div>
      <div className="row">
        <div className="col-4 sidebar">
          <a href="dashboard" onClick={() => navigate("/dashboard")}>Dashboard</a>
          <a href="drivers" onClick={() => navigate("/drivers")}>Drivers</a>
          <a href="buses" onClick={() => navigate("/buses")}>Buses</a>
          <a href="customers" onClick={() => navigate("/customers")}>Customers</a>
        </div>
        <div className="col-8 content">
          <h1>Buses</h1>
          <ul className="buses-list">
            {buses.map((bus, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faBus} className="bus-icon" />
                {bus}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Buses;
