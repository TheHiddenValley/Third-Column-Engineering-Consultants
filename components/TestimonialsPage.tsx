"use client"
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Frederik Nuyttens',
    designation:'Engineering and Projects Manager',
    company:'Tencate Grass -  Fibres and Fabrics',
    quote: 'The expertise of the Third Column Consultants Team has been remarkable, and has allowed us to build an open warehouse to store our raw materials within the committed timeframe. With more future projects lined up, they will be our preferred partner to guide us through the entire construction process.',
  },
  {
    name: 'Renato F. Bachmann',
    designation: 'Director' ,
    company: 'Kilua Homes' ,
    quote: 'As the Director of Kilua Homes, we have worked closely with 3rd Column Engineering Consultants, Dubai, on our residential project, Kilua Homes, Mombasa, Kenya. I view them as very professional, creative and thoughtful architectural firm. They possess the relevant skills of listening, understanding and valuing our views as client and come up with solutions that are culturally, technically and economically relevant. We have been fully satisfied with their work and I do recommend them without any hesitation to anyone who is looking for their service.',
  },
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[currentIndex]);

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    setCurrentTestimonial(testimonials[nextIndex]);
  };

  const prevTestimonial = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
    setCurrentTestimonial(testimonials[prevIndex]);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 10000); // Change testimonial every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <section id="testimonials" className="p-6 md:h-screen h-auto flex flex-col items-center justify-center bg-orange-600">
      <div className="flex items-center mb-4 relative md:flex-row">
        <button
          onClick={prevTestimonial}
          className="text-3xl font-bold focus:outline-none text-white hover:text-gray-800 hover:bg-white rounded-full p-2 text-center m-2"
        >
          &lt;
        </button>
        <div className="max-w-[95vw] text-3xl font-serif p-6 text-white rounded-lg">
          <p>&ldquo;{currentTestimonial.quote}&rdquo;</p>
          <p className="text-xl text-right font-thin mt-2">-{currentTestimonial.name}</p>
          <p className="text-lg text-right font-thin mt-2">{currentTestimonial.designation},</p>
          <p className="text-lg text-right font-thin">{currentTestimonial.company}</p>
        </div>
        <button
          onClick={nextTestimonial}
          className="text-3xl font-bold focus:outline-none text-white  hover:text-gray-800 hover:bg-white rounded-full p-2 text-center m-2"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default TestimonialsPage;