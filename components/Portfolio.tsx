"use client"
import React from 'react'
import { useState } from 'react';
import PortfolioData from './PortfolioData';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category : string) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'All' ? PortfolioData : PortfolioData.filter(project => project.category === selectedCategory);
  return (
    <section id='portfolio' className='bg-gray-800  p-10 h-3/4'>
        <h1 className='text-3xl font-helvetica-neue tracking-wider font-light pb-2 text-white'>PORTFOLIO</h1>
        <p className='opacity-60 text-white pb-2'>Our Work</p>
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 mb-4 ">
        <button className="px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg" onClick={() => handleCategoryClick('All')}>All</button>
        <button className="px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg" onClick={() => handleCategoryClick('commercial')}>Commercial</button>
        <button className="px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg" onClick={() => handleCategoryClick('residential')}>Residential</button>
        <button className="px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg" onClick={() => handleCategoryClick('hotels')}>Hotels</button>
        <button className="px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg" onClick={() => handleCategoryClick('industrial')}>Industrial</button>
        <button className="px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg" onClick={() => handleCategoryClick('institutional')}>Institutional</button>
        <button className="px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg" onClick={() => handleCategoryClick('pharmaceutical')}>Pharmaceutical</button>
        <button className="px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg" onClick={() => handleCategoryClick('religious')}>Religious</button>
        <button className="px-4 py-2 bg-gray-900 shadow-md text-white hover:bg-white hover:text-gray-800 duration-500 rounded-lg" onClick={() => handleCategoryClick('villa')}>Villa</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="relative">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 hover:rounded-3xl transition-opacity">
              <div className="text-center">
                <h1 className="text-xl font-bold">{project.title}</h1>
                <p>{project.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Portfolio
