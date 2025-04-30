import React from 'react';
import Footer from '../../Component/footer';
import Navbar from '../../Component/Navbar';
import RotateCard from '../../Component/rotatecard';


const Projects = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar/>
      <div>
      <RotateCard title="Projects" />
    </div>

      
      <div><Footer/></div>
    </div>
  );
};

export default Projects;
