import React from 'react';
import RotateCard from '../../Component/rotatecard';

const About = () => {
  return (
    <div>

      <div>
        <RotateCard title="About" />
      </div>

      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Front End and Back End Devloper</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo Lorem ipsum dolor sit
            amet, consectetur adipiscing elit utt elit tellus.
          </p>
          <div>
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Resume Download
          </button>
          </div>
        </div>
        
        <div className="space-y-10">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Web Design</span>
              <span>80%</span>
            </div>
            <div className="w-full h-3 bg-orange-100 rounded-sm">
              <div className="h-3 bg-orange-500 rounded-sm" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Back End</span>
              <span>95%</span>
            </div>
            <div className="w-full h-3 bg-orange-100 rounded-sm">
              <div className="h-3 bg-orange-500 rounded-sm" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Graphic Design</span>
              <span>70%</span>
            </div>
            <div className="w-full h-3 bg-orange-100 rounded-sm">
              <div className="h-3 bg-orange-500 rounded-sm" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Marketing</span>
              <span>85%</span>
            </div>
            <div className="w-full h-3 bg-orange-100 rounded-sm">
              <div className="h-3 bg-orange-500 rounded-sm" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
