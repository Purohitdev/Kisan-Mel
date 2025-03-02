import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Nav from "../Nav";
import { FaArrowDown } from "react-icons/fa";
import agri from "/hero.jpg";

const MyComponent: React.FC = () => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const rootsRef = useRef(null);
  const slideInfoRef = useRef(null);
  const buttonRef = useRef(null);
  const loremRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(rootsRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from([slideInfoRef.current, buttonRef.current], {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.7,
        stagger: 0.2,
      });

      gsap.from(loremRef.current, {
        y: 50, // Moves from bottom
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full text-white px-16 py-6 relative"
      style={{
        backgroundImage: `url(${agri})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-10 bg-[#000000a7]"></div>

      {/* Navbar */}
      <div ref={navRef} className="relative z-10">
        <Nav />
      </div>

      {/* Content */}
      <div className="h-[10vh] flex justify-end items-end relative z-10">
        <p ref={loremRef} className="w-1/3">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor ut eum, veniam quasi a porro quibusdam sit, officia ratione commodi voluptatem iure alias fuga, eveniet eligendi ab quae harum! */}
        </p>
      </div>

      <div className="h-[50vh] flex justify-center items-center relative z-10 bg-cover">
        {/* <h1 className="text-[15rem] leading-none">Kisan-मेल</h1> */}
        <img src="/logo2.svg" alt="" />
      </div>

      <div className="h-[28vh] flex flex-col relative z-10">
        <div ref={rootsRef} className="border-b-2 border-white h-[50%] flex items-center">
          {/* <h2 className="text-[1.5rem] italic"> sahi ugao !! sahi kamao !!</h2> */}
        </div>
        <div className="h-[50%] flex flex-col items-center pt-4 capitalize justify-center gap-2">
          <p ref={slideInfoRef}>lets grow toghther</p>
          <button ref={buttonRef} className="bg-white px-3 py-5 rounded-3xl text-black text-xs">
            <FaArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
