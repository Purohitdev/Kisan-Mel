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
    img: "https://i.pinimg.com/736x/cb/da/eb/cbdaeb71524d8dad7e926fc57034320b.jpg" 
  },
  { 
    header: "Box 2", 
    content: "Providing quality seeds and fertilizers for better yield.", 
    img: "https://i.pinimg.com/736x/75/59/ac/7559ac2852b96e1a74a356bf9feb069d.jpg" 
  },
  { 
    header: "Box 3", 
    content: "Connecting farmers with buyers directly to maximize profits.", 
    img: "https://i.pinimg.com/736x/43/f0/6d/43f06d948811882d2650bbebd59c6395.jpg" 
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
        x: "-50%",
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
    <div ref={containerRef} className="min-h-[100vh] bg-[#2d4122] text-[#DAD7CD] px-4 md:px-16 py-6 relative overflow-hidden">
      {/* Heading Section */}
      <div className="h-auto md:h-[30vh] px-6 py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          {/* <button className="px-4 py-2 border rounded-3xl w-fit text-sm md:text-base">Our Work</button> */}
          <h1 className="text-[2.5rem] md:text-[3.5rem] leading-none font-bold">
            How We Are Helping Farmers
          </h1>
        </div>
        <p className="text-lg md:text-base md:w-[30%]">
        At KisanMel, we analyze your farm and climate to guide profitable crop choices and provide all essentials through our dedicated agri-showrooms.        </p>
      </div>

      {/* Scrollable Boxes */}
      <div ref={boxesRef} className="md:h-[50vh] flex items-center gap-4 md:gap-8 relative w-max mt-[30px] overflow-x-auto">
        {workBoxes.map((box, index) => (
          <div 
            key={index} 
            className="border bg-cover bg-center h-[50vh] md:h-full w-[80vw] md:w-[50vh] rounded-3xl flex flex-col justify-between p-4 md:p-6 text-[#DAD7CD] " 
            style={{ backgroundImage: `url(${box.img})` }}
          >
            <h2 className="text-lg md:text-xl font-bold w-fit px-3 py-2 backdrop-blur-xl border border-white/20 shadow-lg text-[#2d4122]">
              {box.header}
            </h2>
            <p className="w-fit px-3 py-2 backdrop-blur-xl border border-white/20 shadow-lg text-[#2d4122] text-sm md:text-base">
              {box.content}
            </p>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default Work;



// import React from 'react'

// function Work() {
//   return (
//     <div className="min-h-[100vh] bg-[#2d4122] text-[#DAD7CD] px-4 md:px-16 py-6 relative overflow-hidden">Work</div>
//   )
// }

// export default Work