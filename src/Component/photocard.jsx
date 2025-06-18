import React from 'react';
import Portfolio1 from '../assets/portfolio1.png';
import Portfolio2 from '../assets/portfolio2.png';
import Portfolio3 from '../assets/portfolio3.png';
import Portfolio4 from '../assets/portfolio4.png';

const Photocard = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 animate-slideInLeft">Portfolio</h2>
      <p className="text-gray-600 mb-10 max-w-xl animate-slideInUp">
        Some of the recent freelance and professional projects I've worked on:
      </p>

      <div className="flex flex-col lg:flex-row gap-8 animate-slideInUp">
        <div className="w-full lg:w-1/2 max-w-[560px] mx-auto">
          <img
            src={Portfolio1}
            alt="Project 1"
            className="w-full rounded shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="w-full max-w-[560px] mx-auto flex flex-col gap-6">
          <img
            src={Portfolio2}
            alt="Project 2"
            className="w-full rounded shadow-md hover:scale-105 transition-transform duration-300"
          />
          <div className="grid grid-cols-2 gap-4">
            <img src={Portfolio3} alt="Project 3" className="w-full rounded shadow-md" />
            <img src={Portfolio4} alt="Project 4" className="w-full rounded shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photocard;
