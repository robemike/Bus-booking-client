import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    current_address: '',
    destination: '',
    departure_date: '',
    depature_time: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/findbus', { state: { formData } });
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='current_address' className='block text-gray-700 font-bold mb-2'>From</label>
          <input type='text' id='current_address' value={formData.current_address} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' placeholder='Enter your starting point' />
        </div>
        <div className='mb-4'>
          <label htmlFor='destination' className='block text-gray-700 font-bold mb-2'>To</label>
          <input type='text' id='destination' value={formData.destination} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' placeholder='Enter your destination' />
        </div>
        <div className='mb-4'>
          <label htmlFor='departure_date' className='block text-gray-700 font-bold mb-2'>Date</label>
          <input type='date' id='departure_date' value={formData.departure_date} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' />
        </div>
        <div className='mb-4'>
          <label htmlFor='travel_time' className='block text-gray-700 font-bold mb-2'>Travel Time</label>
          <select id='depature_time' value={formData.depature_time} onChange={handleChange} className='w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'>
            <option value=''>Select Time</option>
            <option value='8am'>8:00 </option>
            <option value='3pm'>3:00 </option>
            <option value='10pm'>10:00 </option>
          </select>
        </div>
        <button type='submit' className='w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700'>Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
