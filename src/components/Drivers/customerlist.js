import React, { useState } from "react";
import "./customerlist.css";
import Navbar from "./Navbar.js";

function CustomerList() {
  const customers = [
    { name: 'LAUREEN MAINA', company: 'SUPER METRO', time: '6:00 PM - 3:00 AM', number: '3A' },
    { name: 'MIKE ROBE', company: 'GUARDIAN', time: '6:00 PM - 3:00 PM', number: '4A' },
    { name: 'MARK MAINA', company: 'LOPHA TRAVELS', time: '6:00 PM - 3:00 AM', number: '6B' },
    { name: 'IAN KAMAU', company: 'SUPER METRO', time: '6:00 PM - 3:00 PM', number: '5C' },
    { name: 'KYLE NJIMA', company: 'LOPHA TRAVELS', time: '6:00 PM - 3:00 PM', number: '2A' },
  ];

  return (
    <div>
       <Navbar />
         <header>CUSTOMERS LIST</header>
    <div className="container">    
      <ul id="customer-list">
        {customers.map((customer, index) => (
          <li key={index}>
            <div className="customer-info">
              <span className="customer-name">{customer.name}</span>
              <span className="customer-company">{customer.company}</span>
            </div>
            <span className="customer-time">{customer.time}</span>
            <span className="customer-number">{customer.number}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default CustomerList;