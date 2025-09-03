import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#ffe0b2] py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Hitesh Gupta</h2>
      <p className="text-gray-700 max-w-md mx-auto mb-6">
        Full-stack web developer specializing in building responsive websites,
        APIs, and scalable backend systems using PHP, Laravel, CodeIgniter, and
        modern frontend tools.
      </p>

      <div className="flex justify-center space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hiteshguptadeveloper/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 text-3xl hover:text-blue-900"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/hgupta440"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 text-3xl hover:text-black"
        >
          <FaGithub />
        </a>

        {/* Upwork */}
        <a
          href="https://www.upwork.com/freelancers/hiteshguptadevloper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 text-3xl hover:text-green-800"
        >
          <SiUpwork />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
