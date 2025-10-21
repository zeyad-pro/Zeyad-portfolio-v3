"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsMenuOpen(false); // تغلق القائمة في الموبايل بعد الضغط
    }
  };

  return (
    <div className="p-4 md:p-5">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full p-2 justify-around items-center bg-[#212121] border-2 border-[#262626] rounded-3xl">
        <button
          onClick={() => scrollTo("about")}
          className="group relative inline-block text-[#F35034] uppercase font-bold hover:text-[#F3705A] transition"
        >
          About
          <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full bg-current origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
        </button>
        <button
          onClick={() => scrollTo("skills")}
          className="group relative inline-block text-white uppercase hover:text-gray-100 transition"
        >
          Skills
          <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full bg-current origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="group relative inline-block text-white uppercase hover:text-gray-100 transition"
        >
          Projects
          <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full bg-current origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
        </button>
       
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center bg-[#212121] border-2 border-[#262626] rounded-3xl p-3">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative text-white focus:outline-none p-2 rounded-lg"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out mt-1 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out mt-1 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
              exit={{ y: -10, opacity: 0, transition: { duration: 0.4 } }}
              className="absolute top-16 left-0 right-0 bg-[#212121] border-2 border-[#262626] rounded-xl mx-4 z-10 p-4"
            >
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollTo("about")}
                  className="text-[#F35034] uppercase font-bold hover:text-[#f3705a] transition p-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollTo("skills")}
                  className="text-white uppercase hover:text-gray-300 transition p-2"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollTo("projects")}
                  className="text-white uppercase hover:text-gray-300 transition p-2"
                >
                  Projects
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
