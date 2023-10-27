import React from 'react';

const BackButton = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded cursor-pointer hidden"
      onClick={scrollToAbout}
    >
      Back to About
    </button>
  );
};

export default BackButton;
