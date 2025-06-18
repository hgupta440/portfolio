import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ravi Sharma',
    role: 'Business Owner',
    text: 'Hitesh developed a custom e-commerce site for my store with advanced inventory management. The result was flawless and delivered on time.'
  },
  {
    name: 'Ray Zimkus',
    role: 'Marketing Head, WebCorp',
    text: 'Working with Hitesh was a pleasure. He handled both frontend and backend tasks efficiently and communicated every step clearly.'
  },
  {
    name: 'Suresh Patel',
    role: 'Startup Founder',
    text: 'We needed scalable APIs for our mobile app. Hitesh built everything in Laravel quickly and exactly as we needed. Highly recommended!'
  }
];

const Testimonial = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 animate-slideInUp">Testimonials</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Hear from clients and collaborators who have worked with Hitesh on various projects – websites, APIs, and full-stack solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideInUp">
        {testimonials.map((item, index) => (
          <div key={index} className="border rounded p-6 text-left hover:shadow-md transition-shadow duration-300">
            <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
            <p className="text-gray-700 mb-6">"{item.text}"</p>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
