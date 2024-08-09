import React, { useState } from "react";
import './buses.css';
import { useNavigate } from "react-router-dom";

function DriverBuses() {
    const navigate = useNavigate(); 
    const [busData, setBusData] = useState([
        { name: 'SUPER METRO', code: 'KZF 456F' },
        { name: 'THE GUARDIAN', code: 'KWT 654T' },
        { name: 'LOPHA TRAVELERS', code: 'KDA 214K'},
        { name: 'STARBUS', code: 'KDB 676U' },
        { name: 'MORDERN BUS', code: 'KBQ 678U' },
        { name: 'EMBASSAVA', code: 'KDC 766O'},
        { name: 'MURANGA SHUTTLE', code: 'KAA 567Y'}
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newBus, setNewBus] = useState({
        name: "",
        code: "",
        username: "",
        cost_per_seat: "",
        number_of_seats: "",
        route: "",
        travel_time: "",
        number_plate: ""
    });

    const handleAddBus = () => {
        setBusData([...busData, newBus]);
        setShowModal(false);
        setNewBus({
            name: "",
            code: "",
            username: "",
            cost_per_seat: "",
            number_of_seats: "",
            route: "",
            travel_time: "",
            number_plate: ""
        });
    };

    const handleDeleteBus = (index) => {
        const updatedBusData = busData.filter((_, i) => i !== index);
        setBusData(updatedBusData);
    };

    return (
        <div className="buses-container">
            <div className="buses-sidebar">
                <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
                <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
                <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
                <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
            </div>

            <div className="buses-content-container">
                <header className="buses-header">
                    BUSLINK BUSES
                    <button className="buses-add-bus-button" onClick={() => setShowModal(true)}>Add Bus</button>
                </header>

                <div className="buses-content">
                    <div className="buses-search-bar">
                        <input type="search" placeholder="Search Bus" />
                    </div>

                    <ul className="buses-bus-list">
                        {busData.map((bus, index) => (
                            <li className="buses-bus-item" key={index}>
                                <div className="buses-bus-info">
                                    <span className="buses-bus-icon">🚌</span>
                                    <span>{bus.name}  </span>

                                    <span className="buses-bus-code">{bus.code}</span>
                                </div>
                                <button
                                    className="buses-delete-button"
                                    onClick={() => handleDeleteBus(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <footer className="buses-footer">© 2023 BUSLINK BUSES</footer>
            </div>

            {showModal && (
                <div className="buses-modal">
                    <div className="buses-modal-content">
                        <h2>Add New Bus</h2>
                        
                        <input
                            type="text"
                            placeholder="Add Bus Name"
                            value={newBus.name}
                            onChange={(e) => setNewBus({ ...newBus, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Add Number Plate"
                            value={newBus.code}
                            onChange={(e) => setNewBus({ ...newBus, code: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Add Username"
                            value={newBus.username}
                            onChange={(e) => setNewBus({ ...newBus, username: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Add Cost Per Seat"
                            value={newBus.cost_per_seat}
                            onChange={(e) => setNewBus({ ...newBus, cost_per_seat: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Add Number of Seats"
                            value={newBus.number_of_seats}
                            onChange={(e) => setNewBus({ ...newBus, number_of_seats: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Add Route"
                            value={newBus.route}
                            onChange={(e) => setNewBus({ ...newBus, route: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Add Travel Time"
                            value={newBus.travel_time}
                            onChange={(e) => setNewBus({ ...newBus, travel_time: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Add Number Plate"
                            value={newBus.number_plate}
                            onChange={(e) => setNewBus({ ...newBus, number_plate: e.target.value })}
                        />

                        <div className="buses-modal-actions">
                             <button className="buses-cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="buses-save-button" onClick={handleAddBus}>Add</button>
                           
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DriverBuses;
