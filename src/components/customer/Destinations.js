import { destinations } from '../../Data';

const Destinations = () => {
  return (
    <div className='flex justify-center overflow-x-auto p-6'>
      <div className='flex flex-nowrap gap-6'>
        {destinations.map(({ id, destination, image, route }) => (
          <div 
            className='w-64 h-80 bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'
            key={id}
          >
            <img 
              src={image} 
              alt={destination} 
              className='w-full h-40 object-cover'
            />
            <div className='flex-1 p-4 flex flex-col justify-between'>
              <h3 className='text-xl font-semibold mb-2'>{destination}</h3>
              <p className='text-gray-600'>{route}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
