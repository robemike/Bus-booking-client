import React from "react";
import './buses.css';
import Navbar from "./Navbar.js";

function Buses() {
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
        <div>
             <Navbar /> <br/>
        <div className="buses-container">
            <header className="header">BUSLINK BUSES</header>
            <div className="content">
                <div className="search-bar">
                    <input type="search" placeholder="Search Bus" />
                </div>
                <ul className="bus-list">
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

export default Buses;