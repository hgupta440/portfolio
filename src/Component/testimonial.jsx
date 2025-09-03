import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Arpan Adhikari',
    role: 'Business Owner',
    text: "I worked with Hitesh a few years back building a containerised php application in Laravel and Lumen framework. He's a quick learner and will take time to learn a new skill/technology for the benefit of the peojwct. He showed a lot of passion and enthusiasm to the projeand brought his expertise in Laravel and Lumen to our team. Moreover , he's trustworthy and dependable. During our work together, I also found him very collaborative and open to feedback and sudden changes to project scope."
  },
  {
    name: 'Ramunas Zimkus',
    role: 'Marketing Head, WebCorp',
    text: "I have been work with Hitesh more than 3 years. He is amazing web developer. Great communication, always available 24/7. My project is done as he promised, even goes extra mile. He's developing skills outstanding ! I will continue to work with him. Thank you."
  },
  {
    name: 'Duane Cardwell',
    role: 'Startup Founder',
    text: "Hitesh provided critical troubleshooting and code fixes for an online payment gateway. He was responsive and easy to communicate with. He implemented special requests for features, and conducted himself professionally through varied unforeseen challenges. I would highly recommend him."
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
