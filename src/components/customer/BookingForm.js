import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    current_address: '',
    destination: '',
    departure_date: '',
    departure_time: '',
  });

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.id]: '',
    });
  };

  const validate = () => {
    const newErrors = {};
    const today = new Date();
    const selectedDate = new Date(formData.departure_date);
  
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
  
    if (!formData.current_address) newErrors.current_address = 'Required';
    if (!formData.destination) newErrors.destination = 'Required';
    if (!formData.departure_date) {
      newErrors.departure_date = 'Required';
    } else if (selectedDate < today) {
      newErrors.departure_date = 'You cannot book a date that has already passed';
    }
    if (!formData.departure_time) newErrors.departure_time = 'Required';
  
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const validationErrors = validate();
    console.log('Validation Errors:', validationErrors);
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    console.log('User:', user);
    if (!user || !user.id) {
      alert('You must be logged in to book a bus');
      navigate('/login');
    } else {
      console.log('Form Data:', formData);
      navigate('/findbus', { state: { formData } });
    }
  };
  

  return (
    <div className='bookingform-container flex justify-center items-center'>
      <form className='flex flex-wrap justify-center space-x-6 bg-white p-8 rounded-lg shadow-md border border-gray-200' onSubmit={handleSubmit}>
        <div className='flex flex-col w-64'>
          <label htmlFor='current_address' className='text-gray-700 font-bold'>From</label>
          <input
            type='text'
            id='current_address'
            value={formData.current_address}
            onChange={handleChange}
            className={`px-4 py-2 border ${errors.current_address ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
            placeholder='Starting point'
          />
          {errors.current_address && <p className='text-red-500 text-sm'>{errors.current_address}</p>}
        </div>
        <div className='flex flex-col w-64'>
          <label htmlFor='destination' className='text-gray-700 font-bold'>To</label>
          <input
            type='text'
            id='destination'
            value={formData.destination}
            onChange={handleChange}
            className={`px-4 py-2 border ${errors.destination ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
            placeholder='Destination'
          />
          {errors.destination && <p className='text-red-500 text-sm'>{errors.destination}</p>}
        </div>
        <div className='flex flex-col w-64'>
          <label htmlFor='departure_date' className='text-gray-700 font-bold'>Date</label>
          <input
            type='date'
            id='departure_date'
            value={formData.departure_date}
            onChange={handleChange}
            className={`px-4 py-2 border ${errors.departure_date ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          {errors.departure_date && <p className='text-red-500 text-sm'>{errors.departure_date}</p>}
        </div>
        <div className='flex flex-col w-64'>
          <label htmlFor='departure_time' className='text-gray-700 font-bold'>Time</label>
          <select
            id='departure_time'
            value={formData.departure_time}
            onChange={handleChange}
            className={`px-4 py-2 border ${errors.departure_time ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
          >
            <option value=''>Select Time</option>
            <option value='08:00:00'>08:00:00</option>
            <option value='15:00:00'>15:00:00</option>
            <option value='22:00:00'>22:00:00</option>
          </select>
          {errors.departure_time && <p className='text-red-500 text-sm'>{errors.departure_time}</p>}
        </div>
        <button type='submit' className='bookingform-button w-full mt-4 py-2 px-6 bg-blue-600 text-white font-bold rounded hover:bg-blue-700'>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
