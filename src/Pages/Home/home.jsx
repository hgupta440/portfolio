import React from 'react';
import Profile from '../../assets/proimg.png';
import Footer from '../../Component/footer'
import Navbar from '../../Component/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#ffe0b2] font-sans">
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 py-12 items-center">

        <div className="space-y-6">
          <p className="text-orange-600 text-lg font-semibold">Hi There, I'm Himanshu Mishra</p>
          <h2 className="text-4xl font-extrabold">
            Frond End and Back End <br /> Developer
          </h2>

          <div className="bg-orange-500 text-white p-6 rounded-md mt-6 max-w-lg">
            <p className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni odit repellat vero, iste temporibus quod! Quod quos atque error!
            </p>
            <p className="text-right mt-4">Himanshu Mishra</p>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={Profile} alt="Adama" className="w-full max-w-md rounded-md"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;


  