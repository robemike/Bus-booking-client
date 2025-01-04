import React, { useState, useEffect } from 'react';

const Routes = () => {
    const [scheduledBuses, setScheduledBuses] = useState([]);
    const [buses, setBuses] = useState([]);

    // Fetch scheduled buses
    useEffect(() => {
        fetch('https://bus-booking-server-1.onrender.com/drivers/view_scheduled_buses')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setScheduledBuses(data))
            .catch((error) => console.error('Error fetching scheduled buses:', error));
    }, []);

    // Fetch bus route information
    useEffect(() => {
        fetch('https://bus-booking-server-1.onrender.com/buses')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setBuses(data))
            .catch((error) => console.error('Error fetching bus routes:', error));
    }, []);

    // Combine scheduled buses with bus route information
    const combinedData = scheduledBuses.map((scheduledBus) => {
        const busInfo = buses.find(bus => bus.id === scheduledBus.bus.id);
        return {
            ...scheduledBus,
            ...busInfo
        };
    });

    return (
        <div className="bg-gray-100 p-4">
            <h1 className="text-2xl font-semibold text-center mb-6">Routes available for Travel currently</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {combinedData.map((bus) => (
                    <div
                        key={bus.id}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{bus.username}</h2>
                        <p className="text-gray-600">Departure: {bus.departure_time}</p>
                        <p className="text-gray-600">Arrival: {bus.arrival_time}</p>
                        <p className="text-gray-600">Route: {bus.route}</p>
                        <p className="text-gray-600">Date: {bus.travel_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Routes;