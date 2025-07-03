import React, { useState } from 'react';
import Portfolio1 from '../assets/portfolio1.png';
import Portfolio2 from '../assets/portfolio2.png';
import Portfolio3 from '../assets/portfolio3.png';
import Portfolio4 from '../assets/portfolio4.png';

const Photocard = () => {
  const [modalData, setModalData] = useState(null); //  Fix state name

  const openModal = (image, description) => {
    setModalData({ image, description });
  };

  const closeModal = () => {
    setModalData(null);
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
              src={Portfolio1}
              alt="Creative Agency Project"
              className="w-full cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() =>
                openModal(
                  Portfolio1,
                  'A modern landing page for a creative digital agency, showcasing services like WordPress, branding, and mobile app development with a clean and minimal design.'
                )
              }
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Creative agency landing page.</strong>
          </p>
        </div>

        {/* Second column */}
        <div className="w-full max-w-[560px] mx-auto flex flex-col gap-6">
           <div>
            <img
              src={Portfolio2}
              alt="Data Mining Project"
              className="w-full rounded shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() =>
                openModal(
                  Portfolio2,
                  'An engaging startup landing page focused on data mining and analytics, featuring colorful visuals, service highlights, and a call-to-action to convert leads.'
                )
              }
            />
            <p className="text-sm text-gray-600 mt-2">
              <strong>Landing page focused on data mining and analytics, featuring colorful visuals, service highlights, and a call-to-action to convert leads</strong>
            </p>
        </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Image 3 with detail */}
            <div>
              <img
                src={Portfolio3}
                alt="Blog Project"
                className="w-full rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() =>
                  openModal(
                    Portfolio3,
                    'A vibrant, multipurpose layout combining blog features, service highlights, and modern card-based UI ideal for startups looking to engage users with content.'
                  )
                }
              />
              <p className="text-sm text-gray-600 mt-2">
                <strong>Blog + Services layout for a content-focused startup.</strong>
              </p>
            </div>

            {/* Image 4 with detail */}
            <div>
              <img
                src={Portfolio4}
                alt="E-commerce Project"
                className="w-full rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() =>
                  openModal(
                    Portfolio4,
                    'An e-commerce UI for a tech or fashion platform, designed to showcase products or services with a clean and professional layout.'
                  )
                }
              />
              <p className="text-sm text-gray-600 mt-2">
                <strong>E-commerce UI for a fashion brand.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Image and description */}
            <div className="p-4">
              <img
                src={modalData.image}
                alt="Modal project"
                className="w-full h-auto max-h-[300px] object-contain rounded"
              />
              <p className="text-gray-700 text-base mt-4 leading-relaxed">
                {modalData.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photocard;
