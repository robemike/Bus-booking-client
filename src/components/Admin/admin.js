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
      fetch("https://bus-booking-server.onrender.com/drivers")
        .then(response => response.json())
        .then(data => setDrivers(data))
        .catch(error => console.error("Error fetching drivers:", error));
    };

    const fetchBuses = () => {
      fetch("https://bus-booking-server.onrender.com/buses")
        .then(response => response.json())
        .then(data => setBuses(data))
        .catch(error => console.error("Error fetching buses:", error));
    };

    const fetchCustomers = () => {
      fetch("https://bus-booking-server.onrender.com/customers")
        .then(response => response.json())
        .then(data => setCustomers(data))
        .catch(error => console.error("Error fetching customers:", error));
    };

    // Call the fetch functions
    fetchDrivers();
    fetchBuses();
    fetchCustomers();
  }, []); 

  return (
    <div className="admin-container">
      <div className="admin-row">
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




// import React from "react";
// import './admin.css';
// import { useNavigate } from "react-router-dom";

// function Admin() {
//   const navigate = useNavigate();

//   return (
//     <div className="admin-container">
    
//     {/* 
//       <div >
//         <h1>BUSLINK</h1>
//       </div> */}

//       <div  className="admin-row">
//         <div className="admin-sidebar">
//           <a onClick={() => navigate("/admin/dashboard")}>Dashboard</a>
//           <a onClick={() => navigate("/admin/drivers")}>Drivers</a>
//           <a onClick={() => navigate("/admin/buses")}>Buses</a>
//           <a onClick={() => navigate("/admin/customers")}>Customers</a>
//         </div>


//         <div className="admin-content">
//           <div className="admin-cards-container">
//             <div className="admin-card" onClick={() => navigate("/admin/drivers")}>
//               <h2>Drivers</h2>
//               <p>View and manage drivers.</p>
//             </div>
//             <div className="admin-card" onClick={() => navigate("/admin/buses")}>
//               <h2>Buses</h2>
//               <p>View and manage buses.</p>
//             </div>
//             <div className="admin-card" onClick={() => navigate("/admin/customers")}>
//               <h2>Customers</h2>
//               <p>View and manage customers.</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Admin;
