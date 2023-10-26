"use client"
import React from 'react'
import { useState } from 'react';
import PortfolioData, {Project} from './PortfolioData';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCategoryClick = (category : string) => {
    setSelectedCategory(category);
  };
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
    <div key={index} className="relative h-50"> {/* Set a fixed height */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover rounded-3xl transition-opacity hover:opacity-60 cursor-pointer"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 hover:rounded-3xl transition-opacity cursor-pointer">
        <div className="text-center" onClick={() => handleProjectClick(project)}>
          <h1 className="text-xl font-bold">{project.title}</h1>
          <p>{project.year}</p>
        </div>
      </div>
    </div>
  ))}
</div>

{selectedProject && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-xl font-bold">{selectedProject.title}</h1>
      <img
        className="rounded-lg"
        src={selectedProject.image}
        alt=""
        style={{ maxHeight: '80vh' }} // Set a max height relative to the viewport height
      />
      {/* <p>{selectedProject.description}</p> */}
      <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={closeModal}>
        Close
      </button>
    </div>
  </div>
)}

    </section>
  )
}

export default Portfolio
