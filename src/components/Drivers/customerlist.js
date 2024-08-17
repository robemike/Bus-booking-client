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
      fetch("https://bus-booking-server.onrender.com/drivers/customers")
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
          <li><a onClick={() => navigate("/drivers/view_scheduled_buses")}>Trips</a></li>
          <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
        </div>

        <div className="customerlist-content">
          <header className="customerlist-header">CUSTOMERS LIST</header>
          <ul>
            {customers.map((customer, index) => (
              <li key={index}>
                
                <div className="customerlist-info">
                  <span className="customerlist-name">{customer.firstname} {customer.lastname}</span>
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