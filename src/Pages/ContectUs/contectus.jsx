import React from 'react';
import Navbar from '../../Component/Navbar';
import Rotatecard from '../../Component/rotatecard'
import Footer from '../../Component/footer';

const ContactUs = () => {
  return (
    <div className=''>
    <Navbar/>
      <div>
        <Rotatecard title="Contact Us" />
      </div>

      <div>
        <div>Contact Us Page</div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default ContactUs;
