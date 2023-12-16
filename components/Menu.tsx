import React from 'react'

interface MenuProps {
    isMenuOpen: boolean;
    onCloseMenu: () => void;
  }

const Menu = ({ isMenuOpen, onCloseMenu }: MenuProps) => {


  return (
    <div className={`fixed top-0 right-0 h-full w-full bg-gray-800 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300 z-10`}>
        <nav className="flex flex-col justify-center items-center h-full">
        
        <a href="#about" onClick={onCloseMenu} className="cursor-pointer text-white hover:text-amber-200 text-3xl py-4 hover:text-4xl transition duration-300">
          About
        </a>
        <a href="#portfolio" onClick={onCloseMenu} className="text-white hover:text-amber-200 text-3xl py-4 hover:text-4xl transition duration-300">Portfolio</a>
        <a href="#testimonials" onClick={onCloseMenu}className="text-white hover:text-amber-200 text-3xl py-4 hover:text-4xl transition duration-300">Testimonials</a>
        <a href="#team" onClick={onCloseMenu} className="text-white hover:text-amber-200 text-3xl py-4 hover:text-4xl transition duration-300">Our Team</a>
        <a href="#contact" onClick={onCloseMenu} className="text-white hover:text-amber-200 text-3xl py-4 hover:text-4xl transition duration-300">Contact us</a>
        {isMenuOpen && (
          <button
            onClick={onCloseMenu}
            className="bg-amber-200 text-3xl py-2 mt-4 text-black p-4 rounded-full  hover:bg-white transition duration-300"
          >
            x
          </button>
        )}

      </nav>

    </div>
  )
}

export default Menu
