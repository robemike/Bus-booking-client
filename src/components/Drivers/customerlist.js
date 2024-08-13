// import React, { useState } from "react";
// import "./customerlist.css";
// // import Navbar from "./Navbar.js";
// import { useNavigate } from "react-router-dom";

// function CustomerList() {
//   const customers = [
//     { name: 'LAUREEN MAINA', company: 'SUPER METRO', time: '6:00 PM - 3:00 AM', number: '3A' },
//     { name: 'MIKE ROBE', company: 'GUARDIAN', time: '6:00 PM - 3:00 PM', number: '4A' },
//     { name: 'MARK MAINA', company: 'LOPHA TRAVELS', time: '6:00 PM - 3:00 AM', number: '6B' },
//     { name: 'IAN KAMAU', company: 'SUPER METRO', time: '6:00 PM - 3:00 PM', number: '5C' },
//     { name: 'KYLE NJIMA', company: 'LOPHA TRAVELS', time: '6:00 PM - 3:00 PM', number: '2A' },
//   ];

//   const navigate = useNavigate()

//   return (
//     <div>
//       {/* <Navbar /> */}

//       <div className="customerlist-container">
//         <div className="customerlist-sidebar">
//           <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
//           <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
//           <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
//           <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
//         </div>

//         <div className="customerlist-content">
//           <header className="customerlist-header">CUSTOMERS LIST</header>
//           <ul>
//             {customers.map((customer, index) => (
//               <li key={index}>
//                 <div className="customerlist-info">
//                   <span className="customerlist-name">{customer.name}</span>
//                   <span className="customer-company">{customer.company}</span>
//                 </div>
//                 <span className="customerlist-time">{customer.time}</span>
//                 <span className="customerlist-number">{customer.number}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerList;





import React, { useState, useEffect } from "react";
import "./customerlist.css";
import { useNavigate } from "react-router-dom";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      fetch("https://bus-booking-server.onrender.com/customers")
        .then(response => {
          if (!response.ok) {
            setError(`HTTP error! Status: ${response.status}`);
            setLoading(false);
            return;
          }
          return response.json();
        })
        .then(data => {
          console.log("Fetched data:", data); 
          const arraydata = data.customers
          if (Array.isArray(arraydata)) {
            setCustomers(arraydata);
          } else {
            setError("Unexpected data format");
          }
        })
        .catch(err => {
          setError("Fetch error: " + err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="customerlist-container">
        <div className="customerlist-sidebar">
          <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
          <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
          <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
          <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
        </div>

        <div className="customerlist-content">
          <header className="customerlist-header">CUSTOMERS LIST</header>
          <ul>
            {customers.map((customer, index) => (
              <li key={index}>
                <div className="customerlist-info">
                  <span className="customerlist-name">{customer.firstname}</span>
                  <span className="customer-company">{customer.lastname}</span>
                  <span className="customerlist-number">{customer.email}</span>
                  <span className="customerlist-number">{customer.number}</span>
                </div>
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerList;



