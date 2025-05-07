import React from 'react';
import Navbar from '../../Component/Navbar';
import RotateCard from '../../Component/rotatecard';
import Footer from '../../Component/footer';

const About = () => {
  return (
    <div>
      <Navbar/>

      <div>
        <RotateCard title="About" />
      </div>

        <div>About</div>
        
        <Footer/>
    </div>
  );
};

export default About;
