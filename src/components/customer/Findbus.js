import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const FindBus1 = () => {
  const [busData, setBusData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state;

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await fetch('https://bus-booking-server-1.onrender.com/buses');
        const data = await response.json();

        const userRoute = `${formData.current_address} to ${formData.destination}`;

        const filteredBuses = data.filter(bus => 
          bus.travel_time === formData.departure_time && bus.route === userRoute
        );

        setBusData(filteredBuses);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusData();
  }, [formData.departure_time, formData.current_address, formData.destination]);
  if (!formData) {
    return <p>Error: Missing booking details. Please try again.</p>;
  }
  const handleBusSelection = (bus) => {
    navigate(`/seats/${bus.id}`, { state: { formData, bus } });
  };


  return (
    <div className="find-bus">
      <Navbar/>
      <div id="headerfd">
        <img 
          className="header-image" 
          alt="Bus Header" 
          src="https://media.cnn.com/api/v1/images/stellar/prod/230202121804-basigo-electric-bus-nairobi-kenya-1.jpg?q=w_1110,c_fill/f_webp" 
        />
      </div>
      <div className="bus-list">
        {busData.length > 0 ? busData.map((bus) => (
          <div className="bus-item" key={bus.id}>
            <img className="bus-item-image" alt={`${bus.username} Bus`} src={bus.image} />
            <div className="bus-info">
              <div className="bus-company">
                <button onClick={() => handleBusSelection(bus)}>{bus.username}</button>
              </div>
              <div className="bus-details">Seats: {bus.number_of_seats}, Cost: {bus.cost_per_seat}</div>
              <div className="route">Route: {bus.route}</div>
              <div className="time">
                <div className="travel-time">{bus.travel_time}</div>
              </div>
              <div className="number-plate">Number Plate: {bus.number_plate}</div>
            </div>
          </div>
        )) : <p>No buses available for the selected route and time.</p>}
      </div>
      <Footer />
    </div>
  );
};

export default FindBus1;