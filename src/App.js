import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/customerlogin";
import Signup from "./components/auth/customersignup";
import Logins from './components/auth/driverlogin'
import TicketForm from "./components/customer/busticket";
import Customer from "./components/customer/customerpage";
import './App.css';
import Admin from './Components/Admin/admin';
import Drivers from './Components/Admin/drivers';
import Customers from './Components/Admin/customers';
import Buses from './Components/Admin/buses';
import Seats from './Components/Customer/seats';

function App() {

  return (
   
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Admin />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-driver" element={<Logins />} />
        <Route path="busticket" element={<TicketForm />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
  </Router>
  );


}

export default App;
