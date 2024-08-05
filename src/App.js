import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/customer login and signup/login";
import Signup from "./components/customer login and signup/signup";
import Logins from './components/drivers login and signup page/login'
import Signups from './components/drivers login and signup page/signup'
import TicketForm from "./components/busticket";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup-driver" element={<Signups />} />
                <Route path="/login-driver" element={<Logins />} />
                <Route path="busticket" element={<TicketForm />} />
            </Routes>
        </Router>
    );
}

export default App;
