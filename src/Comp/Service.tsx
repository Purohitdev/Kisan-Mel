import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Service() {
  const services = [
    {
      "title": "Farm Research",
      "description": "We analyze your farm’s soil and climate to suggest crops that bring maximum growth and profit."
    },
    {
      "title": "Smart Crop Planning",
      "description": "Based on farm conditions and market demand, we guide you to grow the most profitable and suitable crops."
    },
    {
      "title": "Agri Showrooms",
      "description": "Get seeds, tools, fertilizers, and more at one place — our agri-showrooms cater to all your farming needs."
    },
    {
      "title": "Full Support",
      "description": "From testing soil to post-harvest advice, we support you at every step of your farming journey."
    },
    {
      "title": "Profit Ecosystem",
      "description": "Our model boosts profits by combining smart crop choices with easy access to essential farming resources."
    },
    {
      "title": "Farmer Empowerment",
      "description": "We modernize traditional farming by equipping farmers with expert guidance, quality tools, and market-oriented strategies."
    }
  
  ];

  const serviceRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="min-h-fit w-full bg-[#e4e1d8b2] text-[#2d4122] px-5 md:px-16 py-10 pb-32" ref={serviceRef}>
      <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold mt-5 text-center leading-none">
        Services Kisanमेल Farm model offers
      </h1>
      <p className="text-[1rem] mt-3 text-center max-w-3xl mx-auto">
        Inspiring farmers to upgrade their farm land based on our model. We provide training and free visit programs on a fixed date every month.
      </p>

      <div className="w-full h-auto mt-10 flex flex-wrap md:flex-nowrap gap-8 items-center justify-center">
        {/* Left Column */}
        <div className="w-full md:w-1/3 p-5 flex flex-col gap-8 justify-center mt-[60px] md:mt-[0px]">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className={`service-box text-[#2d4122] w-full md:w-[90%] flex items-center gap-6 px-2 py-3 h-fit ${
                index % 2 === 1 ? "md:ml-auto" : ""
              }`}
            >
              <div className="border rounded-full h-[50px] w-[50px] md:h-[60px] md:w-[60px] bg-[#e4e1d8] flex items-center justify-center text-lg font-bold text-[#2d4122]">
                {index + 1}
              </div>
              <div className="w-[70%]">
                <h2 className="text-[1rem] leading-snug font-semibold">{service.title}</h2>
                <p className="text-[0.8rem] mt-1 text-black">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image with Parallax Effect */}
        <div className="w-full md:w-1/3 flex justify-center items-center order-first md:order-none">
          <img
            ref={imageRef}
            src="/farm2.jpg"
            alt="Farm Services"
            className="w-[90%] max-w-[300px] md:max-w-none object-cover rounded-xl shadow-lg border border-gray-300 mt-[-30px] md:mt-[-50px]"
          />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 p-5 flex flex-col gap-8 justify-center">
          {services.slice(3, 6).map((service, index) => (
            <div
              key={index + 3}
              className={`service-box text-[#2d4122] w-full md:w-[90%] flex items-center gap-6 px-2 py-3 h-fit ${
                index % 2 === 0 ? "md:ml-auto" : ""
              }`}
            >
              <div className="border rounded-full h-[50px] w-[50px] md:h-[60px] md:w-[60px] bg-[#e4e1d8] flex items-center justify-center text-lg font-bold text-[#2d4122]">
                {index + 4}
              </div>
              <div className="w-[70%]">
                <h2 className="text-[1rem] leading-snug font-semibold">{service.title}</h2>
                <p className="text-[0.8rem] mt-1 text-black">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
