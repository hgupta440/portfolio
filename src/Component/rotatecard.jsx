import React from 'react';

const RotateCard = ({ title }) => {
  return (
    <div className="bg-[#ffe0b2] py-24 text-center relative">
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="absolute bottom-0 right-0 w-full h-14 bg-white -rotate-2 origin-top-right"></div>
    </div>
  );
};

export default RotateCard;
