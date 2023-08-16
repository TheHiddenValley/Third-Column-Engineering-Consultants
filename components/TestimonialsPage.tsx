"use client"
import React from 'react'
import { useState } from 'react';
import TestimonialCard from './TestimonialCard'

const testimonials = [
    {
        name: 'John Doe',
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: '/john-doe.jpeg', // Add image URL here
      },
      {
        name: 'John Doe',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/john-doe.jpeg', // Add image URL here
      },
      {
        name: 'John Doe',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/john-doe.jpeg', // Add image URL here
      },
      {
        name: 'John Doe',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/john-doe.jpeg', // Add image URL here
      },
      {
        name: 'John Doe',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/john-doe.jpeg', // Add image URL here
      },
      {
        name: 'John Doe',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/john-doe.jpeg', // Add image URL here
      },
      {
        name: 'John Do',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/john-doe.jpeg', // Add image URL here
      },
      {
        name: 'John De',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/john-doe.jpeg', // Add image URL here
      },
    // Add more testimonials
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
      <h2 className="text-5xl font-bold mb-4 p-2 text-gray-800">Testimonials</h2>
      <div className="flex items-center mb-4">
        <button onClick={handlePrev} className="text-2xl font-bold mr-2 focus:outline-none text-gray-800">
          &lt;
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              image={testimonial.image}
              visible={index >= currentIndex && index < currentIndex + 3}
            />
          ))}
        </div>
        <button onClick={handleNext} className="text-2xl font-bold ml-2 focus:outline-none text-gray-800">
          &gt;
        </button>
      </div>
    </section>
  )
}

export default TestimonialsPage
