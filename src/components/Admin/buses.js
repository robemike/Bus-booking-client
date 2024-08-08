import React from "react";
import { useNavigate } from "react-router-dom";

function Buses() {
  const navigate = useNavigate();

  const buses = [
    "SUPER METRO",
    "GUARDIAN",
    "LOPHA TRAVELS",
    "BUKINA",
    "MARALAL",
    "METRO TRANS",
    "CITI HOPPA",
    "METRO TRANS",
    "HOPPA TRANS",
    "YUNION",
  ];

  return (
    <div className="container">
      <div className="navbar">
        <h1>BUSLINK</h1>
      </div>
      <div className="row">
        <div className="sidebar">
          <a href="#dashboard" onClick={() => navigate("/dashboard")}>
            Dashboard
          </a>
          <a href="#drivers" onClick={() => navigate("/drivers")}>
            Drivers
          </a>
          <a href="#buses" onClick={() => navigate("/buses")}>
            Buses
          </a>
          <a href="#customers" onClick={() => navigate("/customers")}>
            Customers
          </a>
        </div>
        <div className=" content">
          <h1>Buses</h1>

          <div className="buses-list">
            {buses.map((buses, index) => (
              <ul key={index} className="customer-item">
                <li className="customer-field">
                  <strong>{buses}</strong> {buses.name}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buses;
