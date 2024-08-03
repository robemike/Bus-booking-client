import React from "react";
import './buses.css';

function Buses() {
    const busData = [
        { name: 'Super Metro', code: 'KZF 456F' },
        { name: 'The Guardian', code: 'KWT 654T' },
        { name: 'Lopha Travelers', code: 'KDA 214K', hasTrash: true, hasTag: true },
        { name: 'StarBus', code: 'SSD 676U' },
        { name: 'Modern Coast', code: 'UGG 678U' },
        { name: 'Embassava', code: 'TZX 766O', hasTrash: true, hasTag: true },
        { name: 'Muranga Shuttle', code: 'KAA 567Y', hasTrash: true, hasTag: true }
    ];

    return (
        <div className="buses-container">
            <header className="header">BUSLINK BUSES</header>
            <div className="content">
                <div className="search-bar">
                    <span className="menu-icon">☰</span>
                    <input type="search" placeholder="Search..." />
                    <span className="search-icon">🔍</span>
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
                                {bus.hasTag}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <footer className="footer">© 2023 BUSLINK BUSES</footer>
        </div>
    );
}

export default Buses;