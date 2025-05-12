import React from 'react';
import Portfolio1 from '../assets/portfolio1.png';
import Portfolio2 from '../assets/portfolio2.png';
import Portfolio3 from '../assets/portfolio3.png';
import Portfolio4 from '../assets/portfolio4.png';

const Photocard = () => {
  return (
      <div className="flex flex-col lg:flex-row mx-36 my-28 px-7">
        
        <div className="w-full lg:w-1/2 max-w-[560px] mx-auto">
          <img src={Portfolio1} alt="Project 1" className="w-full transition-transform duration-300 animate-slideInLeft"/>
        </div>

        <div className="w-full max-w-[560px] mx-auto flex flex-col gap-6 ">
          <div>
            <img src={Portfolio2} alt="Project 2" className="animate-slideInRight w-full transition-transform duration-300"/>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-slideInUp">
            <img src={Portfolio3} alt="Project 3" className="w-full "/>
            <img src={Portfolio4} alt="Project 4" className="w-full"/>
          </div>
        </div>
        
      </div>
  );
};

export default Photocard;
