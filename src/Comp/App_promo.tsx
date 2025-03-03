"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App_promo: React.FC = () => {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const whiteBoxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iotImgRef = useRef<HTMLDivElement | null>(null);
  const iotWhiteBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    gsap.to(imgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    if (!whiteBoxRefs.current.length) return;

    whiteBoxRefs.current.forEach((box) => {
      if (!box) return;
      gsap.to(box, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: box,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="bg-[#000] text-white px-4 md:px-16 py-12 min-h-fit mx-auto rounded-2xl">
      {/* Top Section */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-y-10 md:gap-16">
        {/* Mobile App Preview */}
        <div ref={imgRef} className="w-full md:w-1/3 flex justify-center">
          <img
            src="/farm2.jpg"
            alt="KisanMel App Preview"
            className="rounded-2xl shadow-lg w-[90%] max-w-[500px] h-auto"
          />
        </div>

        {/* App Features */}
        <div ref={(el) => { if (el) whiteBoxRefs.current[0] = el; }} className="w-full md:w-2/3">
        <button className="px-4 py-2 border rounded-3xl w-fit">Our Technology</button>
          <h1 className="text-2xl md:text-5xl font-bold max-w-lg mt-4">Download the app now</h1>
          <ul className="text-gray-300 max-w-lg text-lg md:text-xl mt-5 leading-normal">
            <li>Crop Selection</li>
            <li>Management</li>
            <li>Market Connect</li>
            <li>Farmer Partnership</li>
          </ul>
          
          {/* Two-Column List Section using Flex */}
          <h2 className="text-lg md:text-xl font-bold mt-6 text-[#7acf4b]">KisanMel Mobile Platform provides:</h2>
          <div className="flex flex-wrap gap-5 mt-2">
            <div className="w-full md:w-fit  p-5  px-8 py-4">
              <ul className="list-disc list-inside text-[#D9D7CD] mt-3">
                <li>Crop selection suggestions</li>
                <li>Farm management solutions</li>
                <li>Expert farm advisories</li>
                <li>Partnership model for big</li>
                <li>Market connect</li>
              </ul>
            </div>
            <div className="w-full md:w-fit  p-5  px-8 py-4">
              <ul className="list-disc list-inside text-[#D9D7CD] mt-3">
                <li>Weather-based crop</li>
                <li>Real-time market price</li>
                <li>Automated farm activity</li>
                <li>Personalized farming</li>
                <li>Online expert</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* IoT Solution Section */}
      <div className="mt-16 flex flex-wrap md:flex-nowrap items-center gap-y-4 md:gap-10">
        {/* IoT Features */}
        <div ref={(el) => { iotWhiteBoxRef.current = el; }} className="w-full md:w-2/3">
        <button className="px-4 py-2 rounded-3xl w-fit border">Automate Your Farm</button>
          <h2 className="text-2xl md:text-3xl font-bold mt-4">Our IoT Solution</h2>
          <div className="flex flex-wrap gap-5 mt-6">
            {/* Drip Line Irrigation Automation */}
            <div className="w-full md:w-fit py-4">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#7acf4b]">Drip Line Irrigation Automation</h3>
              <div className=" text-[#D9D7CD] p-5 ">
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Automatic irrigation system</li>
                  <li>Automatic Fertilizer supply</li>
                  <li>Nutricent management of farm</li>
                  <li>Remote water level monitoring</li>
                </ul>
              </div>
            </div>

            {/* Farm Security Management */}
            <div className="w-full md:w-fit py-4">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#7acf4b]">Farm Security Management</h3>
              <div className=" text-[#D9D7CD] p-5 ">
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Monitor your farm remotely</li>
                  <li>Daily live monitoring</li>
                  <li>Animal protection features</li>
                  <li>Alarm and night light activation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* IoT Image */}
        <div ref={iotImgRef} className="flex justify-center w-full md:w-1/3">
          <img src="/farm3.jpg" alt="IoT Farm System" className="rounded-lg shadow-lg w-[90%] max-w-[600px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default App_promo;
