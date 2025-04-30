import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ffe0b2] py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Himanshu Mishra</h2>
      <p className="text-gray-700 max-w-md mx-auto mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis eveniet atque assumenda, porro amet.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
          Facebook Logo
        </a>
        <a href="#" className="bg-black text-white p-2 rounded hover:bg-gray-800">
        Twitter Logo
        </a>
        <a href="#" className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
          Youtube Logo
        </a>
        <a href="#" className="bg-pink-700 text-white p-2 rounded hover:bg-pink-800">
          Instagram Logo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
