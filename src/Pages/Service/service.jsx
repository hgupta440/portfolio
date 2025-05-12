import React from "react";
import RotateCard from "../../Component/rotatecard";
import Servicecard from '../../Component/servicecard';
import { FaWordpress } from "react-icons/fa";
import { SiMagento, SiJoomla } from "react-icons/si";

const services = [
  {
    title: "WordPress",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    icon: <FaWordpress size={50} className="text-orange-500" />,
  },
  {
    title: "Magento",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    icon: <SiMagento size={50} className="text-orange-500" />,
  },
  {
    title: "Joomla",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
    icon: <SiJoomla size={50} className="text-orange-500" />,
  },
];

const Service = () => {
  return (
    <>
      <div>
        <RotateCard title="Service" />
      </div>
      <div>
        <Servicecard/>
      </div>

      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">My Achievements</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo Lorem ipsum dolor sit
            amet, consectetur adipiscing elit utt elit tellus.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center border border-orange-200 p-2 rounded">
              <h3 className="text-4xl font-bold text-orange-500">320</h3>
              <p className="text-gray-600 mt-2">Project Done</p>
            </div>
            <div className="text-center border border-orange-200 p-2 rounded">
              <h3 className="text-4xl font-bold text-orange-500">140</h3>
              <p className="text-gray-600 mt-2">Company</p>
            </div>
            <div className="text-center border border-orange-200 p-2 rounded">
              <h3 className="text-4xl font-bold text-orange-500">26</h3>
              <p className="text-gray-600 mt-2">On Progress</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
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

    </>
  );
};

export default Service;
