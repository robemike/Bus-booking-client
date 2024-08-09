import React from "react";
import './buses.css';
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
    <div className="adminbuses-container">

      {/* <div className="navbar">
        <h1>BUSLINK</h1>
      </div> */}


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
