"use client"
import React, {useState} from 'react'
import Menu from './Menu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = (e: any) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
      };
    
      const handleCloseMenu = () => {
        setIsMenuOpen(false);
      };
  return (
    <div>
    <nav className="flex justify-between items-center p-4 ">
      <h1 className="text-xl font-bold">Third Column</h1>
      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
    <Menu isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu} />
    </div>
  )
}

export default Navbar
