import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <header className="max-h-fit sticky top-0 left-0 right-0 z-50 bg-[#ffe0b2]">
      <div className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        
        <Link to="/" className="text-3xl font-bold text-black">
          Himanshu Mishra
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium ">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/service" className="hover:underline">Services</Link>
          <div className="relative group cursor-pointer">
            <div className="flex items-center hover:underline">
              Pages
              <span className="ml-1">+</span>
            </div>
            
            <div className="absolute hidden group-hover:block bg-white mt-2 rounded shadow-md">
              <Link to="/about" className="block C hover:bg-gray-100 px-4 py-2">About</Link>
              <Link to="/resume" className="block px-4 py-2 hover:bg-gray-100">Resume</Link>
            </div>
          </div>

          <Link to="/projects" className="hover:underline ">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </nav>

      </div>

    </header>
  );
};

export default Navbar;
