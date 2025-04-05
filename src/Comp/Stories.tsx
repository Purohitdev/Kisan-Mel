import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const storiesData = [
  {
    "name": "Sita Ram Verma",
    "model": "Fast Crop Model",
    "land": "4 acres",
    "location": "Hardoi, Uttar Pradesh",
    "description": "Sita Ram started growing okra and leafy vegetables using drip irrigation. He earned profit in just 50 days and inspired 8 nearby farmers to try the same model.",
    "image": "https://i.pinimg.com/736x/ab/d3/9c/abd39c905de130d458b568d5dce93dd5.jpg"
  },
  {
    "name": "Kamla Bai",
    "model": "Medium-Term Crop Model",
    "land": "6 acres",
    "location": "Betul, Madhya Pradesh",
    "description": "Kamla Bai used our model to grow turmeric with proper fertigation. Her crop gave good returns, and she reinvested to expand to 2 more acres next season.",
    "image": "https://i.pinimg.com/736x/6e/c0/4d/6ec04d15cc074ce65d2e89ba27b54b74.jpg"
  },
  {
    "name": "Jagdish Meena",
    "model": "Custom Farm Model",
    "land": "12 acres",
    "location": "Tonk, Rajasthan",
    "description": "Jagdish used a mix of papaya and seasonal vegetables with IoT monitoring. His income grew steadily, and he now employs 5 workers from his village.",
    "image": "https://i.pinimg.com/736x/2b/90/b7/2b90b75c737128ef4748d41d627c402f.jpg"
  },
  {
    "name": "Nirmala Devi",
    "model": "Fast Crop Model",
    "land": "3 acres",
    "location": "Nalanda, Bihar",
    "description": "Nirmala grew early cauliflower and spinach. Using training from Kisan Mal, she sold produce directly to market and earned twice her previous income.",
    "image": "https://i.pinimg.com/736x/e6/da/97/e6da9788523374e9907ef9705516947d.jpg"
  },
  {
    "name": "Baldev Singh",
    "model": "Medium-Term Crop Model",
    "land": "7 acres",
    "location": "Barnala, Punjab",
    "description": "Baldev planted ginger using our model and software. He saved water with drip and got a bulk buyer from Delhi, making his season a big success.",
    "image": "https://i.pinimg.com/736x/77/bc/4b/77bc4b6f2c255d037357ddca2b0d9f2d.jpg"
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
