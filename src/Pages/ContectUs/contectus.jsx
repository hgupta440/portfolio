import React from 'react';
import Rotatecard from '../../Component/rotatecard';
import ContactCard from '../../Component/conatctcard';

const contactInfo = [
  {
    title: 'Email',
    info: 'hm.775570@gmail.com',
    bgColor: 'bg-white',
    textColor: 'text-gray-600',
  },
  {
    title: 'Phone',
    info: '+91 8219575822',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
  },
  {
    title: 'Address',
    info: 'Khera, Nalagarh, Solan, (H.P) 174101',
    bgColor: 'bg-white',
    textColor: 'text-gray-600',
  },
];

const ContactUs = () => {
  return (
    <div>
      <Rotatecard title="Contact Us" />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <ContactCard key={index} title={item.title} info={item.info} bgColor={item.bgColor} textColor={item.textColor}/>))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-2 gap-8">
        <div className="h-[400px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27354.837619073314!2d76.71615539999999!3d31.016365800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e2!4m0!4m0!5e0!3m2!1sen!2sin!4v1746619862952!5m2!1sen!2sin" width="100%" height="100%"></iframe>
        </div>

        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border rounded px-4 py-2" />
          <input type="email" placeholder="Your Email" className="w-full border rounded px-4 py-2" />
          <input type="text" placeholder="Your Subject" className="w-full border rounded px-4 py-2" />
          <textarea placeholder="Your Message" className="w-full border rounded px-4 py-2 h-32 resize-none"></textarea>
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
};

export default ContactUs;
