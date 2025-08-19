"use client"
import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-4 md:p-5">
      {/* Desktop Navigation */}
      <div className='hidden md:flex w-full p-2 justify-around items-center bg-[#212121] border-2 border-[#262626] rounded-3xl'>
        <a href="/" className='text-[#F35034] uppercase font-bold hover:text-[#f3705a] transition'>About</a>
        <a href="/projects" className='text-white uppercase hover:text-gray-300 transition'>projects</a>
        <a href="/connect-me" className='text-white uppercase hover:text-gray-300 transition'>connect me</a>
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden flex justify-between items-center bg-[#212121] border-2 border-[#262626] rounded-3xl p-3'>
        <button 
          onClick={toggleMenu}
          className='text-white focus:outline-none'
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {isMenuOpen && (
          <div className='absolute top-16 left-0 right-0 bg-[#212121] border-2 border-[#262626] rounded-xl mx-4 z-10 p-4'>
            <div className='flex flex-col space-y-3'>
              <a 
                href="/" 
                className='text-[#F35034] uppercase font-bold hover:text-[#f3705a] transition p-2'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/projects" 
                className='text-white uppercase hover:text-gray-300 transition p-2'
                onClick={() => setIsMenuOpen(false)}
              >
                projects
              </a>
              <a 
                href="/connect-me" 
                className='text-white uppercase hover:text-gray-300 transition p-2'
                onClick={() => setIsMenuOpen(false)}
              >
                connect me
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;