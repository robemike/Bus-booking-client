
import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="navbar">
        <h1>BUSLINK</h1>
      </div>
      <div className="row">
        <div className="col-4 sidebar">
          <a onClick={() => navigate("/dashboard")}>Dashboard</a>
          <a onClick={() => navigate("/drivers")}>Drivers</a>
          <a onClick={() => navigate("/buses")}>Buses</a>
          <a onClick={() => navigate("/customers")}>Customers</a>
        </div>
        <div className="col-8 content">
          <div className="cards-container">
            <div className="card" onClick={() => navigate('/drivers')}>
              <h2>Drivers</h2>
              <p>View and manage drivers.</p>
            </div>
            <div className="card" onClick={() => navigate('/buses')}>
              <h2>Buses</h2>
              <p>View and manage buses.</p>
            </div>
            <div className="card" onClick={() => navigate('/customers')}>
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

