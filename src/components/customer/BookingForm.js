// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Assuming you have an AuthContext that provides authentication status
// import { AuthContext } from '../contexts/AuthContext';

// const BookingForm = () => {
//   const [formData, setFormData] = useState({
//     current_address: '',
//     destination: '',
//     departure_date: '',
//     departure_time: '',
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
  
//   // Accessing the authentication state and user data
//   const { isAuthenticated, hasAccount } = useContext(AuthContext);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//     setErrors({
//       ...errors,
//       [e.target.id]: '', 
//     });
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.current_address) newErrors.current_address = 'Required';
//     if (!formData.destination) newErrors.destination = 'Required';
//     if (!formData.departure_date) newErrors.departure_date = 'Required';
//     if (!formData.departure_time) newErrors.departure_time = 'Required';

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Conditional navigation based on authentication state
//     if (!hasAccount) {
//       navigate('/signup');
//     } else if (!isAuthenticated) {
//       navigate('/login');
//     } else {
//       navigate('/findbus', { state: { formData } });
//     }
//   };

//   return (
//     <div className='max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
//       <form className='flex flex-col' onSubmit={handleSubmit}>
//         <div className='mb-4'>
//           <label htmlFor='current_address' className='block text-gray-700 font-bold mb-2'>From</label>
//           <input
//             type='text'
//             id='current_address'
//             value={formData.current_address}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border ${errors.current_address ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
//             placeholder='Enter your starting point'
//           />
//           {errors.current_address && <p className='text-red-500 text-sm mt-1'>{errors.current_address}</p>}
//         </div>
//         <div className='mb-4'>
//           <label htmlFor='destination' className='block text-gray-700 font-bold mb-2'>To</label>
//           <input
//             type='text'
//             id='destination'
//             value={formData.destination}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border ${errors.destination ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
//             placeholder='Enter your destination'
//           />
//           {errors.destination && <p className='text-red-500 text-sm mt-1'>{errors.destination}</p>}
//         </div>
//         <div className='mb-4'>
//           <label htmlFor='departure_date' className='block text-gray-700 font-bold mb-2'>Date</label>
//           <input
//             type='date'
//             id='departure_date'
//             value={formData.departure_date}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border ${errors.departure_date ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
//           />
//           {errors.departure_date && <p className='text-red-500 text-sm mt-1'>{errors.departure_date}</p>}
//         </div>
//         <div className='mb-4'>
//           <label htmlFor='departure_time' className='block text-gray-700 font-bold mb-2'>Travel Time</label>
//           <select
//             id='departure_time'
//             value={formData.departure_time}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border ${errors.departure_time ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
//           >
//             <option value=''>Select Time</option>
//             <option value='08:00'>08:00</option>
//             <option value='15:00'>15:00</option>
//             <option value='22:00'>22:00</option>
//           </select>
//           {errors.departure_time && <p className='text-red-500 text-sm mt-1'>{errors.departure_time}</p>}
//         </div>
//         <button type='submit' className='w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700'>
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;






import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // Correct the path

const BookingForm = () => {
  const [formData, setFormData] = useState({
    current_address: '',
    destination: '',
    departure_date: '',
    departure_time: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  const { isAuthenticated, hasAccount } = useContext(AuthContext);

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

    if (!formData.current_address) newErrors.current_address = 'Required';
    if (!formData.destination) newErrors.destination = 'Required';
    if (!formData.departure_date) newErrors.departure_date = 'Required';
    if (!formData.departure_time) newErrors.departure_time = 'Required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!hasAccount) {
      navigate('/signup');
     } else if (!isAuthenticated) {
      navigate('/login');
     } 
    
    else {
      navigate('/findbus', { state: { formData } });
    }
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div className='mb-4'>
          <label htmlFor='current_address' className='block text-gray-700 font-bold mb-2'>From</label>
          <input
            type='text'
            id='current_address'
            value={formData.current_address}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.current_address ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
            placeholder='Enter your starting point'
          />
          {errors.current_address && <p className='text-red-500 text-sm mt-1'>{errors.current_address}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='destination' className='block text-gray-700 font-bold mb-2'>To</label>
          <input
            type='text'
            id='destination'
            value={formData.destination}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.destination ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
            placeholder='Enter your destination'
          />
          {errors.destination && <p className='text-red-500 text-sm mt-1'>{errors.destination}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='departure_date' className='block text-gray-700 font-bold mb-2'>Date</label>
          <input
            type='date'
            id='departure_date'
            value={formData.departure_date}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.departure_date ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
          />
          {errors.departure_date && <p className='text-red-500 text-sm mt-1'>{errors.departure_date}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='departure_time' className='block text-gray-700 font-bold mb-2'>Travel Time</label>
          <select
            id='departure_time'
            value={formData.departure_time}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.departure_time ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-blue-500`}
          >
            <option value=''>Select Time</option>
            <option value='08:00:00'>08:00</option>
            <option value='15:00:00'>15:00</option>
            <option value='22:00:00'>22:00</option>
          </select>
          {errors.departure_time && <p className='text-red-500 text-sm mt-1'>{errors.departure_time}</p>}
        </div>
        <button type='submit' className='w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700' >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

