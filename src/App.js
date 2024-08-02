import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import SignupDriver from "./components/Drivers/signup";
import LoginDriver from "./components/Drivers/login";
// import Landing from "./components/Drivers/landing";
// import Buses from "./components/Drivers/buses";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="drivers/signup" element={<SignupDriver />} />
                <Route path="drivers/login" element={<LoginDriver />} />
                {/* <Route path="drivers/landing" element={<Landing />} />
                <Route path="drivers/buses" element={<Buses />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
