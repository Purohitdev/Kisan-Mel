// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useNavigate } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// const partnerships = [
//   {
//     title: "25% - 75% KisanMel Partnership",
//     investment: ["0%", "100%"],
//     management: ["100%", "0%"],
//     returns: ["25%", "75%"],
//     image: "/p4.png",
//     model: "Big Farmer",
//     type: "Partnership Model",
//     button: "Our Partnership",
//   },
//   {
//     title: "40% - 60% KisanMel Partnership",
//     investment: ["10%", "90%"],
//     management: ["80%", "20%"],
//     returns: ["40%", "60%"],
//     image: "/p2.png",
//     model: "Middle Farmer",
//     type: "Partnership Model",
//     button: "Our Partnership",
//   },
//   {
//     title: "50% - 50% KisanMel Partnership",
//     investment: ["50%", "50%"],
//     management: ["50%", "50%"],
//     returns: ["50%", "50%"],
//     image: "/p6.png",
//     model: "Small Farmer",
//     type: "Partnership Model",
//     button: "Our Partnership",
//   },
//   {
//     title: "50% - 50% KisanMel Partnership",
//     investment: ["50%", "50%"],
//     management: ["50%", "50%"],
//     returns: ["50%", "50%"],
//     image: "/p5.png",
//     model: "Franchise",
//     type: "KisanMel Agri Showroom",
//     button: "Our Franchise",
//   },
// ];

