import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/customer login and signup/login";
import Signup from "./components/customer login and signup/signup";
import Logins from './components/drivers login and signup page/login'
import TicketForm from "./components/Bus tickets/busticket";
import Customer from "./components/customer's list/customerpage";

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
