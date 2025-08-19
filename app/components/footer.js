import React from "react";

function Footer() {
  return (
    <div className="p-2 sm:p-5">
      <div className="w-full flex flex-col sm:flex-row p-2 sm:p-4 justify-between items-center bg-[#212121] border-2 border-[#262626] rounded-3xl gap-4 sm:gap-0">
        {/* Logo */}
        <a 
          href="/" 
          className="text-[#F35034] items-center flex justify-center uppercase font-bold text-sm sm:text-base w-full sm:w-[15%] order-1 sm:order-none"
        >
          Zeyad
        </a>

        {/* Navigation Links */}
        <div className='w-full sm:w-[70%] flex justify-center order-3 sm:order-none'>
          <div className='w-full sm:w-[80%] md:w-[60%] lg:w-[40%] flex justify-around flex-wrap gap-2 sm:gap-0'>
            <a href="https://github.com/zeyad-pro" className='text-[#F35034] uppercase font-bold text-sm sm:text-base'>Github</a>
            <a href="/projects" className='text-white uppercase text-sm sm:text-base'>LinkedIn</a>
            <a href="/connect-me" className='text-white uppercase text-sm sm:text-base'>twitter</a>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="w-full sm:w-[15%] flex items-center justify-center order-2 sm:order-none">
          <div className="flex gap-2 bg-[#161616] px-2 py-1 rounded-full w-fit items-center text-xs sm:text-sm">
            <img
              src="/red circle.png"
              alt="red circle"
              className="w-3 sm:w-4 object-cover"
            />
            <span>AVAILABLE FOR JOB</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;