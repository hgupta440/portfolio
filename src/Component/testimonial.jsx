import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Designer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    name: 'Mario Mar',
    role: 'Programmer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    name: 'Lopez Jota',
    role: 'Marketing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  }
];

const Testimonial = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 animate-slideInUp">Testimonial</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideInUp">
        {testimonials.map((item, index) => (
          <div key={index} className="border rounded p-6 text-left hover:shadow-md transition-shadow duration-300">
            <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
            <p className="text-gray-700 mb-6">{item.text}</p>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
