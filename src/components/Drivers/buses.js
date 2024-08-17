
import React, { useState, useEffect } from "react";
import './buses.css';
import { useNavigate } from "react-router-dom";

function DriverBuses() {
    const navigate = useNavigate();
    const [busData, setBusData] = useState([]);
    const [showBusModal, setShowBusModal] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [search, setSearch] = useState("");
    const [newBus, setNewBus] = useState({
        username: "",
        cost_per_seat: "",
        number_of_seats: "",
        route: "",
        travel_time: "",
        number_plate: "",
        image: ""
    });
    const [editingIndex, setEditingIndex] = useState(null);
    const [schedule, setSchedule] = useState({
        bus_id: "",
        departure_time: "",
        arrival_time: "",
        travel_date: ""
    });

    useEffect(() => {
        fetch('https://bus-booking-server.onrender.com/buses')
            .then(response => response.json())
            .then(data => setBusData(data))
            .catch(error => {
                console.error('Error fetching bus data:', error);
            });
    }, []);

    const handleAddEditBus = () => {
        if (editMode) {
            // Update existing bus
            fetch(`https://bus-booking-server.onrender.com/edit-buses/${newBus.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBus),
            })
            .then(response => response.json())
            .then(updatedBus => {
                console.log(updatedBus)
                const updatedBusData = [...busData];
                updatedBusData[editingIndex] = newBus;
                setBusData(updatedBusData);
            })
            .catch(error => {
                console.error('Error updating bus data:', error);
            });
        } else {
            console.log(newBus)
            // Create new bus
            fetch('https://bus-booking-server.onrender.com/register/buses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBus),
            })
            .then(response => response.json())
            .then(addedBus => {
                setBusData([...busData, newBus]);
            })
            .catch(error => {
                console.error('Error adding new bus:', error);
            });
        }

        setShowBusModal(false);
        setNewBus({
            username: "",
            cost_per_seat: "",
            number_of_seats: "",
            route: "",
            travel_time: "",
            number_plate: "",
            image: ""
        });
        setEditMode(false);
    };

    const handleEditBus = (index) => {
        setNewBus(busData[index]);
        setEditingIndex(index);
        setEditMode(true);
        setShowBusModal(true);
    };

    // const handleDeleteBus = (index) => {
    //     console.log(busData[index].id)
    //     fetch(`https://bus-booking-server.onrender.com/buses/${busData[index].id}`, {
    //         method: 'DELETE',
    //     })
    //     .then(() => {
    //         const updatedBusData = busData.filter((_, i) => i !== index);
    //         setBusData(updatedBusData);
    //     })
    //     .catch(error => {
    //         console.error('Error deleting bus:', error);
    //     });
    // };

    const handleScheduleBus = () => {
        fetch('https://bus-booking-server.onrender.com/schedule_buses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...schedule,bus_id: newBus.id, available_seats: newBus.number_of_seats, occupied_seats:0}),
        })
        .then(response => response.json())
        .then(addedSchedule => {
            alert('Bus scheduled successfully!');
        })
        .catch(error => {
            console.error('Error scheduling bus:', error);
        });

        setShowScheduleModal(false);
        setSchedule({
            bus_id: "",
            departure_time: "",
            arrival_time: "",
            travel_date: ""
        });
    };

   

   const datatodisplay = busData.filter(bus => {
    if (search.length > 0) {
        return (bus.username.toLowerCase().includes(search.toLowerCase()))
    }
    else {
        return bus
    }
   });

   const handlebusschedule = (index) => {
    setNewBus(busData[index]);
    setShowScheduleModal(true)
   }


    return (
        <div className="buses-container">
            <div className="buses-sidebar">
                <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
                <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
                <li><a onClick={() => navigate("/drivers/view_scheduled_buses")}>Trips</a></li>
                <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
            </div>

            <div className="buses-content-container">
                <header className="buses-header">
                    BUSLINK BUSES
                    <button className="buses-add-bus-button" onClick={() => setShowBusModal(true)}>Add Bus</button>
                </header>

                <div className="buses-content">
                    <div className="buses-search-bar">
                        <input type="search" placeholder="Search Bus" onChange={(e) => setSearch(e.target.value)} />
                    </div>

                    <ul className="buses-bus-list">
                        {datatodisplay.map((bus, index) => (
                            <li 
                                className="buses-bus-item" 
                                key={index}
                                
                            >
                                <div className="buses-bus-info">
                                    <span className="buses-bus-icon">🚌</span>
                                    <span>{bus.username}</span>
                                    <br></br><br></br>
                                    <span className="buses-bus-code">{bus.route}</span>
                                    <br></br><br></br>
                                    <span className="buses-bus-code">{bus.number_plate}</span>
                                </div>
                                <button
                                    className="buses-edit-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEditBus(index);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handlebusschedule(index) }
                                    
                                >
                                    Schedule
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {showBusModal && (
                <div className="buses-modal">
                    <div className="buses-modal-content">
                        <h2>{editMode ? "Edit Bus" : "Add New Bus"}</h2>
                        
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
                            <button className="buses-cancel-button" onClick={() => setShowBusModal(false)}>Cancel</button>
                            <button className="buses-save-button" onClick={handleAddEditBus}>
                                {editMode ? "Save Changes" : "Add Bus"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showScheduleModal && (
                <div className="buses-modal">
                    <div className="buses-modal-content">
                        <h2>Schedule Bus</h2>

                        <label>departure</label>
                        <input
                            type="input"
                            placeholder="Departure Time"
                            value={schedule.departure_time}
                            onChange={(e) => setSchedule({ ...schedule, departure_time: e.target.value })}
                        />
                        <label>arrival time</label>
                        <input
                            type="input"
                            placeholder="Arrival Time"
                            value={schedule.arrival_time}
                            onChange={(e) => setSchedule({ ...schedule, arrival_time: e.target.value })}
                        />
                        <label>Date</label>
                        <input
                            type="date"
                            placeholder="Date"
                            value={schedule.date}
                            onChange={(e) => setSchedule({ ...schedule, travel_date: e.target.value })}
                        />

                        <div className="buses-modal-actions ">
                            <button className="buses-cancel-button" onClick={() => setShowScheduleModal(false)}>Cancel</button>
                            <button className="buses-save-button" onClick={handleScheduleBus}>
                                Schedule Bus
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default DriverBuses;





