"use client" 
import React from 'react'
import herobg from '../public/hero1.png'; 
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'
import { useState } from 'react';
import Link from 'next/link';

import Menu from './Menu';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (e: any) => {
      e.preventDefault();
      setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
      setIsMenuOpen(false);
    };

  return (
    <section
      id='home'
      className='relative h-screen bg-opacity-30 bg-cover bg-center text-white'
      style={{
        backgroundImage: `url(${herobg.src})`, // Replace 'your-image.jpg' with your actual image path
      }}
    >
      <nav className="flex justify-between items-center p-6 ">
      <h1 className="text-5xl font-bold ">Third Column</h1>
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
        <div className='flex text-center items-center justify-center md:flex-row md:space-x-4 md:text-left md:pt-20 md:pb-20 sm:pt-20'>
            <div className='md:mt-2 md:w-3/5'>
                {/* <h1 className='text-lg mt-4 mb-6 md:text-3xl'>We are
                  <span className="text-teal-500 font-bold"> {text} </span> 
                  <Cursor />
                </h1> */}
            </div>
       </div>
        <Menu isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu}/>
    </section>
  )
}

export default Hero
