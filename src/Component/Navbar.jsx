import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#ffe0b2] border-b-2 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        <Link to="/" className="text-2xl font-bold text-black">
          Himanshu Mishra
        </Link>

        <nav className="hidden md:flex space-x-8 text-base">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/service" className="hover:underline">Services</Link>
          <div className="relative group cursor-pointer">
            <div className="flex items-center hover:underline">
              Pages
              <span className="ml-1">&#9662;</span>
            </div>
            
            {/* Dropdown list  */}
            <div className="absolute hidden group-hover:block bg-white mt-2 rounded shadow-md">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
              <Link to="/resume" className="block px-4 py-2 hover:bg-gray-100">Resume</Link>
            </div>
          </div>

          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </nav>

      </div>

    </header>
  );
};

export default Navbar;
