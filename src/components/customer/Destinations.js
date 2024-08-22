import { destinations } from "../../Data";
import React from "react";
import Routes from "./Routes";

const Destinations = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold">Top Destinations</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {destinations.map(({ id, destination, image, route }) => (
          <div
            className="w-64 h-80 bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            key={id}
          >
            <img
              src={image}
              alt={destination}
              className="w-full h-40 object-cover"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2">{destination}</h3>
              <p className="text-gray-600">{route}</p>
            </div>
          </div>
        ))}
      </div>
      <Routes />
    </div>
  );
};

export default Destinations;