// function Partnership() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const tableRef = useRef(null);
//   const imageRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const navigate = useNavigate();

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.timeline({
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
//       { opacity: 0.5 },
//       { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 }
//     );
//   }, [currentIndex]);

//   useEffect(() => {
//     if (imageRef.current) {
//       gsap.set(imageRef.current, { scale: 1 });

//       gsap.fromTo(
//         imageRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top center",
//             end: "bottom top",
//             scrub: 1,
//           },
//         }
//       );
//     }
//   }, [currentIndex]);

//   return (
//     <div
//       ref={sectionRef}
//       className="min-h-screen w-full bg-[#e4e1d8b2] px-4 sm:px-8 md:px-16 py-10 flex flex-col justify-center"
//     >
//       {/* Mobile Badge */}
//       <div className="block md:hidden mb-4 text-center">
//         <button className="px-4 py-2 border border-[#2d4122] rounded-3xl text-[#2d4122] text-sm sm:text-base">
//           {partnerships[currentIndex].button}
//         </button>
//       </div>

//       <div
//         className={`w-full flex flex-col-reverse ${currentIndex === 3 ? "md:flex-row-reverse" : "md:flex-row"
//           } items-center justify-between gap-8 md:gap-16`}
//       >
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 text-[#2d4122]">
//           {/* Desktop Badge */}
//           <div className="hidden md:block mb-4">
//             <button className="px-4 py-2 border border-[#2d4122] rounded-3xl text-[#2d4122] text-sm md:text-base">
//               {partnerships[currentIndex].button}
//             </button>
//           </div>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//             {`0${currentIndex + 1}-`} {partnerships[currentIndex].model}
//           </h1>

//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
//             {partnerships[currentIndex].type}
//           </h3>

//           <h3
//             ref={titleRef}
//             className="text-base sm:text-lg md:text-xl mt-5"
//           >
//             {partnerships[currentIndex].title}
//           </h3>

//           {/* Partnership Table */}
//           <div className="overflow-x-auto mt-4 w-full md:w-[80%]">
//             <table
//               ref={tableRef}
//               className="min-w-full border border-[#2d4122] text-[#2d4122] text-sm sm:text-base "
//             >
//               <thead>
//                 <tr className="bg-[#2d4122] text-white">
//                   <th className="border border-[#2d4122] p-3"></th>
//                   <th className="border border-[#2d4122] p-3">KisanMel</th>
//                   <th className="border border-[#2d4122] p-3">Farmer</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border border-[#2d4122] p-3 font-semibold">Investment</td>
//                   <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].investment[0]}</td>
//                   <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].investment[1]}</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-[#2d4122] p-3 font-semibold">Management</td>
//                   <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].management[0]}</td>
//                   <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].management[1]}</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-[#2d4122] p-3 font-semibold">Returns</td>
//                   <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].returns[0]}</td>
//                   <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].returns[1]}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* CTA Button */}
//           <button
//             onClick={() => {
//               window.scrollTo(0, 0);
//               navigate("/franchise");
//             }}
//             className="group mt-6 md:mt-10 px-6 py-3 border-b-2 border-[#2d4122] text-[#2d4122] hover:bg-[#2d4122] hover:text-white transition-all duration-300 flex items-center gap-2 w-fit"
//           >
//             <span className="font-semibold">learn more {partnerships[currentIndex].title}</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Right Section - Image */}
//         <div
//           className={`w-full md:w-1/2 flex justify-center items-center ${currentIndex === 3 ? "md:justify-start" : "md:justify-end"
//             }`}
//         >
//           <div
//             className={`rounded-3xl overflow-hidden transition-all duration-500 ${currentIndex === 3
//                 ? "w-full h-40 sm:w-[80%] sm:h-[80vh]"
//                 : "w-full sm:w-[80%] h-60 sm:h-[70vh]"
//               }`}
//           >
//             <img
//               ref={imageRef}
//               src={partnerships[currentIndex].image}
//               alt="Farm"
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Partnership;



import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../Lang"; // ✅ Your LanguageContext


gsap.registerPlugin(ScrollTrigger);

const partnerships = [
  {
    investment: ["0%", "100%"],
    management: ["100%", "0%"],
    returns: ["25%", "75%"],
    image: "/p4.png"
  },
  {
    investment: ["10%", "90%"],
    management: ["80%", "20%"],
    returns: ["40%", "60%"],
    image: "/p2.png"
  },
  {
    investment: ["50%", "50%"],
    management: ["50%", "50%"],
    returns: ["50%", "50%"],
    image: "/p6.png"
  },
  {
    investment: ["50%", "50%"],
    management: ["50%", "50%"],
    returns: ["50%", "50%"],
    image: "/p5.png"
  }
];

function Partnership() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tableRef = useRef(null);
  const imageRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textData, setTextData] = useState<any[]>([]);
  const { lang } = useLanguage(); // ✅ Moved inside component

  

  const navigate = useNavigate();

  // Load multilingual JSON
  useEffect(() => {
    fetch("/Partnership.json")
      .then((res) => res.json())
      .then((data) => setTextData(data.partnerships));
  }, []);

  // ScrollTrigger horizontal scroll setup
  useEffect(() => {
    if (!textData.length) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const index = Math.floor(self.progress * partnerships.length);
            setCurrentIndex(index < partnerships.length ? index : partnerships.length - 1);
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [textData.length]);

  // Animate content change
  useEffect(() => {
    if (!textData.length) return;

    gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    gsap.fromTo(tableRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 });
    gsap.fromTo(imageRef.current, { opacity: 0.5 }, { opacity: 1, duration: 0.5, delay: 0.2 });
  }, [currentIndex, lang]);

  // Image zoom scroll animation
  useEffect(() => {
    if (!imageRef.current) return;

    gsap.set(imageRef.current, { scale: 1 });
    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1
        }
      }
    );
  }, [currentIndex]);

  const content = textData[currentIndex];
  if (!content) return <div className="min-h-screen bg-[#e4e1d8b2]"></div>;

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-full bg-[#e4e1d8b2] px-4 sm:px-8 md:px-16 py-10 flex flex-col justify-center"
    >
    

      {/* Mobile Badge */}
      <div className="block md:hidden mb-4 text-center">
        <button className="px-4 py-2 border border-[#2d4122] rounded-3xl text-[#2d4122] text-sm sm:text-base">
          {content.button[lang]}
        </button>
      </div>

      <div
        className={`w-full flex flex-col-reverse ${currentIndex === 3 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center justify-between gap-8 md:gap-16`}
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-[#2d4122]">
          <div className="hidden md:block mb-4">
            <button className="px-4 py-2 border border-[#2d4122] rounded-3xl text-[#2d4122] text-sm md:text-base">
              {content.button[lang]}
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {`0${currentIndex + 1}-`} {content.model[lang]}
          </h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            {content.type[lang]}
          </h3>

          <h3 ref={titleRef} className="text-base sm:text-lg md:text-xl mt-5">
            {content.title[lang]}
          </h3>

          {/* Partnership Table */}
          <div className="overflow-x-auto mt-4 w-full md:w-[80%]">
            <table
              ref={tableRef}
              className="min-w-full border border-[#2d4122] text-[#2d4122] text-sm sm:text-base"
            >
              <thead>
                <tr className="bg-[#2d4122] text-white">
                  <th className="border border-[#2d4122] p-3"></th>
                  <th className="border border-[#2d4122] p-3">KisanMel</th>
                  <th className="border border-[#2d4122] p-3">
                    {lang === "en" ? "Farmer" : "किसान"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#2d4122] p-3 font-semibold">
                    {lang === "en" ? "Investment" : "निवेश"}
                  </td>
                  <td className="border border-[#2d4122] p-3 text-center">
                    {partnerships[currentIndex].investment[0]}
                  </td>
                  <td className="border border-[#2d4122] p-3 text-center">
                    {partnerships[currentIndex].investment[1]}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#2d4122] p-3 font-semibold">
                    {lang === "en" ? "Management" : "प्रबंधन"}
                  </td>
                  <td className="border border-[#2d4122] p-3 text-center">
                    {partnerships[currentIndex].management[0]}
                  </td>
                  <td className="border border-[#2d4122] p-3 text-center">
                    {partnerships[currentIndex].management[1]}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#2d4122] p-3 font-semibold">
                    {lang === "en" ? "Returns" : "लाभांश"}
                  </td>
                  <td className="border border-[#2d4122] p-3 text-center">
                    {partnerships[currentIndex].returns[0]}
                  </td>
                  <td className="border border-[#2d4122] p-3 text-center">
                    {partnerships[currentIndex].returns[1]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/franchise");
            }}
            className="group mt-6 md:mt-10 px-6 py-3 border-b-2 border-[#2d4122] text-[#2d4122] hover:bg-[#2d4122] hover:text-white transition-all duration-300 flex items-center gap-2 w-fit"
          >
            <span className="font-semibold">
              {lang === "en" ? "Learn more" : "और जानें"} — {content.title[lang]}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className={`w-full md:w-1/2 flex justify-center items-center ${currentIndex === 3 ? "md:justify-start" : "md:justify-end"}`}>
          <div className={`rounded-3xl overflow-hidden transition-all duration-500 ${currentIndex === 3 ? "w-full h-40 sm:w-[80%] sm:h-[80vh]" : "w-full sm:w-[80%] h-60 sm:h-[70vh]"}`}>
            <img
              ref={imageRef}
              src={partnerships[currentIndex].image}
              alt="Farm"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
