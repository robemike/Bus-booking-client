import React from 'react';

const BookingForm = () => {
  return (
    <div className=' max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
      <form className='flex flex-col'>
        <div className='mb-4'>
          <label htmlFor='from' className='block text-gray-700 font-bold mb-2'>From</label>
          <input type='text' id='from' className='w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' placeholder='Enter your starting point' />
        </div>
        <div className='mb-4'>
          <label htmlFor='to' className='block text-gray-700 font-bold mb-2'>To</label>
          <input type='text' id='to' className='w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' placeholder='Enter your destination' />
        </div>
        <div className='mb-4'>
          <label htmlFor='date' className='block text-gray-700 font-bold mb-2'>Date</label>
          <input type='date' id='date' className='w-full px-4 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' />
        </div>
        <button type='submit' className='w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700'>Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;