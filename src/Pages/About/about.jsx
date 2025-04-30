import React from 'react';
import Navbar from '../../Component/Navbar';
import RotateCard from '../../Component/rotatecard';
import Footer from '../../Component/footer';

const About = () => {
  return (
    <>
      <Navbar/>
      <div>
      <RotateCard title="About" />
    </div>
        <div>About</div>
        <Footer/>
    </>
  );
};

export default About;
