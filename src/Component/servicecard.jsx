import React from "react";
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const serviceinfo = [
  {
    title: "Full-Stack Web Development",
    description:
      "Crafting responsive websites with modern technologies like Laravel, PHP, React, and more. From frontend UI to backend logic.",
    icon: <FaCode size={50} className="text-orange-500" />,
  },
  {
    title: "RESTful APIs & Backend",
    description:
      "Building scalable and secure APIs for mobile apps, CRMs, and business tools using Laravel or CodeIgniter.",
    icon: <FaCloud size={50} className="text-orange-500" />,
  },
  {
    title: "Freelance Web Solutions",
    description:
      "Providing end-to-end freelance services — from planning to deployment. Ideal for startups, agencies, and individual clients.",
    icon: <FaMobileAlt size={50} className="text-orange-500" />,
  },
];

const servicecard = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 animate-slideInLeft">Services</h2>
      <p className="text-gray-600 mb-10 max-w-xl animate-slideInUp w-full md:w-[60%]">
        I offer professional freelance services in web development — including scalable backend systems, modern UI designs, and robust APIs using Laravel, PHP, React, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {serviceinfo.map((service, index) => (
          <div key={index} className="animate-slideInUp border border-orange-200 p-8 rounded-lg shadow hover:shadow-md transition duration-300">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
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
