import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/customerlogin";
import Signup from "./components/auth/customersignup";
import Logins from './components/auth/driverlogin'
import TicketForm from "./components/customer/busticket";
import Customer from "./components/customer/customerpage";

function App() {
    return (
        <Router>
            <Routes>
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
