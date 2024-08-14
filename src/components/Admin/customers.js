
import React, { useState, useEffect } from "react";
import './customer.css';
import { useNavigate } from "react-router-dom";

function Customers() {
  const [customers, setCustomers] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://bus-booking-server.onrender.com/customers")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const arraydata = data.customers
        console.log('Fetched data:', arraydata); 
        if (Array.isArray(arraydata)) {
          setCustomers(arraydata); 
        } else {
          console.error("Fetched data is not an array:", arraydata);
          setCustomers([]); 
        }
      })
      .catch(error => {
        console.error("Error fetching customers:", error);
        setCustomers([]); 
      });
  }, 
  []);

  return (
    <div className="customer-container">
      <div className="customer-row">
        <div className="customer-sidebar">
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

        <div className="customer-content">
          <h1>Customers</h1>
          <div className="customer-list">
            {Array.isArray(customers) && customers.length > 0 ? (
              customers.map((customer, index) => (
                <div key={index} className="customer-item">
                  <div className="customer-field">
                    <strong>First Name:</strong> {customer.firstname || "N/A"}
                  </div>
                  <div className="customer-field">
                    <strong>Last Name:</strong> {customer.lastname || "N/A"}
                  </div>
                  <div className="customer-field">
                    <strong>Email:</strong> {customer.email || "N/A"}
                  </div>
                </div>
              ))
            ) : (
              <div>No customer data available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
