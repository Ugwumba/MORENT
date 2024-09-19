import React from 'react';
import HeaderSection from './HeaderSection';
import CarList from './CarList';
import HeroSection from './HeroSection';
import Footer from './Footer';

const CarRentalApp = () => {
  return (
    <div>
      <HeaderSection />
      <div className="container mx-auto p-6 mt-20">
        <HeroSection />
        <CarList />
        <Footer />
      </div>
    </div>
  );
};

export default CarRentalApp;
