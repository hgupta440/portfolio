import React from 'react';
import RotateCard from '../../Component/rotatecard';
import Photocard from '../../Component/photocard';

const Projects = () => {
  return (
    <div className="bg-white text-gray-900">
      <div>
        <RotateCard title="Projects" />
      </div>
      <div>
        <Photocard/>
      </div>

    </div>
  );
};

export default Projects;
