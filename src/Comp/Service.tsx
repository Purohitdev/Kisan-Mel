import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Service() {
  const services = [
    {
      title: "Free training & visits",
      description:" We provide training and free visit programs on a fixed date every month.",
    },
    {
      title: "Advanced  Techniques",
      description:"I We provide training and free visit programs on a fixed date every month.",
    },
    {
      title: "Organic  Support",
      description:" We provide training and free visit programs on a fixed date every month.",
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
        yPercent: -50,
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
    <div className="min-h-[100vh] w-full bg-[#e4e1d8b2] text-[#2d4122] px-16 py-10 pb-32 " ref={serviceRef} >
     {/* <div className=" px-5 mb-[-20px] border">
     <button className="px-6 py-3 border border-[#2d4122] rounded-full flex justify-center items-center w-fit text-[#2d4122] font-semibold shadow-md hover:bg-[#2d4122] hover:text-white transition-all">
        Our Service
      </button>
     </div> */}

      <h1 className="text-[2.5rem] font-extrabold mt-5 text-center ">
        Services Kisanमेल Farm model offers
      </h1>
      <p className="text-[1rem] mt-3 text-center max-w-3xl mx-auto ">
        Inspiring farmers to upgrade their farm land based on our model. We provide training and free visit programs on a fixed date every month.
      </p>

      <div className="w-full h-auto mt-10 flex gap-8 items-center ">
        {/* Left Column */}
        <div className="w-full p-5 flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) boxRefs.current[index] = el;
              }}
              className="service-box text-[#2d4122] border  flex items-center gap-6 px-2  py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow  h-fit"
            >
              <div className="border rounded-full h-[60px] w-[60px] bg-[#e4e1d8] flex items-center justify-center text-lg font-bold text-[#2d4122]">
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
        <div className="w-full flex justify-center items-center mt-[50px]">
          <img
            ref={imageRef}
            src="/farm2.jpg"
            alt="Farm Services"
            className="w-[80%] h-[40%]  object-cover rounded-xl shadow-lg border border-gray-300 mt-[-50px]"
          />
        </div>

        {/* Right Column */}
        <div className="w-full   p-5 flex flex-col gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) boxRefs.current[index] = el;
              }}
              className="service-box text-[#2d4122] border  flex items-center gap-6 px-2  py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow  h-fit"
            >
              <div className="border rounded-full h-[60px] w-[60px] bg-[#e4e1d8] flex items-center justify-center text-lg font-bold text-[#2d4122]">
                {index + 1}
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
