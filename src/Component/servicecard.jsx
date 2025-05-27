import React from "react";
import { FaWordpress } from "react-icons/fa";
import { SiMagento, SiJoomla } from "react-icons/si";

const serviceinfo = [
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

const servicecard = () => {
  return (
    <section className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 animate-slideInLeft">Services</h2>
      <p className="text-gray-600 mb-10 max-w-xl animate-slideInUp w-[30%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {serviceinfo.map((serviceinfo, index) => (
          <div key={index} className="animate-slideInUp border border-orange-200 p-8 rounded-lg shadow hover:shadow-md transition duration-300">
            <div className="mb-4">{serviceinfo.icon}</div>
            <h3 className="text-xl font-bold mb-2">{serviceinfo.title}</h3>
            <p className="text-gray-600">{serviceinfo.description}</p>
          </div>
        ))}
      </div>

      <div className="text-right animate-slideInUp">
        <button className="bg-orange-500 text-white py-2 px-5 rounded hover:bg-orange-600 transition">
          View More
        </button>
      </div>
    </section>
  );
};

export default servicecard;
