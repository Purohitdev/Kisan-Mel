

// import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLanguage } from "../Lang"; // ✅ Global Language Context

// gsap.registerPlugin(ScrollTrigger);

// const workBoxes = [
//   { img: "/step1.png" },
//   { img: "/step2.png" },
//   { img: "/step3.png" },
//   { img: "/step4.png" },
//   { img: "/step5.png" },
//   { img: "/step6.png" },
// ];

// const Work: React.FC = () => {
//   const { lang } = useLanguage(); // ✅ Correctly placed inside component

//   const [textData, setTextData] = useState<{ heading: any; paragraph: any }>({
//     heading: { en: "", hi: "" },
//     paragraph: { en: "", hi: "" },
//   });

//   const containerRef = useRef(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const boxRefs = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     fetch("/workData.json")
//       .then((res) => res.json())
//       .then((data) => setTextData(data));
//   }, []);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const wrapper = wrapperRef.current;
//       if (!wrapper) return;

//       const totalScroll = wrapper.scrollWidth - window.innerWidth;

//       ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top top",
//         end: `+=${totalScroll}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//         animation: gsap.to(wrapper, {
//           x: -totalScroll,
//           ease: "power1.out",
//         }),
//         onUpdate: () => {
//           const center = window.innerWidth / 2;

//           requestAnimationFrame(() => {
//             boxRefs.current.forEach((box) => {
//               const rect = box.getBoundingClientRect();
//               const boxCenter = rect.left + rect.width / 2;
//               const distance = Math.abs(center - boxCenter);
//               const isFocused = distance < rect.width / 2;

//               box.classList.toggle("blur-none", isFocused);
//               box.classList.toggle("opacity-100", isFocused);
//               box.classList.toggle("scale-100", isFocused);

//               box.classList.toggle("blur-sm", !isFocused);
//               box.classList.toggle("opacity-50", !isFocused);
//               box.classList.toggle("scale-95", !isFocused);
//             });
//           });
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-[100vh] bg-[#2d4122] text-[#DAD7CD] px-4 md:px-16 py-6 relative overflow-hidden"
//     >
//       {/* Header */}
//       <div className="h-auto md:h-[20vh] px-6 py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
//         <div className="flex flex-col gap-2">
//           <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] leading-none font-bold">
//             {textData.heading[lang]}
//           </h1>
//         </div>
//         <p className="text-base sm:text-lg md:text-base md:w-[30%]">
//           {textData.paragraph[lang]}
//         </p>
//       </div>

//       {/* Scrollable Boxes */}
//       <div
//         ref={wrapperRef}
//         className="md:h-[70vh] flex items-center gap-4 md:gap-8 relative w-max mt-[30px] px-[40vw] md:px-[50vw]"
//       >
//         {workBoxes.map((box, i) => (
//           <div
//             key={i}
//             ref={(el) => {
//               if (el) boxRefs.current[i] = el;
//             }}
//             className="border bg-cover bg-no-repeat bg-top h-[60vh] md:h-[70vh] w-[80vw] sm:w-[60vw] md:w-[50vh] rounded-3xl transition-all duration-500 scale-95 opacity-50 blur-sm"
//             style={{ backgroundImage: `url(${box.img})` }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Work;


import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import { useLanguage } from "../Lang";

gsap.registerPlugin(ScrollTrigger, Draggable);

const workBoxes = [
  { img: "/step1.png" },
  { img: "/step2.png" },
  { img: "/step3.png" },
  { img: "/step4.png" },
  { img: "/step5.png" },
  { img: "/step6.png" },
];

const Work: React.FC = () => {
  const { lang } = useLanguage();

  const [textData, setTextData] = useState<{ heading: any; paragraph: any }>({
    heading: { en: "", hi: "" },
    paragraph: { en: "", hi: "" },
  });

  const containerRef = useRef(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    fetch("/workData.json")
      .then((res) => res.json())
      .then((data) => setTextData(data));
  }, []);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const totalScroll = wrapper.scrollWidth - window.innerWidth;

      // Function to highlight focused box
      const updateFocus = () => {
        const center = window.innerWidth / 2;

        boxRefs.current.forEach((box) => {
          const rect = box.getBoundingClientRect();
          const boxCenter = rect.left + rect.width / 2;
          const distance = Math.abs(center - boxCenter);
          const isFocused = distance < rect.width / 2;

          box.classList.toggle("blur-none", isFocused);
          box.classList.toggle("opacity-100", isFocused);
          box.classList.toggle("scale-100", isFocused);

          box.classList.toggle("blur-sm", !isFocused);
          box.classList.toggle("opacity-50", !isFocused);
          box.classList.toggle("scale-95", !isFocused);
        });
      };

      if (isMobile) {
        // ✅ Enable drag on mobile
        Draggable.create(wrapper, {
          type: "x",
          bounds: { minX: -totalScroll, maxX: 0 },
          inertia: true,
          onDrag: updateFocus,
          onThrowUpdate: updateFocus,
        });
      } else {
        // ✅ Enable scroll + ScrollTrigger on desktop
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          animation: gsap.to(wrapper, {
            x: -totalScroll,
            ease: "power1.out",
            onUpdate: updateFocus,
          }),
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[100vh] bg-[#2d4122] text-[#DAD7CD] px-4 md:px-16 py-6 relative overflow-hidden"
    >
      {/* Header */}
      <div className="h-auto md:h-[20vh] px-6 py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] leading-none font-bold">
            {textData.heading[lang]}
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-base md:w-[30%]">
          {textData.paragraph[lang]}
        </p>
      </div>

      {/* Scrollable / Draggable Boxes */}
      <div
        ref={wrapperRef}
        className="md:h-[70vh] flex items-center gap-4 md:gap-8 relative w-max mt-[30px] px-[40vw] md:px-[50vw] cursor-grab active:cursor-grabbing"
      >
        {workBoxes.map((box, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) boxRefs.current[i] = el;
            }}
            className="border bg-cover bg-no-repeat bg-top h-[60vh] md:h-[70vh] w-[80vw] sm:w-[60vw] md:w-[50vh] rounded-3xl transition-all duration-500 scale-95 opacity-50 blur-sm"
            style={{ backgroundImage: `url(${box.img})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
