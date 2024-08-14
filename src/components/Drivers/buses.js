
import React, { useState, useEffect } from "react";
import './buses.css';
import { useNavigate } from "react-router-dom";

function DriverBuses() {
    const navigate = useNavigate(); 
    const [busData, setBusData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newBus, setNewBus] = useState({
        username: "",
        cost_per_seat: "",
        number_of_seats: "",
        route: "",
        travel_time: "",
        number_plate: "",
        image: ""
    });

    useEffect(() => {
        fetch('https://bus-booking-server.onrender.com/buses')
            .then(response => response.json())
            .then(data => setBusData(data))
            .catch(error => {
                console.error('Error fetching bus data:', error);
            });
    }, []);

    const handleAddBus = () => {
        console.log(newBus);
        setBusData([...busData, newBus]);
        setShowModal(false);
        setNewBus({
            username: "",
            cost_per_seat: "",
            number_of_seats: "",
            route: "",
            travel_time: "",
            number_plate: "",
            image: ""
        });
        
    };

    const handleDeleteBus = (index) => {
        const updatedBusData = busData.filter((_, i) => i !== index);
        setBusData(updatedBusData);
    };

    const handleBusClick = (busName) => {
        navigate(`/drivers/buses/${busName}`);
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
                            <li 
                                className="buses-bus-item" 
                                key={index}
                                onClick={() => handleBusClick(bus.username)}
                            >
                                <div className="buses-bus-info">
                                    <span className="buses-bus-icon">🚌</span>
                                    <span>{bus.username}</span>
                                    <span className="buses-bus-code">{bus.number_plate}</span>
                                    
                                </div>
                                <button
                                    className="buses-delete-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteBus(index);
                                    }}
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
                            value={newBus.username}
                            onChange={(e) => setNewBus({ ...newBus, username: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Add Number Plate"
                            value={newBus.number_plate}
                            onChange={(e) => setNewBus({ ...newBus, number_plate: e.target.value })}
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
                            placeholder="Add Image URL"
                            value={newBus.image}
                            onChange={(e) => setNewBus({ ...newBus, image: e.target.value })}
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
