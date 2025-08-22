"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


    const pathVariants = {
    closed: { d: "M4 6h16M4 12h16M4 18h16" },
    open: { d: "M6 18L18 6M6 6l12 12" }
  };
  return (
    <div className="p-4 md:p-5">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full p-2 justify-around items-center bg-[#212121] border-2 border-[#262626] rounded-3xl">
        <a
          href="/"
          className="group relative inline-block text-[#F35034] uppercase font-bold hover:text-[#F35049] transition"
        >
          About
          <span
            className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full bg-current
           origin-right scale-x-0 transition-transform duration-300
           group-hover:scale-x-100 group-hover:origin-left"
          ></span>
        </a>
        <a
          href="/"
          className="group relative inline-block text-white uppercase hover:text-gray-100 transition"
        >
          projects
          <span
            className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full bg-current
           origin-right scale-x-0 transition-transform duration-300
           group-hover:scale-x-100 group-hover:origin-left"
          ></span>
        </a>
        <a
          href="/"
          className="group relative inline-block text-white uppercase hover:text-gray-100 transition"
        >
          connect me
          <span
            className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full bg-current
           origin-right scale-x-0 transition-transform duration-300
           group-hover:scale-x-100 group-hover:origin-left"
          ></span>
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center bg-[#212121] border-2 border-[#262626] rounded-3xl p-3">
   
   

      <button
        onClick={toggleMenu}
        className="relative text-white focus:outline-none p-2 rounded-lg transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out mt-1 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out mt-1 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>
 

        <AnimatePresence>
        {isMenuOpen && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
              exit={{ y: -10, opacity: 0, transition: { duration: 0.5 } }}
              className="absolute top-16 left-0 right-0 bg-[#212121] border-2 border-[#262626] rounded-xl mx-4 z-10 p-4"
            >
              <div className="flex flex-col space-y-3">
                <a
                  href="/"
                  className="text-[#F35034] uppercase font-bold hover:text-[#f3705a] transition p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/projects"
                  className="text-white uppercase hover:text-gray-300 transition p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  projects
                </a>
                <a
                  href="/connect-me"
                  className="text-white uppercase hover:text-gray-300 transition p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  connect me
                </a>
              </div>
            </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
