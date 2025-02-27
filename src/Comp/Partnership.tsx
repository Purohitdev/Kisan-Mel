// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import farm1 from "../assets/Est. 2012.png";


// gsap.registerPlugin(ScrollTrigger);

// const partnerships = [
//   {
//     title: "25% - 75% KisanMel Partnership",
//     investment: ["0%", "100%"],
//     management: ["100%", "0%"],
//     returns: ["25%", "75%"],
//     image: farm1,
//   },
//   {
//     title: "40% - 60% KisanMel Partnership",
//     investment: ["10%", "90%"],
//     management: ["80%", "20%"],
//     returns: ["40%", "60%"],
//     image: farm1,
//   },
//   {
//     title: "50% - 50% KisanMel Partnership",
//     investment: ["50%", "50%"],
//     management: ["50%", "50%"],
//     returns: ["50%", "50%"],
//     image: farm1,
//   },
// ];

// function Partnership() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const tableRef = useRef(null);
//   const imageRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=300%",
//           scrub: 1,
//           pin: true,
//           onUpdate: (self) => {
//             let index = Math.floor(self.progress * partnerships.length);
//             setCurrentIndex(index < partnerships.length ? index : partnerships.length - 1);
//           },
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     gsap.fromTo(
//       titleRef.current,
//       { y: 40, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
//     );

//     gsap.fromTo(
//       tableRef.current,
//       { y: 40, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 }
//     );

//     gsap.fromTo(
//       imageRef.current,
//       {  opacity: 0.5 , },
//       {  opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 }
//     );
//   }, [currentIndex]);

//   useEffect(() => {
//     if (imageRef.current) {
//       // Reset zoom when image changes
//       gsap.set(imageRef.current, { scale: 1 });
  
//       // Apply zoom effect again
//       gsap.fromTo(
//         imageRef.current,
//         { scale: 1 },
//         {
//           scale: 1.3, // Adjust zoom level
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top center",
//             end: "bottom top",
//             scrub: 1,
//           },
//         }
//       );
//     }
//   }, [currentIndex]); // Re-run when image changes
  

//   return (
//     <div ref={sectionRef} className="min-h-screen bg-[#2d4122] px-16 py-6">
//       <div className="min-h-[90vh] w-full h-full flex justify-center items-center p-5">
//         {/* Left Section */}
//         <div className="w-full text-white">
//           <button className="px-4 py-2 border rounded-3xl flex justify-center items-center w-fit">
//             Our Work
//           </button>
//           <h1 className="text-[4rem] leading-none mt-5">Big Farmer Farm-Partnership Model</h1>

//           {/* Dynamic Title */}
//           <h3 ref={titleRef} className="text-[1.5rem] mt-5">{partnerships[currentIndex].title}</h3>

//           {/* Dynamic Table */}
//           <table ref={tableRef} className="w-[80%] border border-white text-white text-lg mt-10">
//             <thead>
//               <tr className="bg-[#3a552a] text-white">
//                 <th className="border border-white p-3"></th>
//                 <th className="border border-white p-3">KisanMel</th>
//                 <th className="border border-white p-3">Farmer</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-white p-3 font-semibold">Investment</td>
//                 <td className="border border-white p-3 text-center">{partnerships[currentIndex].investment[0]}</td>
//                 <td className="border border-white p-3 text-center">{partnerships[currentIndex].investment[1]}</td>
//               </tr>
//               <tr>
//                 <td className="border border-white p-3 font-semibold">Management</td>
//                 <td className="border border-white p-3 text-center">{partnerships[currentIndex].management[0]}</td>
//                 <td className="border border-white p-3 text-center">{partnerships[currentIndex].management[1]}</td>
//               </tr>
//               <tr>
//                 <td className="border border-white p-3 font-semibold">Returns</td>
//                 <td className="border border-white p-3 text-center">{partnerships[currentIndex].returns[0]}</td>
//                 <td className="border border-white p-3 text-center">{partnerships[currentIndex].returns[1]}</td>
//               </tr>
//             </tbody>
//           </table>

//           <button className="mt-10 px-6 py-4 border-b-2">
//             View {partnerships[currentIndex].title}
//           </button>
//         </div>

//         {/* Right Section with Changing Image */}
//         <div className="w-full flex justify-end items-center">
//           <div className=" w-[80%] h-[70vh] rounded-3xl overflow-hidden">
//             <img
//               ref={imageRef}
//               src={partnerships[currentIndex].image}
//               alt="Farm"
//               className="w-full h-full object-cover transition-all duration-500"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Partnership;


import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import farm1 from "../assets/Est. 2012.png";

gsap.registerPlugin(ScrollTrigger);

const partnerships = [
  {
    title: "25% - 75% KisanMel Partnership",
    investment: ["0%", "100%"],
    management: ["100%", "0%"],
    returns: ["25%", "75%"],
    image: farm1,
  },
  {
    title: "40% - 60% KisanMel Partnership",
    investment: ["10%", "90%"],
    management: ["80%", "20%"],
    returns: ["40%", "60%"],
    image: farm1,
  },
  {
    title: "50% - 50% KisanMel Partnership",
    investment: ["50%", "50%"],
    management: ["50%", "50%"],
    returns: ["50%", "50%"],
    image: farm1,
  },
];

function Partnership() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tableRef = useRef(null);
  const imageRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            let index = Math.floor(self.progress * partnerships.length);
            setCurrentIndex(index < partnerships.length ? index : partnerships.length - 1);
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      tableRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0.5 },
      { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 }
    );
  }, [currentIndex]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.set(imageRef.current, { scale: 1 });

      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }
  }, [currentIndex]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#e4e1d8b2] px-16 py-6">
      <div className="min-h-[90vh] w-full h-full flex justify-center items-center p-5">
        {/* Left Section */}
        <div className="w-full text-[#2d4122]">
          <button className="px-4 py-2 border border-[#2d4122] rounded-3xl flex justify-center items-center w-fit text-[#2d4122]">
            Our Work
          </button>
          <h1 className="text-[4rem] leading-none mt-5">Big Farmer Farm-Partnership Model</h1>

          {/* Dynamic Title */}
          <h3 ref={titleRef} className="text-[1.5rem] mt-5">{partnerships[currentIndex].title}</h3>

          {/* Dynamic Table */}
          <table ref={tableRef} className="w-[80%] border border-[#2d4122] text-[#2d4122] text-lg mt-10">
            <thead>
              <tr className="bg-[#2d4122] text-white">
                <th className="border border-[#2d4122] p-3"></th>
                <th className="border border-[#2d4122] p-3">KisanMel</th>
                <th className="border border-[#2d4122] p-3">Farmer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#2d4122] p-3 font-semibold">Investment</td>
                <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].investment[0]}</td>
                <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].investment[1]}</td>
              </tr>
              <tr>
                <td className="border border-[#2d4122] p-3 font-semibold">Management</td>
                <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].management[0]}</td>
                <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].management[1]}</td>
              </tr>
              <tr>
                <td className="border border-[#2d4122] p-3 font-semibold">Returns</td>
                <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].returns[0]}</td>
                <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].returns[1]}</td>
              </tr>
            </tbody>
          </table>

          <button className="mt-10 px-6 py-4 border-b-2 border-[#2d4122] text-[#2d4122]">
            View {partnerships[currentIndex].title}
          </button>
        </div>

        {/* Right Section with Changing Image */}
        <div className="w-full flex justify-end items-center">
          <div className="w-[80%] h-[70vh] rounded-3xl overflow-hidden">
            <img
              ref={imageRef}
              src={partnerships[currentIndex].image}
              alt="Farm"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
