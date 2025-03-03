import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const storiesData = [
  {
    name: "Ramkrishan Sharma",
    model: "Farmer #Model 1",
    land: "Farm land - 3 arc",
    location: "Village - Mundiagardh, Jaipur, Rajasthan",
    description: "Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis...",
    image: "/Est. 2012.png"
  },
  {
    name: "Suresh Kumar",
    model: "Farmer #Model 2",
    land: "Farm land - 5 arc",
    location: "Village - Udaipur, Rajasthan",
    description: "Lorem ipsum dolor sit amet consectetur. Nulla facilisi. Ut tristique mauris nec sagittis luctus...",
    image: "/farm2.jpg"
  },
  {
    name: "Anita Devi",
    model: "Farmer #Model 3",
    land: "Farm land - 4 arc",
    location: "Village - Jodhpur, Rajasthan",
    description: "Lorem ipsum dolor sit amet consectetur. Aenean tincidunt eros sed velit malesuada, non ultrices ligula pretium...",
    image: "/farm3.jpg"
  }
];

const Stories: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % storiesData.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (contentRef.current && imageRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % storiesData.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + storiesData.length) % storiesData.length);
  };

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="bg-[#e4e1d8b2] px-4 sm:px-16 py-6 pb-12 text-[#e4e1d8b2] w-full">
      <div 
        className="h-auto sm:h-[55vh] rounded-[2rem] bg-[#2d4122] p-6 sm:p-10 flex flex-col sm:flex-row justify-between relative overflow-hidden"
        onMouseEnter={stopTimer} 
        onMouseLeave={startTimer}
      >
        <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
          <button className="px-4 py-2 border rounded-3xl w-fit mb-4 text-sm sm:text-base">Our Stories</button>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-bold text-white">Success Stories</h1>
          <div ref={contentRef} className="text-white">
            <h2 className="text-base sm:text-lg font-semibold">{storiesData[index].name}</h2>
            <p className="text-sm">{storiesData[index].model}</p>
            <p className="text-sm">{storiesData[index].land}</p>
            <p className="text-sm">{storiesData[index].location}</p>
            <p className="text-sm mt-4">“{storiesData[index].description}”</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex items-center">
          <img
            ref={imageRef}
            src={storiesData[index].image}
            alt={storiesData[index].name}
            className="h-[60vw] sm:h-[80%] w-full object-cover rounded-[2rem]"
          />
        </div>
        
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 h-[40px] sm:h-[50px] w-[40px] sm:w-[50px] bg-[#ffffff9d] text-black p-2 rounded-full shadow-md">❮</button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 h-[40px] sm:h-[50px] w-[40px] sm:w-[50px] bg-[#ffffff9d] text-black p-2 rounded-full shadow-md">❯</button>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {storiesData.map((_, i) => (
            <span
              key={i}
              className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full transition-all duration-300 ${i === index ? 'bg-white' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
