// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Navbar from '../Navbar';

// const FindBus1 = () => {
//   const [busData, setBusData] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { formData } = location.state; 

//   useEffect(() => {
//     const fetchBusData = async () => {
//       try {
//         const response = await fetch('https://bus-booking-server.onrender.com/buses');
//         const data = await response.json();
//         const filteredBuses = data.filter(bus => bus.travel_time === formData.departure_time);
//         setBusData(filteredBuses);
//         console.log(filteredBuses);
//         console.log(formData);
//       } catch (error) {
//         console.error('Error fetching bus data:', error);
//       }
//     };

//     fetchBusData();
//   }, [formData.departure_time]);

//   const handleBusSelection = (bus) => {
//     navigate(`/seats/${bus.id}, { state: { formData, bus } }`); 
//   };

//   return (
//     <div className="find-bus ">
     
//       <div id="headerfd">
//         <img 
//           className="header-image" 
//           alt="Bus Header" 
//           src="https://media.cnn.com/api/v1/images/stellar/prod/230202121804-basigo-electric-bus-nairobi-kenya-1.jpg?q=w_1110,c_fill/f_webp" 
//         />
//       </div>
//       <div className="bus-list ">
//         {busData.map((bus) => (
//           <div className="bus-item" key={bus.id}>
//             <img className="bus-item-image" alt={`${bus.username} Bus`} src={bus.imageUrl} />
//             <div className="bus-info">
//               <div className="bus-company">
//                 <button onClick={() => handleBusSelection(bus)}>{bus.username}</button>
//               </div>
//               <div className="bus-details">Seats: {bus.number_of_seats}, Cost: {bus.cost_per_seat}</div>
//               <div className="route">Route: {bus.route}</div>
//               <div className="time">
//                 <div className="travel-time">{bus.travel_time}</div>
//               </div>
//               <div className="number-plate">Number Plate: {bus.number_plate}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
   
//   );
// };

// export default FindBus1;






// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const FindBus1 = () => {
//   const [busData, setBusData] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { formData } = location.state || {}; // Retrieve formData from the passed state

//   useEffect(() => {
//     const fetchBusData = async () => {
//       try {
//         const response = await fetch('https://bus-booking-server.onrender.com/buses');
//         const data = await response.json();

//         // Apply filters based on formData
//         const filteredData = data.filter(bus => {
//           return (
//             bus.route.includes(formData.current_address) &&
//             bus.route.includes(formData.destination) &&
//             bus.travel_date === formData.departure_date &&
//             bus.travel_time === formData.departure_time
//           );
//         });

//         setBusData(filteredData);
//       } catch (error) {
//         console.error('Error fetching bus data:', error);
//       }
//     };

//     fetchBusData();
//   }, [formData]);

//   const handleBusSelection = (bus) => {
//     navigate(`/seats/${bus.id}`);
//   };

//   return (
//     <div className="find-bus">
//       <div id="headerfd">
//         <img 
//           className="header-image" 
//           alt="Bus Header" 
//           src="https://media.cnn.com/api/v1/images/stellar/prod/230202121804-basigo-electric-bus-nairobi-kenya-1.jpg?q=w_1110,c_fill/f_webp" 
//         />
//       </div>
//       <div className="bus-list">
//         {busData.map((bus) => (
//           <div className="bus-item" key={bus.id}>
//             <img className="bus-item-image" alt={`${bus.username} Bus`} src={bus.imageUrl} />
//             <div className="bus-info">
//               <div className="bus-company">
//                 <button onClick={() => handleBusSelection(bus)}>{bus.username}</button>
//               </div>
//               <div className="bus-details">Seats: {bus.number_of_seats}, Cost: {bus.cost_per_seat}</div>
//               <div className="route">Route: {bus.route}</div>
//               <div className="time">
//                 <div className="travel-time">{bus.travel_time}</div>
//               </div>
//               <div className="number-plate">Number Plate: {bus.number_plate}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FindBus1;



import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FindBus1 = () => {
  const [busData, setBusData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state; 

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await fetch('https://bus-booking-server.onrender.com/buses');
        const data = await response.json();
        const filteredBuses = data.filter(bus => bus.travel_time === formData.departure_time); 
        setBusData(filteredBuses);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusData();
  }, [formData.departure_time]);

  const handleBusSelection = (bus) => {
    navigate(`/seats/${bus.id}`, { state: { formData, bus } }); // Pass formData and bus data to the next page
  };

  return (
    <div className="find-bus">
      <div id="headerfd">
        <img 
          className="header-image" 
          alt="Bus Header" 
          src="https://media.cnn.com/api/v1/images/stellar/prod/230202121804-basigo-electric-bus-nairobi-kenya-1.jpg?q=w_1110,c_fill/f_webp" 
        />
      </div>
      <div className="bus-list">
        {busData.map((bus) => (
          <div className="bus-item" key={bus.id}>
            <img className="bus-item-image" alt={`${bus.username} Bus`} src={bus.imageUrl} />
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
        ))}
      </div>
    </div>
  );
};

export default FindBus1;
