"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const images = [
    { src: '/service1.png', caption: 'ARCHITECTURAL DESIGN' },
    { src: '/service2.jpg', caption: 'CONSULTANCY' },
  ];

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {images.map((image, index) => (
        <div key={index}>
         
          <img className='opacity-150 h-screen' src={image.src} alt={`Slide ${index}`} />
          <div className="absolute inset-0 flex justify-center items-center  bg-black bg-opacity-50 h-screen w-full">
            <p className="flex justify-center align-middle text-white p-2 text-4xl font-helvetica-neue tracking-wider font-light">
              {image.caption}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
