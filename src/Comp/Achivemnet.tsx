"use client";
import { useEffect, useRef, useState } from "react";
import { GiFarmer, GiProfit } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../Lang";

gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
  GiFarmer: <GiFarmer />,
  GiProfit: <GiProfit />,
};

function Achievement() {
  const { lang } = useLanguage();
  const badgeRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const [data, setData] = useState<any>(null);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    fetch("/Achievement.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    if (!data) return;

    gsap.to(badgeRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });

    textRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);

  if (!data) return null;

  return (
    <div className="h-auto min-h-[60vh] bg-[#EDEAE4] flex items-center justify-center px-6 py-10 md:py-0">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[80%]">
          <img src="/Est. 2012.png" alt="Teamwork" className="w-full h-full object-cover rounded-xl" />
          <div
            ref={badgeRef}
            className="absolute top-5 right-5 md:top-7 md:right-[-60px] w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg"
          >
            <img
              src="/cir.jpeg"
              alt="Organic Badge"
              className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mix-blend-multiply"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-[#2D4122] flex flex-col justify-center pl-0 md:pl-12">
          <button className="px-6 py-3 mb-5 border border-[#2d4122] rounded-full flex justify-center items-center mx-auto md:mx-0 w-fit text-[#2d4122] font-semibold shadow-md hover:bg-[#2d4122] hover:text-white transition-all">
            {data.buttonText[lang]}
          </button>

          <h2 className="text-3xl md:text-5xl font-bold my-2 text-center md:text-left">
            {data.heading[lang]}
          </h2>

          <div className="mt-6 space-y-6 w-full md:w-3/4 mx-auto md:mx-0">
            {data.achievements.map((ach: any, i: number) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 text-center md:text-left"
              >
                <div className="bg-[#2D4122] text-[#EDEAE4] p-3 rounded-full h-[4rem] w-[4rem] flex justify-center items-center text-3xl">
                  {iconMap[ach.icon]}
                </div>
                <div >
                  <h4 ref={addToRefs} className="text-lg font-semibold">{ach.title[lang]}</h4>
                  <p ref={addToRefs} className="text-sm">{ach.description[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
