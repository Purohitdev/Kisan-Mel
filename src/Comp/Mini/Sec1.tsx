import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const points = [
  {
    title: "1. Better Crop Selection",
    desc: "Get expert guidance on high-yield crops that thrive in your climate. This ensures higher profits and food security for all.",
    style: "top-[-13%] left-1/2 -translate-x-1/2",
  },
  {
    title: "2. Tech. Integration",
    desc: "Empowering farmers with mobile apps, IoT sensors, and automation like drip irrigation for smart farming.",
    style: "top-[10%] left-[-24%]",
  },
  {
    title: "3. Free Training & Visits",
    desc: "Practical field visits and workshops led by professionals to teach modern and sustainable techniques.",
    style: "top-[10%] right-[-24%]",
  },
  {
    title: "4. Farmless Partnership",
    desc: "Innovative leasing model for those who wish to farm but don’t own land, increasing rural employment.",
    style: "top-1/2 left-[-30%] -translate-y-1/2",
  },
  {
    title: "5. Loans to Replicate",
    desc: "Financial help to expand successful practices across more land, increasing impact and returns.",
    style: "top-1/2 right-[-30%] -translate-y-1/2",
  },
  {
    title: "6. Agri Inputs",
    desc: "Timely access to seeds, fertilizers, and eco-friendly alternatives for improved crop quality.",
    style: "bottom-[10%] left-[-24%]",
  },
  {
    title: "7. Market Support",
    desc: "Assistance in selling directly to buyers—no middlemen, better profits, and wider reach.",
    style: "bottom-[-12%] left-1/2 -translate-x-1/2",
  },
  {
    title: "8. Agri Inputs",
    desc: "Timely access to seeds, fertilizers, and eco-friendly alternatives for improved crop quality.",
    style: "bottom-[10%] right-[-24%]",
  },
];

export default function MiniModelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-in").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".point", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".point",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#EDEAE4] text-[#2D4122] px-4 md:px-16 py-20"
    >
      <section className="fade-in text-center max-w-6xl mx-auto ">
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-none ">
          What is the Mini Model?
        </h1>
        <p className="text-lg  text-[#2D4122]/80 max-w-2xl mx-auto ">
          A small step towards transforming rural agriculture.
        </p>

        {/* Circle with Points */}
        <div className="relative mx-auto w-[350px] md:w-[900px] h-[350px] md:h-[600px] mt-[20vh]">
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQF59KHYTNiceg/feedshare-shrink_1280/feedshare-shrink_1280/0/1727505839489?e=1747267200&v=beta&t=598YvT2i9-q0LpCBGN1L_3LLinF7CBxHNMyIOubNR9I"
            alt="Kisan Circle"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] object-cover mix-blend-color-dodge border rounded-3xl "
          />
          {points.map((point, i) => (
            <div
              key={i}
              className={`point absolute w-48 md:w-[30vw] text-center text-xs md:text-sm  p-4 md:p-5 rounded-xl shadow-xl border border-[#2D4122]/50 ${point.style}`}
            >
              <p className="font-semibold text-[#2D4122] text-sm md:text-base">
                {point.title}
              </p>
              <p className="text-[11px] md:text-sm text-[#2D4122]/80 mt-2 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
