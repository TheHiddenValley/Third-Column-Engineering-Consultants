import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onLoad: () => void;
  }

const LoadingScreen = ({ onLoad }: LoadingScreenProps) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      onLoad();
    }, 4000); 
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 flex justify-center items-center transition-transform duration-500 h-screen ${
        showLoading ? 'transform translate-y-0' : 'transform translate-y-full'
      }`}
      style={{ background: 'black', color: 'white' }}
    >
    <hr className='text-white'/>
      <p className="text-center text-6xl font-semibold">
        "We borrow from nature, the space upon which we build"
      </p>
      <p className='text-center text-amber-200'>-Tadao Ando</p>
      <hr className='text-white'/>
    </div>
  );
};

export default LoadingScreen;
