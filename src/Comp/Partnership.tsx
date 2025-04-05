import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partnerships = [
  {
    title: "25% - 75% KisanMel Partnership",
    investment: ["0%", "100%"],
    management: ["100%", "0%"],
    returns: ["25%", "75%"],
    image: "https://i.pinimg.com/736x/a1/cd/ed/a1cded971e3f7e2416bef74a07a501f2.jpg",
  },
  {
    title: "40% - 60% KisanMel Partnership",
    investment: ["10%", "90%"],
    management: ["80%", "20%"],
    returns: ["40%", "60%"],
    image: "https://i.pinimg.com/736x/05/ae/15/05ae154c9e5444b530a8c480796242e5.jpg",
  },
  {
    title: "50% - 50% KisanMel Partnership",
    investment: ["50%", "50%"],
    management: ["50%", "50%"],
    returns: ["50%", "50%"],
    image: "https://i.pinimg.com/736x/54/88/fd/5488fd7f44773e347e716771c577530d.jpg",
  },
];

function Partnership() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tableRef = useRef(null);
  const imageRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            let index = Math.floor(self.progress * partnerships.length);
            setCurrentIndex(index < partnerships.length ? index : partnerships.length - 1);
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      tableRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0.5 },
      { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 }
    );
  }, [currentIndex]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.set(imageRef.current, { scale: 1 });

      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }
  }, [currentIndex]);

  return (
    <div ref={sectionRef} className="min-h-screen w-full bg-[#e4e1d8b2] px-6 sm:px-16 py-6">
      <div className="block md:hidden mb-4">
        <button className="px-4 py-2 border border-[#2d4122] rounded-3xl text-[#2d4122]">
          Our Partnership
        </button>
      </div>
      <div className="min-h-[90vh] w-full flex flex-col-reverse md:flex-row justify-center items-center p-5">
        {/* Left Section */}
        <div className="w-full text-[#2d4122]  md:text-left">
          <div className="hidden md:block mb-4">
            <button className="px-4 py-2 border border-[#2d4122] rounded-3xl text-[#2d4122]">
              Our Partnership
            </button>
          </div>
          <h1 className="text-3xl sm:text-[4rem] leading-none font-bold">Big Farmer Farm-Partnership Model</h1>

          {/* Dynamic Title */}
          <h3 ref={titleRef} className="text-lg sm:text-[1.5rem] mt-5">{partnerships[currentIndex].title}</h3>

          {/* Dynamic Table */}
          <div className="overflow-x-auto">
            <table ref={tableRef} className="w-full sm:w-[80%] border border-[#2d4122] text-[#2d4122] text-sm sm:text-lg md:mt-10 sm:mt-5">
              <thead>
                <tr className="bg-[#2d4122] text-white">
                  <th className="border border-[#2d4122] p-3"></th>
                  <th className="border border-[#2d4122] p-3">KisanMel</th>
                  <th className="border border-[#2d4122] p-3">Farmer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#2d4122] p-3 font-semibold">Investment</td>
                  <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].investment[0]}</td>
                  <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].investment[1]}</td>
                </tr>
                <tr>
                  <td className="border border-[#2d4122] p-3 font-semibold">Management</td>
                  <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].management[0]}</td>
                  <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].management[1]}</td>
                </tr>
                <tr>
                  <td className="border border-[#2d4122] p-3 font-semibold">Returns</td>
                  <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].returns[0]}</td>
                  <td className="border border-[#2d4122] p-3 text-center">{partnerships[currentIndex].returns[1]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="md:mt-10 px-6 py-4 border-b-2 border-[#2d4122] text-[#2d4122] w-fit">
          View {partnerships[currentIndex].title}
          </button>
        </div>

        {/* Right Section with Changing Image */}
        <div className="w-full flex justify-center items-center mb-5 md:mb-0  md:justify-end">
        <div className="w-full sm:w-[80%] h-60 sm:h-[70vh] rounded-3xl overflow-hidden">
            <img
              ref={imageRef}
              src={partnerships[currentIndex].image}
              alt="Farm"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
