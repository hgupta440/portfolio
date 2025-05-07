// import React from 'react';
// import Profile from '../../assets/proimg.png';
// import Footer from '../../Component/footer';
// import Navbar from '../../Component/Navbar';
// import RotateCard from '../../Component/rotatecard';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-[#ffe0b2] font-sans">
//       <Navbar />

//       <div>
//       <div className="flex items-center justify-center px-6 py-5">

//           <div className=''>
//               <p className="text-orange-600 text-lg font-semibold">
//                 Hi There, I'm Himanshu Mishra
//               </p>
//               <h2 className="text-5xl font-bold leading-snug">
//                 Front End and Back End <br /> Developer
//               </h2>

//             <div className="bottom-6 left-6 bg-orange-500 text-white p-6 rounded-md shadow-md ">
//               <p className="italic text-sm">
//                 “Lorem ipsum dolor sit amet, consectetur adipisicing elit. At magni odit repellat vero...”
//               </p>
//               <p className="text-right mt-4">Himanshu Mishra</p>
//             </div>
//           </div>


//         <div className="h-[90%] w-[550px]">
//           <img src={Profile} alt="Profile" className="h-full w-full"/>
//         </div>

//       </div>
//       <RotateCard/>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import Profile from '../../assets/proimg.png';
// import Footer from '../../Component/footer';
// import Navbar from '../../Component/Navbar';
// import RotateCard from '../../Component/rotatecard';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-[#ffe0b2] font-sans">
//       <Navbar />

//       <div>
//       <div className="flex items-center justify-center px-6 py-5">

//           <div className=''>
//               <p className="text-orange-600 text-lg font-semibold">
//                 Hi There, I'm Himanshu Mishra
//               </p>
//               <h2 className="text-5xl font-bold leading-snug">
//                 Front End and Back End <br /> Developer
//               </h2>

//             <div className="bottom-6 left-6 bg-orange-500 text-white p-6 rounded-md shadow-md ">
//               <p className="italic text-sm">
//                 “Lorem ipsum dolor sit amet, consectetur adipisicing elit. At magni odit repellat vero...”
//               </p>
//               <p className="text-right mt-4">Himanshu Mishra</p>
//             </div>
//           </div>


//         <div className="h-[90%] w-[550px]">
//           <img src={Profile} alt="Profile" className="h-full w-full"/>
//         </div>

//       </div>
//       <RotateCard/>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import Profile from '../../assets/proimg.png';
import Footer from '../../Component/footer';
import Navbar from '../../Component/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <div className="relative bg-[#ffe0b2] px-6 py-10">
        
        <div className="absolute top-0 left-[20%] w-[1px] h-[500px] bg-orange-400 opacity-50 z-0" />
        <div className="absolute top-0 left-[30%] w-[1px] h-[500px] bg-orange-400 opacity-50 z-0" />
        <div className="absolute top-0 left-[40%] w-[1px] h-[500px] bg-orange-400 opacity-50 z-0" />

        <div className="flex items-center justify-center relative z-10">
          <div className="max-w-xl mr-8">
            <p className="text-orange-600 text-lg font-semibold">
              Hi There, I'm Himanshu Mishra
            </p>
            <h2 className="text-5xl font-bold leading-snug">
              Front End and Back End <br /> Developer
            </h2>

            <div className="absolute left-64 mt-6 bg-orange-500 text-white p-6 rounded-md shadow-md z-20">
              <p className="italic text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. At magni odit repellat vero…”
              </p>
              <p className="text-right mt-4">Himanshu Mishra</p>
            </div>
          </div>

          <div className="h-[90%] w-[550px]">
            <img src={Profile} alt="Profile" className="h-full w-full relative z-10"/>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-44 bg-white -rotate-2 origin-top-right shadow-md" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
