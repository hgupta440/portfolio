import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ffe0b2] py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Hitesh Gupta</h2>
      <p className="text-gray-700 max-w-md mx-auto mb-6">
        Full-stack web developer specializing in building responsive websites, APIs, and scalable backend systems using PHP, Laravel, CodeIgniter, and modern frontend tools.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
          Fb
        </a>
        <a href="#" className="bg-sky-600 text-white p-2 rounded hover:bg-sky-800">
          Tw
        </a>
        <a href="#" className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
          Yt
        </a>
        <a href="#" className="bg-pink-600 text-white p-2 rounded hover:bg-pink-800">
          In
        </a>
      </div>
    </footer>
  );
};

export default Footer;
