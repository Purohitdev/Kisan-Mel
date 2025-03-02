import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Service() {
  const services = [
    {
      title: "Free training & visits",
      description:"Inspiring farmers to upgrade their farm land based on our model. We provide training and free visit programs on a fixed date every month.",
    },
    {
      title: "Advanced Farming Techniques",
      description:"Inspiring farmers to upgrade their farm land based on our model. We provide training and free visit programs on a fixed date every month.",
    },
    {
      title: "Organic Farming Support",
      description:"Inspiring farmers to upgrade their farm land based on our model. We provide training and free visit programs on a fixed date every month.",
    },
  ];

  const serviceRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    if (!boxRefs.current.length) return;

    boxRefs.current.forEach((box) => {
      if (!box) return;
      gsap.to(box, {
        yPercent: -30,
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
    <div className="min-h-auto w-full bg-[#e4e1d8b2] text-[#2d4122] px-16 py-10 pb-32" ref={serviceRef}>
     <div className=" px-5 mb-[-20px]">
     <button className="px-6 py-3 border border-[#2d4122] rounded-full flex justify-center items-center w-fit text-[#2d4122] font-semibold shadow-md hover:bg-[#2d4122] hover:text-white transition-all">
        Our Service
      </button>
     </div>

      <h1 className="text-[2.5rem] font-extrabold mt-5 text-center">
        Services Kisanमेल Farm model offers
      </h1>
      <p className="text-[1.2rem] mt-3 text-center max-w-3xl mx-auto">
        Inspiring farmers to upgrade their farm land based on our model. We provide training and free visit programs on a fixed date every month.
      </p>

      <div className="w-full h-auto mt-10 flex gap-8 items-center">
        {/* Left Column */}
        <div className="w-full p-5 flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) boxRefs.current[index] = el;
              }}
              className="service-box backdrop-blur-lg bg-[#2d4122]/90 border border-white/50 h-fit flex items-center gap-6 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-white"
            >
              <div className="border rounded-full h-[80px] w-[80px] bg-[#e4e1d8] flex items-center justify-center text-lg font-bold text-[#2d4122]">
                {index + 1}
              </div>
              <div className="w-[70%]">
                <h2 className="text-[1.2rem] leading-snug font-semibold">{service.title}</h2>
                <p className="text-[0.9rem] mt-1 text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image with Parallax Effect */}
        <div className="w-full flex justify-center items-center">
          <img
            ref={imageRef}
            src="/farm2.jpg"
            alt="Farm Services"
            className="w-[90%]  object-cover rounded-xl shadow-lg border border-gray-300"
          />
        </div>

        {/* Right Column */}
        <div className="w-full p-5 flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) boxRefs.current[index] = el;
              }}
              className="service-box backdrop-blur-lg bg-[#2d4122]/90 border border-white/50 h-fit flex items-center gap-6 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-white"
            >
              <div className="border rounded-full h-[80px] w-[80px] bg-[#e4e1d8] flex items-center justify-center text-lg font-bold text-[#2d4122]">
                {index + 1}
              </div>
              <div className="w-[70%]">
                <h2 className="text-[1.2rem] leading-snug font-semibold">{service.title}</h2>
                <p className="text-[0.9rem] mt-1 text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
