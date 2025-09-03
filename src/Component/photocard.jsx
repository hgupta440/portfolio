import React, { useState } from "react";

// Vite + React: har folder ke andar ki images automatically import karenge
const Portfolio1 = Object.values(
  import.meta.glob("../assets/Hitesh-Portfolio/SAAS-eCommerce-solution/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  })
);
const Portfolio2 = Object.values(
  import.meta.glob("../assets/Hitesh-Portfolio/SAAS-services-management/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  })
);
const Portfolio3 = Object.values(
  import.meta.glob("../assets/Hitesh-Portfolio/Transportation-CRM/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  })
);
const Portfolio4 = Object.values(
  import.meta.glob("../assets/Hitesh-Portfolio/Transport-CRM/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  })
);

const Photocard = () => {
  // Projects array, images automatic folder se
  const projects = [
    {
      images: Portfolio1,
      description:
        "SaaS ecommerce platforms offer drag-and-drop interfaces so you can design your online store without technical know-how. For instance, platforms like Shopify let you pick from a template library and customize from there. Because it’s so easy to use, you can go live with your online store much faster than if you had to develop it yourself.",
    },
    {
      images: Portfolio2,
      description:
        "SaaS Management is the holistic business practice of proactively managing, optimizing, and governing all the SaaS applications within a company’s portfolio through inventory, license, and renewal management. It is founded on four tenets: complete visibility, license optimization, cost savings, and risk avoidance.",
    },
    {
      images: Portfolio3,
      description:
        "Transportation-CRM is a specialized Customer Relationship Management system for the transportation and logistics industry that manages shipper and carrier interactions, streamlines operations like route planning and tracking, and uses data to improve service and sales by centralizing customer information, automating tasks, and providing insights for data-driven decision-making.",
    },
    {
      images: Portfolio4,
      description:
        "A transport management CRM can optimize the improvement of delivery times of a firm by offering real-time tracking as well as optimizing routes.",
    },
  ];

  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (projectIndex) => {
    setCurrentProject(projectIndex);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % projects[currentProject].images.length
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) =>
      prev === 0
        ? projects[currentProject].images.length - 1
        : prev - 1
    );
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 animate-slideInLeft">Portfolio</h2>
      <p className="text-gray-600 mb-10 max-w-xl animate-slideInUp">
        Some of the recent freelance and professional projects I've worked on:
      </p>

      <div className="flex flex-col lg:flex-row gap-8 animate-slideInUp">
        {/* First column */}
        <div className="w-full lg:w-1/2 max-w-[560px] mx-auto">
          <div className="overflow-hidden rounded shadow-md">
            <img
              src={Portfolio1[0]} // pehli image thumbnail
              alt="SaaS Ecommerece"
              className="w-full cursor-pointer transform hover:scale-105 transition-transform duration-300" style={{ height: '628px' }}
              onClick={() => openModal(0)}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>SaaS ecommerce providers offer software specifically designed to power ecommerce websites.</strong>
          </p>
        </div>

        {/* Second column */}
        <div className="w-full max-w-[560px] mx-auto flex flex-col gap-6">
          <div>
            <img
              src={Portfolio2[0]}
              alt="Data Mining Project"
              className="w-full rounded shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(1)}
            />
            <p className="text-sm text-gray-600 mt-2">
              <strong>
                SaaS management platforms are tools that offer a centralized solution to gain visibility into SaaS usage, streamline workflows and ensure compliance.
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={Portfolio3[0]}
                alt="Blog Project"
                className="w-full rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-300" style={{ height: '220px' }}
                onClick={() => openModal(2)}
              />
              <p className="text-sm text-gray-600 mt-2">
                <strong>"Transportation-CRM is a specialized Customer Relationship Management system."</strong>
              </p>
            </div>

            <div>
              <img
                src={Portfolio4[0]}
                alt="E-commerce Project"
                className="w-full rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(3)}
              />
              <p className="text-sm text-gray-600 mt-2">
                <strong>A transport management CRM can optimize the improvement of delivery times of a firm by offering real-time tracking as well as optimizing routes.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with slider */}
      {currentProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Prev button */}
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white px-3 py-2 rounded-full"
              onClick={prevSlide}
            >
              ‹
            </button>

            {/* Next button */}
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white px-3 py-2 rounded-full"
              onClick={nextSlide}
            >
              ›
            </button>

            {/* Image & description */}
            <div className="p-4">
              <img
                src={projects[currentProject].images[currentImageIndex]}
                alt="Modal project"
                className="w-full h-auto max-h-[300px] object-contain rounded"
              />
              <p className="text-gray-700 text-base mt-4 leading-relaxed">
                {projects[currentProject].description}
              </p>
              <p className="text-sm text-gray-500 mt-2 text-center">
                {currentImageIndex + 1} / {projects[currentProject].images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photocard;