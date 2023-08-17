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
    src: '/hero.png',
    caption: 'CAPTION ONE, DUBAI',
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
        <section className="relative h-screen ">
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
          <div className="relative h-full bg-black bg-opacity-100">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute h-full w-full transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-90' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt="Hero Image"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-x-0 bottom-0 text-center  h-1/8 w-full ">
                  <h1 className=' text-3xl font-helvetica-neue tracking-wider font-semibold p-4 text-white'>{image.caption}</h1>
                </div>
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
