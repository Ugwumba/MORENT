import React from 'react';
import CarCard from './CarCard';
import car1 from '../assets/cars/popular/car1.png';
import car3 from '../assets/cars/popular/car3.png';
import car4 from '../assets/cars/popular/car4.png';
import car5 from '../assets/cars/popular/car5.png';

//Recommended Cars
import recomend1 from '../assets/cars/Recomendation/recomend1.png';
import recomend2 from '../assets/cars/Recomendation/recomend2.png';
import recomend3 from '../assets/cars/Recomendation/recomend3.png';
import recomend4 from '../assets/cars/Recomendation/recomend4.png';
import recomend5 from '../assets/cars/Recomendation/recomend5.png';
import recomend6 from '../assets/cars/Recomendation/recomend6.png';
import recomend7 from '../assets/cars/Recomendation/recomend7.png';
import recomend8 from '../assets/cars/Recomendation/recomend8.png';


const CarList = () => {
  const popularCars = [
    { name: 'Koenigsegg', image: car1, price: 99, type: 'Sport', fuel: '90L', transmission: 'Manual', capacity: 2 },
    { name: 'Nissan GT - R', image: car3, price: 80, type: 'Sport', fuel: '80L', transmission: 'Manual', capacity: 2 },
    { name: 'Ferrari 488', image: car4, price: 120, type: 'Sport', fuel: '100L', transmission: 'Automatic', capacity: 2 },
    { name: 'Lamborghini Aventador', image: car5, price: 200, type: 'Sport', fuel: '110L', transmission: 'Automatic', capacity: 2 },
  ];

  const recommendedCars = [
    { name: 'All New Rush', image: recomend1, price: 72, type: 'SUV', fuel: '70L', transmission: 'Manual', capacity: 6 },
    { name: 'Toyota Hilux', image: recomend2, price: 85, type: 'Truck', fuel: '80L', transmission: 'Automatic', capacity: 5 },
    { name: 'All New Rush', image: recomend3, price: 72, type: 'SUV', fuel: '70L', transmission: 'Manual', capacity: 6 },
    { name: 'Toyota Hilux', image: recomend4, price: 85, type: 'Truck', fuel: '80L', transmission: 'Automatic', capacity: 5 },
    { name: 'All New Rush', image: recomend5, price: 72, type: 'SUV', fuel: '70L', transmission: 'Manual', capacity: 6 },
    { name: 'Toyota Hilux', image: recomend6, price: 85, type: 'Truck', fuel: '80L', transmission: 'Automatic', capacity: 5 },
    { name: 'All New Rush', image: recomend7, price: 72, type: 'SUV', fuel: '70L', transmission: 'Manual', capacity: 6 },
    { name: 'Toyota Hilux', image: recomend8, price: 85, type: 'Truck', fuel: '80L', transmission: 'Automatic', capacity: 5 },
  ];

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold">Popular Cars</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {popularCars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-6">Recommended Cars</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {recommendedCars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
