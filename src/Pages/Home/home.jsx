import React from "react";
import Profile from "../../assets/proimg.png";

const Home = () => {
  return (
    <div className="font-sans">
      <div className="relative bg-[#ffe0b2] px-6 py-10">
      
        <div className="absolute top-0 left-[20%] w-[1px] h-[500px] bg-orange-400 opacity-50 z-0" />
        <div className="absolute top-0 left-[30%] w-[1px] h-[500px] bg-orange-400 opacity-50 z-0" />
        <div className="absolute top-0 left-[40%] w-[1px] h-[500px] bg-orange-400 opacity-50 z-0" />

        <div className="flex items-center justify-center gap-12 relative z-10 ">
          <div className="max-w-xl ">
            <p className="text-orange-600 text-lg font-semibold mb-2 animate-slideInLeft">
              Hi There, I'm Himanshu Mishra
            </p>
            <div className="space-y-28">
            <h2 className="text-5xl font-bold leading-snug mb-6 animate-slideInLeft ">
              Front End and Back End <br /> Developer
            </h2>
            <div className="bg-orange-500 text-white p-6 rounded-md shadow-md opacity-0 animate-slideInLeftDelay300">
              <p className="italic text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita esse iure veritatis dolorum vel veniam, neque tempore rem libero. Culpa, natus. Dignissimos fugiat minus, eos aliquid ducimus temporibus suscipit dicta eum.
              </p>
              <p className="text-right mt-4">Himanshu Mishra</p>
            </div>
            </div>
          </div>

          <div className="w-[550px] animate-slideInUp">
            <img src={Profile} alt="Profile" className=" w-full shadow-md" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-28 bg-white -rotate-2 origin-top-right shadow-md"></div> 
      </div>
    </div>
  );
};

export default Home;
