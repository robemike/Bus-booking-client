import { destinations } from '../Data'

const Destinations = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 p-6'>
      {destinations.map(({ id, destination, image, route }) => (
        <div 
          className='w-64 h-80 bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col'
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
  )
}

export default Destinations