import React from 'react';
import Navigation from '@/components/Navigation'; // Assuming Navigation is in components
import amenities from '../data/amenities';

const Amenities = () => {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hotel Amenities</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{amenity.name}</h3>
                  <p className="text-gray-200 text-sm">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Amenities;
