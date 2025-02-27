import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkBox {
  header: string;
  content: string;
}

const workBoxes: WorkBox[] = [
  { header: "Box 1", content: "Helping farmers with modern irrigation techniques." },
  { header: "Box 2", content: "Providing quality seeds and fertilizers for better yield." },
  { header: "Box 3", content: "Connecting farmers with buyers directly to maximize profits." },
  { header: "Box 4", content: "Offering expert guidance on organic farming." },
  { header: "Box 5", content: "Implementing AI-based analytics for crop prediction." },
  { header: "Box 6", content: "Training programs for sustainable agriculture." },
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
      <div className="h-[30vh] px-6 py-4 flex flex-col gap-3">
        <button className="px-4 py-2 border rounded-3xl w-fit">Our Work</button>
        <div className="h-[20vh] py-2 flex">
          <div className="w-[70%] h-full flex items-center">
            <h1 className="text-[4rem]">How We Are Helping Farmers</h1>
          </div>
          <div className="w-[30%] h-full flex justify-center items-center">
            <p>
              We are revolutionizing agriculture with technology, sustainable methods, and direct market access, ensuring farmers get the best resources and profits.
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Boxes */}
      <div ref={boxesRef} className="h-[50vh] flex items-center gap-5 relative w-max">
        {workBoxes.map((box, index) => (
          <div key={index} className="border h-full w-[50vh] rounded-3xl flex flex-col justify-between p-6 bg-[#DAD7CD] text-black">
            <h2 className="text-xl font-bold">{box.header}</h2>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
