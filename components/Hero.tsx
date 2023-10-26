"use client"
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index';
import Link from 'next/link';
import Menu from './Menu';
import LoadingScreen from './LoadingPage';
import Image from 'next/image';

const images = [
  {
    src: '/04-UAQ-01.jpg',
    caption: 'CAPTION ONE, UMM Al QUWAIN',
  },
  {
    src: '/hero1.png',
    caption: 'CAPTION TWO, SHARJAH',
  },
  // Add more images and captions here
];

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleMenu = (e: any) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLoadComplete = () => {
    setLoadingComplete(true);
  };

  useEffect(() => {
    // Rotate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {!loadingComplete ? (
        <LoadingScreen onLoad={handleLoadComplete} />
      ) : (
        <section className="relative h-screen">
          <nav className="absolute top-0 left-0 z-10 flex justify-between items-center p-6 w-full bg-opacity-60 text-white bg-black">
            <h1 className="text-5xl font-bold">3rd Column</h1>
            <div className="cursor-pointer" onClick={toggleMenu}>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
            </div>
          </nav>
          <div className="relative h-4/5 bg-black bg-opacity-100">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute h-screen w-full transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-90' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-x-0 bottom-0 text-center  w-full ">
                  <h1 className=' text-3xl font-helvetica-neue tracking-wider font-semibold p-4 text-white'>{image.caption}</h1>
                  
                </div>
                <p className='text-white'>This is some text below the image.</p>
              </div>
            ))}
          </div>
          <Menu isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu} />
        </section>
      )}
    </div>
  );
};

export default Hero;

// import React, { useState, useEffect } from 'react';
// import LoadingScreen from './LoadingPage';
// import Menu from './Menu';
// import Image from 'next/image';

// const Hero = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(-1);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [loadingComplete, setLoadingComplete] = useState(false);

//   const images = [
//     { src: '/project1.jpg', caption: 'Caption 1' },
//     { src: '/project2.jpg', caption: 'Caption 2' },
//     // ... add more images and captions
//   ];

//   const toggleMenu = (e: any) => {
//     e.preventDefault();
//     setIsMenuOpen((isMenuOpen) => !isMenuOpen);
//   };
  

//   const handleCloseMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const handleLoadComplete = () => {
//     setLoadingComplete(true);
//   };



//   const getRandomPosition = () => {
//     const position = {
//       top: `${Math.random() * 70}vh`,
//       left: `${Math.random() * 70}vw`,
//     };
//     return position;
//   };



//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * images.length);
//       setCurrentImageIndex(randomIndex);

//       setTimeout(() => {
//         setCurrentImageIndex(-1);
//       }, 2000); // Image overlap time

//     }, 6000); // Display image for 5 seconds and wait 1 second for the next transition

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoadingComplete(true);
//     }, 2000); // Simulating loading time
//   }, []);

  

//   return (
//     <div>
//       {!loadingComplete ? (
//         <LoadingScreen onLoad={handleLoadComplete}/>
//       ) : (
//         <section
//           id='home'
//           className='relative h-screen bg-black text-white overflow-hidden'
//         >
//           <nav className="flex justify-between items-center p-6 bg-black bg-opacity-60 text-white z-20">
//             <h1 className="text-5xl font-bold">3rd Column</h1>
//             <div className="cursor-pointer z-10" onClick={toggleMenu}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-10 w-10"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </div>
            
//           </nav>
//           <div className='absolute inset-1'>
//             {currentImageIndex !== -1 && (
//               <div
//                 className="absolute"
//                 style={{
//                   top: getRandomPosition().top,
//                   left: getRandomPosition().left,
//                   animation: 'fade 8s ease-in-out 8s 1 normal forwards',

//                 }}
//               >
//                 <Image
//                   src={images[currentImageIndex].src}
//                   alt="Hero Image"
//                   width={300}
//                   height={300}
//                   layout="fixed"
//                   objectFit="cover"
//                 />
//                 <div className="text-center bg-black bg-opacity-50 w-56 h-20 text-white absolute bottom-0 left-1/2 transform -translate-x-1/2">
//                   <h1 className=' text-sm p-1'>{images[currentImageIndex].caption}</h1>
//                 </div>
//               </div>
//             )}
//           </div>
//           <Menu isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu} />
//         </section>
//       )}
//     </div>
//   );
// }

// export default Hero;

