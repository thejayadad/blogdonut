'use client'
import React from 'react';
import { Parallax } from 'react-parallax';

const Treats = () => {
  return (
    <Parallax bgImage="https://images.pexels.com/photos/7034529/pexels-photo-7034529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" strength={500}>
      <div style={{ height: '120vh' }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">Donut Delights</h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Indulge in our heavenly donuts and experience pure bliss with every bite.
            </p>
            {/* Add any additional content here */}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Treats;
