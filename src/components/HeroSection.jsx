import React, { useState } from 'react';
import car1 from '../assets/cars/car1.png';
import car2 from '../assets/cars/car2.png';


const HeroSection = () => {
  const [selectedOption, setSelectedOption] = useState('pickup');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <section className=" py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Card */}
          <div className="bg-blue-500 rounded-lg shadow-md p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">The Best Platform for Car Rental</h2>
            <p className="mb-4">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md">Rental Car</button>
            <img
              src={car1}
              alt="Car"
              className="mt-6"
            />
          </div>

          {/* Second Card */}
          <div className="bg-blue-600 rounded-lg shadow-md p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Easy way to rent a car at a low price</h2>
            <p className="mb-4">Providing cheap car rental services and safe and comfortable facilities.</p>
            <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md">Rental Car</button>
            <img
              src={car2}
              alt="Car"
              className="mt-6"
            />
          </div>
        </div>

        {/* Pick-Up/Drop-Off Form */}
        <section className=" py-10">
          <div className="container mx-auto">
            {/* Form Container */}
            <div className="flex justify-center items-center space-x-6">
              {/* Pick-Up Section */}
              <div className={`bg-white p-6 rounded-lg shadow-md ${selectedOption === 'pickup' ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="rentalOption"
                    id="pickUp"
                    value="pickup"
                    checked={selectedOption === 'pickup'}
                    onChange={() => handleOptionChange('pickup')}
                    className="form-radio text-blue-500"
                  />
                  <label htmlFor="pickUp" className="text-gray-700 font-semibold">Pick - Up</label>
                </div>

                {/* Pick-Up Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  {/* Location */}
                  <div>
                    <label className="block text-gray-600">Locations</label>
                    <select className="w-full border rounded-lg p-2">
                      <option>Select your city</option>
                      <option>New York</option>
                      <option>Los Angeles</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-gray-600">Date</label>
                    <input type="date" className="w-full border rounded-lg p-2" />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-gray-600">Time</label>
                    <input type="time" className="w-full border rounded-lg p-2" />
                  </div>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7M5 10h14M19 14H5m0 0l7 7m0 0l7-7" />
                  </svg>
                </button>
              </div>

              {/* Drop-Off Section */}
              <div className={`bg-white p-6 rounded-lg shadow-md ${selectedOption === 'dropoff' ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="rentalOption"
                    id="dropOff"
                    value="dropoff"
                    checked={selectedOption === 'dropoff'}
                    onChange={() => handleOptionChange('dropoff')}
                    className="form-radio text-blue-500"
                  />
                  <label htmlFor="dropOff" className="text-gray-700 font-semibold">Drop - Off</label>
                </div>

                {/* Drop-Off Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  {/* Location */}
                  <div>
                    <label className="block text-gray-600">Locations</label>
                    <select className="w-full border rounded-lg p-2">
                      <option>Select your city</option>
                      <option>New York</option>
                      <option>Los Angeles</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-gray-600">Date</label>
                    <input type="date" className="w-full border rounded-lg p-2" />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-gray-600">Time</label>
                    <input type="time" className="w-full border rounded-lg p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
