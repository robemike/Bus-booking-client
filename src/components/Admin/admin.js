import React, { useState, useEffect } from "react";
import './admin.css';
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const [drivers, setDrivers] = useState([]);
  const [buses, setBuses] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchDrivers = () => {
      fetch("https://bus-booking-server.onrender.com/admin/drivers")
        .then(response => response.json())
        .then(data => setDrivers(data))
        .catch(error => console.error("Error fetching drivers:", error));
    };

    const fetchBuses = () => {
      fetch("https://bus-booking-server.onrender.com/admin/buses")
        .then(response => response.json())
        .then(data => setBuses(data))
        .catch(error => console.error("Error fetching buses:", error));
    };

    const fetchCustomers = () => {
      fetch("https://bus-booking-server.onrender.com/admin/customers")
        .then(response => response.json())
        .then(data => setCustomers(data))
        .catch(error => console.error("Error fetching customers:", error));
    };

  
    fetchDrivers();
    fetchBuses();
    fetchCustomers();
  }, []); 

  return (
    <div className="admin-container">
      <div className="admin-row">
        <div className="admin-sidebar">
          <a href="dashboard" onClick={() => navigate("/admin/dashboard")}>Dashboard</a>
          <a href="drivers" onClick={() => navigate("/admin/drivers")}>Drivers</a>
          <a href="buses" onClick={() => navigate("/admin/buses")}>Buses</a>
          <a href="customers" onClick={() => navigate("/admin/customers")}>Customers</a>
        </div>

        <div className="admin-content">
          <div className="admin-cards-container">
            <div className="admin-card" onClick={() => navigate("/admin/drivers")}>
              <h2>Drivers</h2>
              <p>View and manage drivers.</p>
              <p>Number of drivers: {drivers.length}</p>
            </div>
            <div className="admin-card" onClick={() => navigate("/admin/buses")}>
              <h2>Buses</h2>
              <p>View and manage buses.</p>
              <p>Number of buses: {buses.length}</p>
            </div>
            <div className="admin-card" onClick={() => navigate("/admin/customers")}>
              <h2>Customers</h2>
              <p>View and manage customers.</p>
              <p>Number of customers: {customers.length}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Admin;


