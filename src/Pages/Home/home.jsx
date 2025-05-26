import React from "react";
import Profile from "../../assets/profile.png";
import Servicecard from '../../Component/servicecard';
import Testimonial from "../../Component/testimonial";
import Photocard from "../../Component/photocard";

const Home = () => {
  return (
    <div className="">
      <div className="relative bg-[#ffe0b2]  px-[13rem]">

        <div className="absolute top-0 left-[20%] w-[1px] h-[500px] bg-orange-400 opacity-50 z-0" />
        <div className="absolute top-0 left-[30%] w-[1px] h-[500px] bg-orange-400 opacity-50 z-0" />
        <div className="absolute top-0 left-[40%] w-[1px] h-[500px] bg-orange-400 opacity-50 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">

          <div className="space-y-3">
            <p className="text-orange-500 text-lg font-semibold mb-2 animate-slideInLeft">
              Hi There, I'm Himanshu Mishra
            </p>

            <div className="">
              <h2 className="text-[45px] font-bold leading-[53px] mb-6 animate-slideInLeft">
                Front End and Back End <br /> Developer
              </h2>
              <div className="absolute left-24 z-50 bg-orange-500 text-white p-6 rounded-md shadow-md w-[50%] animate-slideInLeftDelay300">
                <p className="italic text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita esse iure veritatis dolorum vel veniam, neque tempore rem libero. Culpa, natus. Dignissimos fugiat.
                </p>
                <p className="text-right mt-4">Himanshu</p>
              </div>
            </div>
          </div>

          <div className="md:pt-14 animate-slideInUp">
            <img src={Profile} alt="Profile" className="w-full mx-auto shadow-md" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-28 bg-white -rotate-3 origin-top-right"></div>
      </div>

      <div className="">
        <div className="mx-48">
          <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 animate-slideInLeft">Know More About me</h2>
              <p className="text-gray-600 mb-8 animate-slideInUp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, minus repudiandae ad nesciunt dolorem cum obcaecati, quam ab quasi illo voluptas odit aut ullam cumque optio quae! Voluptatem, quo aut debitis expedita nam, quia, excepturi rem rerum eligendi soluta culpa!
              </p>
              <button type="submit" className="animate-slideInLeft bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                Resume Download
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Web Design</span>
                  <span>80%</span>
                </div>
                <div className="w-full h-3 bg-orange-100 rounded-sm">
                  <div className="h-3 bg-orange-500 rounded-sm animate-slideInLeft" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Back End</span>
                  <span>95%</span>
                </div>
                <div className="w-full h-3 bg-orange-100 rounded-sm">
                  <div className="h-3 bg-orange-500 rounded-sm animate-slideInLeft" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Graphic Design</span>
                  <span>70%</span>
                </div>
                <div className="w-full h-3 bg-orange-100 rounded-sm">
                  <div className="h-3 bg-orange-500 rounded-sm animate-slideInLeft" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Marketing</span>
                  <span>85%</span>
                </div>
                <div className="w-full h-3 bg-orange-100 rounded-sm">
                  <div className="h-3 bg-orange-500 rounded-sm animate-slideInLeft" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="mx-48">
          <Servicecard />
        </div>
        <Photocard />
        <div className="mx-48">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Home;
