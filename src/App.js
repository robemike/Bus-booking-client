import CustomerLogin from "./components/auth/customerlogin";
import CustomerSignup from "./components/auth/customersignup";
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
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DriverBuses from "./components/Drivers/buses";
import Landing from "./components/Drivers/landing";
import CustomerList from "./components/Drivers/customerlist";
import Navbar from "./components/Drivers/Navbar";
import Trips from "./components/Drivers/trips";
import BusDetails from "./components/Drivers/busdetails";


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/findbus" element={<FindBus1 />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/signup" element={<CustomerSignup />} />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="busticket" element={<TicketForm />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/drivers/login" element={<Logins />} />
        <Route path="/drivers/navbar" element={<Navbar />} />
        <Route path="/drivers/landing" element={<Landing />} />
        <Route path="/drivers/buses" element={<DriverBuses />} />
        <Route path="/drivers/buses/:busName" element={<BusDetails />} />
        <Route path="/drivers/customer-list" element={<CustomerList/>} />
        <Route path="/drivers/trips" element={<Trips />} />
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/drivers" element={<Drivers />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/buses" element={<Buses />} />
          
      </Routes>
  </Router>
  );


}

export default App;