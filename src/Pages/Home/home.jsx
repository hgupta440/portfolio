import React from "react";
import Profile from "../../assets/profile.png";
import Servicecard from '../../Component/servicecard';
import Testimonial from "../../Component/testimonial";
import Photocard from "../../Component/photocard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-100 px-10 lg:px-48 py-24 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 z-10 relative">

          {/* Left Text Content */}
          <div className="space-y-6">
            <p className="text-orange-600 text-xl font-semibold animate-slideInLeft">Hello, I'm</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slideInLeft">
              Hitesh Gupta
            </h1>
            <h2 className="text-2xl text-gray-700 font-medium animate-slideInLeftDelay300">
              Web Developer & API Specialist
            </h2>
            <p className="text-gray-600 max-w-md animate-slideInUp">
              I build powerful websites and scalable APIs using Laravel, CodeIgniter, PHP, HTML, CSS, JS, and React.
            </p>
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">
              Download Resume
            </button>
          </div>

          {/* Right Image */}
          <div className="animate-slideInUp text-center">
            <img src={Profile} alt="Hitesh Gupta" className="rounded-xl shadow-lg w-full max-w-sm mx-auto" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
            <p className="text-gray-600 mb-8 animate-slideInUp">
                I'm Hitesh Gupta — a freelance full-stack web developer specializing in building scalable websites, custom dashboards, and REST APIs using Laravel, PHP, React, and more. I work with clients worldwide to bring their ideas to life.
              </p>

            <p className="text-gray-700">
              Whether you're looking for a custom business website, a powerful CMS, or integration with third-party APIs, I've got you covered.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {[
              ['PHP / Laravel / CodeIgniter', 95],
              ['HTML / CSS / JS / React', 90],
              ['RESTful API Development', 85],
              ['WordPress / CMS', 80]
            ].map(([skill, percent], idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                  <span>{skill}</span>
                  <span>{percent}%</span>
                </div>
                <div className="w-full h-3 bg-orange-100 rounded">
                  <div className="h-3 bg-orange-500 rounded" style={{ width: `${percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="px-4 lg:px-48">
        <Servicecard />
      </div>

      {/* Gallery */}
      <div className="mx-48">
        <Photocard />
      </div>

      {/* Testimonials */}
      <div className="px-4 lg:px-48">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
