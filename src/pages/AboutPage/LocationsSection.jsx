import React from 'react';

const LocationsSection = ({ locations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {locations.map((inf) => (
        <div key={inf.id}>
          <div className="text-center p-4 rounded-lg" style={{background: 'none'}}>
            <img 
              src={inf.location} 
              alt={inf.title} 
              className="w-full h-auto rounded-lg mb-2"
            />
          </div>
          <div className='text-center'>
            <p className="text-[#f8fafc] text-2xl font-medium mt-4 font-title">{inf.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationsSection;
