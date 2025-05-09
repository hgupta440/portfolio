import React from "react";
import RotateCard from "../../Component/rotatecard";
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

      <section className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Best Services</h2>
        <p className="text-gray-600 mb-10 max-w-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="border border-orange-200 p-8 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>))}
        </div>

        <div className="text-right">
          <button className="bg-orange-500 text-white py-2 px-5 rounded hover:bg-orange-600 transition">
            View More
          </button>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">My Achievements</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo Lorem ipsum dolor sit
            amet, consectetur adipiscing elit utt elit tellus.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center border border-orange-200 p-6 rounded">
              <h3 className="text-4xl font-bold text-orange-500">320</h3>
              <p className="text-gray-600 mt-2">Project Done</p>
            </div>
            <div className="text-center border border-orange-200 p-6 rounded">
              <h3 className="text-4xl font-bold text-orange-500">140</h3>
              <p className="text-gray-600 mt-2">Company</p>
            </div>
            <div className="text-center border border-orange-200 p-6 rounded">
              <h3 className="text-4xl font-bold text-orange-500">26</h3>
              <p className="text-gray-600 mt-2">On Progress</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Service;
