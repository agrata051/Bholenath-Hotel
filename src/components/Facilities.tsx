import React from 'react';
import facilities from '@/data/facilities';

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Facilities</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-100 rounded-full flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                <facility.icon className="w-8 h-8 text-gold-600 group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{facility.name}</h3>
              <p className="text-sm text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;

