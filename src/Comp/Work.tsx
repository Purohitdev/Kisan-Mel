// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface WorkBox {
//   header: string;
//   content: string;
//   img:string;
// }

// const workBoxes: WorkBox[] = [
//   { header: "Box 1", content: "Helping farmers with modern irrigation techniques.", img:"https://i.pinimg.com/736x/40/bc/3b/40bc3b3573c739f8d483d4300442b197.jpg" },
//   { header: "Box 2", content: "Providing quality seeds and fertilizers for better yield.", img:"https://i.pinimg.com/736x/f4/59/6c/f4596c304f358c153232dc6caab41c0a.jpg" },
//   { header: "Box 3", content: "Connecting farmers with buyers directly to maximize profits.", img:"https://i.pinimg.com/736x/44/58/18/445818ef3ce50578d86a8b5953d313e7.jpg" },
//   { header: "Box 4", content: "Offering expert guidance on organic farming.", img:"https://i.pinimg.com/736x/a8/a5/4c/a8a54c76dc4765c49e2f6c16ac214e58.jpg" },
//   { header: "Box 5", content: "Implementing AI-based analytics for crop prediction.", img:"https://i.pinimg.com/736x/40/bc/3b/40bc3b3573c739f8d483d4300442b197.jpg" },
//   { header: "Box 6", content: "Training programs for sustainable agriculture.", img:"https://i.pinimg.com/736x/f4/59/6c/f4596c304f358c153232dc6caab41c0a.jpg"},
// ];

// const Work: React.FC = () => {
//   const containerRef = useRef(null);
//   const boxesRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(boxesRef.current, {
//         x: "-50%", // Moves boxes left on scroll
//         ease: "power1.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=200%",
//           pin: true,
//           scrub: 1,
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="min-h-[100vh] bg-[#2d4122] text-[#DAD7CD] px-16 py-6 relative overflow-hidden">
//       <div className="h-[30vh] px-6 py-4 flex flex-col gap-3">
//         <button className="px-4 py-2 border rounded-3xl w-fit opacity-0">Our Work</button>
//         <div className="h-[20vh] py-2 flex">
//           <div className="w-[70%] h-full flex items-center">
//             {/* <h1 className="text-[4rem]">How We Are Helping Farmers</h1> */}
//             <h1  className="text-[3.5rem] leading-none  font-bold">How We Are Helping Farmers</h1>

           
//           </div>
//           <div className="w-[30%] h-full flex justify-center items-center">
//             <p>
//               We are revolutionizing agriculture with technology, sustainable methods, and direct market access, ensuring farmers get the best resources and profits.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Scrollable Boxes */}
//       <div ref={boxesRef} className="h-[50vh] flex items-center gap-8 relative w-max mt-[30px]">
//         {workBoxes.map((box, index) => (
//           <div key={index} className="border bg-cover h-full w-[50vh] rounded-3xl cover flex flex-col justify-between p-6   text-[#DAD7CD] bg-[url(`${box.img})`] "  >
//             {/* <h2 className="text-xl font-bold w-fit px-2 ">{box.header}</h2> */}
//             <h2 className="text-xl font-bold w-fit px-4 py-2  backdrop-blur-xl border border-white/20 shadow-lg text-[#2d4122]">
//               {box.header}
//             </h2>
//             <p className="w-fit px-4 py-2  backdrop-blur-xl border border-white/20 shadow-lg text-[#2d4122]">{box.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Work;


import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkBox {
  header: string;
  content: string;
  img: string;
}

const workBoxes: WorkBox[] = [
  { 
    header: "Box 1", 
    content: "Helping farmers with modern irrigation techniques.", 
    img: "https://i.pinimg.com/736x/54/05/6f/54056f7e04d19b9549b163b78f2863fe.jpg" 
  },
  { 
    header: "Box 2", 
    content: "Providing quality seeds and fertilizers for better yield.", 
    img: "https://i.pinimg.com/736x/4c/96/39/4c96393a0238d3b000df0793173af35b.jpg" 
  },
  { 
    header: "Box 3", 
    content: "Connecting farmers with buyers directly to maximize profits.", 
    img: "https://i.pinimg.com/736x/f2/ed/5e/f2ed5e8d7ca9515e0f9a21adfec40a2d.jpg" 
  },
  { 
    header: "Box 4", 
    content: "Offering expert guidance on organic farming.", 
    img: "https://i.pinimg.com/736x/68/b2/d4/68b2d48f9ba3ae3edf231e0f87ab4978.jpg" 
  },
  { 
    header: "Box 5", 
    content: "Implementing AI-based analytics for crop prediction.", 
    img: "https://i.pinimg.com/736x/c5/d2/3c/c5d23c3ca40bd73ccbc4fc6e93175f30.jpg" 
  },
  { 
    header: "Box 6", 
    content: "Training programs for sustainable agriculture.", 
    img: "https://i.pinimg.com/736x/a9/cd/45/a9cd4541e9a8da3b7d9c1e9236f60989.jpg" 
  },
];

const Work: React.FC = () => {
  const containerRef = useRef(null);
  const boxesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(boxesRef.current, {
        x: "-50%", // Moves boxes left on scroll
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-[100vh] bg-[#2d4122] text-[#DAD7CD] px-16 py-6 relative overflow-hidden">
      {/* Heading Section */}
      <div className="h-[30vh] px-6 py-4 flex flex-col gap-3">
        <button className="px-4 py-2 border rounded-3xl w-fit opacity-0">Our Work</button>
        <div className="h-[20vh] py-2 flex">
          <div className="w-[70%] h-full flex items-center">
            <h1 className="text-[3.5rem] leading-none font-bold">
              How We Are Helping Farmers
            </h1>
          </div>
          <div className="w-[30%] h-full flex justify-center items-center">
            <p>
              We are revolutionizing agriculture with technology, sustainable methods, and direct market access, ensuring farmers get the best resources and profits.
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Boxes */}
      <div ref={boxesRef} className="h-[50vh] flex items-center gap-8 relative w-max mt-[30px]">
        {workBoxes.map((box, index) => (
          <div 
            key={index} 
            className="border bg-cover bg-center h-full w-[50vh] rounded-3xl flex flex-col justify-between p-6 text-[#DAD7CD]" 
            style={{ backgroundImage: `url(${box.img})` }}
          >
            <h2 className="text-xl font-bold w-fit px-4 py-2 backdrop-blur-xl border border-white/20 shadow-lg text-[#2d4122]">
              {box.header}
            </h2>
            <p className="w-fit px-4 py-2 backdrop-blur-xl border border-white/20 shadow-lg text-[#2d4122]">
              {box.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
