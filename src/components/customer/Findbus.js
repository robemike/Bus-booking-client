
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
        const response = await fetch('https://bus-booking-server-1.onrender.com/drivers/view_scheduled_buses');
        const data = await response.json();

        const userRoute = `${formData.current_address} to ${formData.destination}`;     
    
        const filteredBuses = data.filter(bus => {
          const timeMatch = bus.travel_time === formData.departure_time;
          const routeMatch = bus.route === userRoute;
        
          console.log("bus.travel_time:", bus.travel_time, typeof bus.travel_time);
          console.log("formData.departure_time:", formData.departure_time, typeof formData.departure_time);
          console.log("bus.route:", bus.route, typeof bus.route);
          console.log("userRoute:", userRoute, typeof userRoute);
          console.log("Time Match:", timeMatch);
          console.log("Route Match:", routeMatch);
        
          return timeMatch && routeMatch;
        });

        setBusData(filteredBuses);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusData();
  }, [formData.departure_time, formData.current_address, formData.destination]);

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