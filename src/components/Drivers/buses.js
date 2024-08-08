import React from "react";
import './buses.css';
import Navbar from "./Navbar.js";
import { useNavigate } from "react-router-dom";

function DriverBuses() {

    const navigate = useNavigate ()
    const busData = [
        { name: 'Super Metro', code: 'KZF 456F' },
        { name: 'The Guardian', code: 'KWT 654T' },
        { name: 'Lopha Travelers', code: 'KDA 214K'},
        { name: 'StarBus', code: 'KDB 676U' },
        { name: 'Modern Coast', code: 'KBQ 678U' },
        { name: 'Embassava', code: 'KDC 766O'},
        { name: 'Muranga Shuttle', code: 'KAA 567Y'}
    ];

    return (
        <div id="main-form" className="">
             {/* <Navbar /> <br/> */}
             <div id="sidebus" className="sidebar">
                <ul>
                    <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
                    <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
                    <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
                    <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
                </ul>
            </div>
        <div id="form" className="buses-container">
            <header id="headbus" className="header">BUSLINK BUSES</header>
            <div id="content-bus" className="content">
                <div className="search-bar">
                    <input type="search" placeholder="Search Bus" />
                </div>
                <ul id="bus-data" className="bus-list">
                    {busData.map((bus, index) => (
                        <li className="bus-item" key={index}>
                            <div>
                                <span className="bus-icon">🚌</span>
                                <span>{bus.name}</span>
                            </div>
                            <div>
                                <span className="bus-code">{bus.code}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <footer className="footer">© 2023 BUSLINK BUSES</footer>
        </div>
        </div>
    );
}

export default DriverBuses;