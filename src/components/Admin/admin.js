import React from "react";
import './admin.css';
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
    
    {/* 
      <div >
        <h1>BUSLINK</h1>
      </div> */}

      <div  className="admin-row">
        <div className="admin-sidebar">
          <a onClick={() => navigate("/admin/dashboard")}>Dashboard</a>
          <a onClick={() => navigate("/admin/drivers")}>Drivers</a>
          <a onClick={() => navigate("/admin/buses")}>Buses</a>
          <a onClick={() => navigate("/admin/customers")}>Customers</a>
        </div>


        <div className="admin-content">
          <div className="admin-cards-container">
            <div className="admin-card" onClick={() => navigate("/admin/drivers")}>
              <h2>Drivers</h2>
              <p>View and manage drivers.</p>
            </div>
            <div className="admin-card" onClick={() => navigate("/admin/buses")}>
              <h2>Buses</h2>
              <p>View and manage buses.</p>
            </div>
            <div className="admin-card" onClick={() => navigate("/admin/customers")}>
              <h2>Customers</h2>
              <p>View and manage customers.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Admin;