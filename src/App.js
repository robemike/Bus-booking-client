import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/customerlogin";
import Signup from "./components/auth/customersignup";
import Logins from './components/auth/driverlogin'
import TicketForm from "./components/customer/busticket";
import Customer from "./components/customer/customerpage";
import './App.css';
import FindBus1 from './components/customer/Findbus';
import Admin from './components/Admin/admin';
import Drivers from './components/Admin/drivers';
import Customers from './components/Admin/customers';
import Buses from './components/Admin/buses';
import Seats from './components/customer/seats';
import HomePage from "./components/customer/HomePage";


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/findbus" element={<FindBus1 />} />
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
