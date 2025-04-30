import React from "react";
import Footer from "../../Component/footer";
import Navbar from "../../Component/Navbar";
import RotateCard from "../../Component/rotatecard";



const Service = () => {
  return (
    <>
    <Navbar/>
    <div>
      <RotateCard title="Service" />
    </div>
    <section className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Services</h2>
      <p className="text-gray-600 mb-10 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper mattis leo.
      </p>


      <div className="text-right">
        <button className="bg-orange-500 text-white py-2 px-5 rounded hover:bg-orange-600 transition">
          View More
        </button>
      </div>
      
    </section>
    <div><Footer/></div>
    </>
  );
};

export default Service;
