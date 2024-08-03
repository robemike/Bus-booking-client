import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Buses from "./components/Drivers/buses";
import Landing from "./components/Drivers/landing";
import CustomerList from "./components/Drivers/customerlist";
import Navbar from "./components/Drivers/Navbar";
import Trips from "./components/Drivers/trips";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/drivers/navbar" element={<Navbar />} />
                <Route path="/drivers/signup" element={<Signup />} />
                <Route path="/drivers/login" element={<Login />} />
                <Route path="/drivers/landing" element={<Landing />} />
                <Route path="/drivers/buses" element={<Buses />} />
                <Route path="/drivers/customer-list" element={<CustomerList/>} />
                <Route path="/drivers/trips" element={<Trips />} />
                
            </Routes>
        </Router>
    );
}

export default App;
