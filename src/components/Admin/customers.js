// import React, { useState, useEffect } from "react";
// import './customer.css';
// import { useNavigate } from "react-router-dom";

// function Customers() {
//   const [customers, setCustomers] = useState([]); // Initialize as an array
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch customers from the API
//     const fetchCustomers = async () => {
//       try {
//         const response = await fetch("https://bus-booking-server.onrender.com/customers");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log(data); // Log the fetched data for debugging
//         if (Array.isArray(data)) {
//           setCustomers(data); // Update the state with the fetched customer data
//         } else {
//           console.error("Fetched data is not an array:", data);
//           setCustomers([]); // Ensure it's always an array
//         }
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//         setCustomers([]); // Ensure it's always an array even on error
//       }
//     };

//     fetchCustomers();
//   }, []);

//   return (
//     <div className="customer-container">
//       <div className="customer-row">
//         <div className="customer-sidebar">
//           <a href="dashboard" onClick={() => navigate("/admin/dashboard")}>
//             Dashboard
//           </a>
//           <a href="drivers" onClick={() => navigate("/admin/drivers")}>
//             Drivers
//           </a>
//           <a href="buses" onClick={() => navigate("/admin/buses")}>
//             Buses
//           </a>
//           <a href="customers" onClick={() => navigate("/admin/customers")}>
//             Customers
//           </a>
//         </div>

//         <div className="customer-content">
//           <h1>Customers</h1>
//           <div className="customer-list">
//             {Array.isArray(customers) && customers.length > 0 ? (
//               customers.map((customer, index) => (
//                 <div key={index} className="customer-item">
//                   <div className="customer-field">
//                     <strong>First Name:</strong> {customer.firstname}
//                   </div>
//                   <div className="customer-field">
//                     <strong>Last Name:</strong> {customer.lastname}
//                   </div>
//                   <div className="customer-field">
//                     <strong>Email:</strong> {customer.email}
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div>No customer data available</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Customers;





import React, { useState, useEffect } from "react";
import './customer.css';
import { useNavigate } from "react-router-dom";

function Customers() {
  const [customers, setCustomers] = useState([]); // Initialize as an array
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch customers from the API
    fetch("https://bus-booking-server.onrender.com/customers")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const arraydata = data.customers
        console.log('Fetched data:', arraydata); // Log the fetched data
        if (Array.isArray(arraydata)) {
          setCustomers(arraydata); // Update the state with the fetched customer data
        } else {
          console.error("Fetched data is not an array:", arraydata);
          setCustomers([]); // Ensure it's always an array
        }
      })
      .catch(error => {
        console.error("Error fetching customers:", error);
        setCustomers([]); // Ensure it's always an array even on error
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
