import React from "react";
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const serviceinfo = [
  {
    title: "Web Developer",
    description:
      "Crafting responsive websites with modern technologies like Laravel, PHP, React, and more. From frontend UI to backend logic.",
    icon: <FaCode size={50} className="text-orange-500" />,
  },
  {
    title: "Mobile App Developer",
    description:
      "Building scalable and secure APIs for mobile apps, CRMs, and business tools using Laravel or CodeIgniter.",
    icon: <FaCloud size={50} className="text-orange-500" />,
  },
];

const servicecard = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 animate-slideInLeft">Services</h2>
      <p className="text-gray-600 mb-10 max-w-xl animate-slideInUp w-full md:w-[60%]">
        I offer professional freelance services in web development — including scalable backend systems, modern UI designs, and robust APIs using Laravel, PHP, React, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {serviceinfo.map((service, index) => (
          <div key={index} className="animate-slideInUp border border-orange-200 p-8 rounded-lg shadow hover:shadow-md transition duration-300">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default servicecard;
