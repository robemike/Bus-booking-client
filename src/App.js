import CustomerSignup from "./components/auth/customersignup";
import Logins from './components/auth/driverlogin'
import BusTicket from "./components/customer/busticket";
import Customer from "./components/customer/customerpage";
import './App.css';
import FindBus1 from './components/customer/Findbus';
import Admin from './components/Admin/admin';
import Drivers from './components/Admin/drivers';
import Customers from './components/Admin/customers';
import Buses from './components/Admin/buses';
import Seats from './components/customer/seats';
import HomePage from "./components/customer/HomePage";
import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DriverBuses from "./components/Drivers/buses";
import Landing from "./components/Drivers/landing";
import CustomerList from "./components/Drivers/customerlist";
import Trips from "./components/Drivers/trips";
import UploadWidget from "./components/UploadWidget";
import Signup from "./components/auth/driversignup";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/userSlice";
import Login from "./components/auth/customerlogin";
import AdminLogin from "./components/auth/adminlogin";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log(token);
    if (token) {
      fetch("https://bus-booking-server.onrender.com/check_session", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to verify token");
          }
          return response.json();
        })
        .then((userData) => {
          dispatch(addUser(userData));
        })
        .catch((error) => {
          console.error("Token verification failed:", error);
        });
    }
  }, [dispatch]);
  // const user = useSelector((state) => state.user.user);
  // console.log(user);
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/findbus" element={<FindBus1 />} />
        <Route path="/seats/:busId" element={<Seats />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/drivers" element={<Drivers />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/buses" element={<Buses />} />
        <Route path="/buses/:id/seats" element={<Seats />} />
        <Route path="/signup" element={<CustomerSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="busticket" element={<BusTicket />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/drivers/signup" element={<Signup />} />
        <Route path="/drivers/login" element={<Logins />} />
        <Route path="/drivers/landing" element={<Landing />} />
        <Route path="/drivers/buses" element={<DriverBuses />} />
        <Route path="/drivers/customer-list" element={<CustomerList/>} />
        <Route path="/drivers/view_scheduled_buses" element={<Trips />} />
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/drivers" element={<Drivers />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/buses" element={<Buses />} />
        <Route path="/bus-ticket" element={<BusTicket />} />
        <Route path="/upload-widget" element={<UploadWidget />} />

      </Routes>
  </Router>
  );


}

export default App;
