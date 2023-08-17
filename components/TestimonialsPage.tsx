"use client"
import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        name: 'Person1',
        quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
        image: '/john-doe.jpeg', // Add image URL here
      },
      {
        name: 'Person2',
        quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
        image: '/john-doe.jpeg', // Add image URL here
      },
      {
        name: 'Person-3',
        quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
        image: '/john-doe.jpeg', // Add image URL here
      },
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="p-8 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-light p-2 text-gray-800 font-helvetica-neue tracking-wider">TESTIMONIALS</h2>
      <p className='opacity-60'>What our clients have to say</p>
      <div className="flex items-center mb-4 relative md:flex-row">
        <div className="flex-grow max-w-[95vw] overflow-hidden space-x-10 scrollbar-hide mb-10 scroll-smooth px-24">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              image={testimonial.image}
              visible={index === currentIndex}
            />
          ))}
        </div>
        <div className="hidden md:flex justify-between absolute w-full top-1/2 transform -translate-y-1/2">
          <button onClick={handlePrev} className="text-2xl font-bold focus:outline-none text-white bg-gray-800 hover:text-gray-800 hover:bg-white rounded-full p-2 text-center shadow-md ml-2">
            &lt;
          </button>
          <button onClick={handleNext} className="text-2xl font-bold focus:outline-none text-white bg-gray-800 hover:text-gray-800 hover:bg-white rounded-full p-2 text-center shadow-md mr-2">
            &gt;
          </button>
        </div>
      </div>
      <div className="flex md:hidden justify-center space-x-2 mt-4">
        <button onClick={handlePrev} className="text-2xl font-bold focus:outline-none text-white bg-gray-800 hover:text-gray-800 hover:bg-white rounded-full p-2 text-center shadow-md">
          &lt;
        </button>
        <button onClick={handleNext} className="text-2xl font-bold focus:outline-none text-white bg-gray-800 hover:text-gray-800 hover:bg-white rounded-full p-2 text-center shadow-md">
          &gt;
        </button>
      </div>
    </section>
  );
}

export default TestimonialsPage;
