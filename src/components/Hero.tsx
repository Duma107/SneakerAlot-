import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3"
          alt="Hero sneaker"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Step Into Your Style</h1>
          <p className="text-xl mb-8">Discover the latest drops and exclusive releases. Your perfect pair is waiting.</p>
          <button className="bg-white text-navy px-8 py-3 rounded-full font-semibold hover:bg-grey-light transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;