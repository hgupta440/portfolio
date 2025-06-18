import { path } from 'framer-motion/client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (color) => location.pathname === color ? 'text-[#ff6f00]' : 'hover:text-[#ff6f00]';


  return (
    <header className="fixed w-[100%] z-50 bg-[#ffe0b2] font-rubik">
      <div className="flex justify-between items-center px-6 py-4 mx-44">
        <p className="text-[38px] font-semibold text-black">
          Hitesh Gupta
        </p>

        <nav className="hidden md:flex space-x-8 text-sm">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/service" className={getLinkClass('/service')}>Services</Link>
          <div className="relative group cursor-pointer">
            <div className="flex items-center hover:text-[#ff6f00]">
              Pages <FontAwesomeIcon className='ml-2 text-[11px]' icon={faChevronDown} />
            </div>
            <div className="absolute hidden group-hover:block rounded shadow-lg bg-[#ffe0b2]">
              <Link to="/about" className={`block px-7 pt-4 ${getLinkClass('/about')}`}>About</Link>
              <Link to="/resume" className={`block px-7 py-4 ${getLinkClass('/resume')}`}>Resume</Link>
            </div>
          </div>
          <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
