import React from 'react';

const CarCard = ({ image, name, price, type, capacity, fuel, transmission }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm">
      <img src={image} alt={name} className="mt-20 mx-auto object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{type}</p>
      <div className="flex justify-between mt-2">
        <p className="text-lg font-bold">${price}/day</p>
        <button className="bg-blue-500 text-white py-1 px-4 rounded">Rent Now</button>
      </div>
      <div className="flex justify-between mt-2 text-gray-500 text-sm">
        <p>{fuel}</p>
        <p>{transmission}</p>
        <p>{capacity} People</p>
      </div>
    </div>
  );
};

export default CarCard;
