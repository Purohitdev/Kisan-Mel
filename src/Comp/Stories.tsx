// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";

// const storiesData = [
//   {
//     name: "Sita Ram Verma",
//     model: "Fast Crop Model",
//     land: "4 acres",
//     location: "Hardoi, Uttar Pradesh",
//     description:
//       "Sita Ram started growing okra and leafy vegetables using drip irrigation. He earned profit in just 50 days and inspired 8 nearby farmers to try the same model.",
//     image:
//       "https://i.pinimg.com/736x/ab/d3/9c/abd39c905de130d458b568d5dce93dd5.jpg",
//   },
//   {
//     name: "Kamla Bai",
//     model: "Medium-Term Crop Model",
//     land: "6 acres",
//     location: "Betul, Madhya Pradesh",
//     description:
//       "Kamla Bai used our model to grow turmeric with proper fertigation. Her crop gave good returns, and she reinvested to expand to 2 more acres next season.",
//     image:
//       "https://i.pinimg.com/736x/6e/c0/4d/6ec04d15cc074ce65d2e89ba27b54b74.jpg",
//   },
//   {
//     name: "Jagdish Meena",
//     model: "Custom Farm Model",
//     land: "12 acres",
//     location: "Tonk, Rajasthan",
//     description:
//       "Jagdish used a mix of papaya and seasonal vegetables with IoT monitoring. His income grew steadily, and he now employs 5 workers from his village.",
//     image:
//       "https://i.pinimg.com/736x/2b/90/b7/2b90b75c737128ef4748d41d627c402f.jpg",
//   },
//   {
//     name: "Nirmala Devi",
//     model: "Fast Crop Model",
//     land: "3 acres",
//     location: "Nalanda, Bihar",
//     description:
//       "Nirmala grew early cauliflower and spinach. Using training from Kisan Mal, she sold produce directly to market and earned twice her previous income.",
//     image:
//       "https://i.pinimg.com/736x/e6/da/97/e6da9788523374e9907ef9705516947d.jpg",
//   },
//   {
//     name: "Baldev Singh",
//     model: "Medium-Term Crop Model",
//     land: "7 acres",
//     location: "Barnala, Punjab",
//     description:
//       "Baldev planted ginger using our model and software. He saved water with drip and got a bulk buyer from Delhi, making his season a big success.",
//     image:
//       "https://i.pinimg.com/736x/77/bc/4b/77bc4b6f2c255d037357ddca2b0d9f2d.jpg",
//   },
// ];

// const Stories: React.FC = () => {
//   const [index, setIndex] = useState<number>(0);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLImageElement>(null);
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const startTimer = () => {
//     intervalRef.current = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % storiesData.length);
//     }, 3000);
//   };

//   const stopTimer = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     startTimer();
//     return () => stopTimer();
//   }, []);

//   useEffect(() => {
//     if (contentRef.current && imageRef.current) {
//       gsap.fromTo(
//         contentRef.current,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
//       );
//       gsap.fromTo(
//         imageRef.current,
//         { opacity: 0, scale: 0.95 },
//         { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
//       );
//     }
//   }, [index]);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % storiesData.length);
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + storiesData.length) % storiesData.length);
//   };

//   return (
//     <div className="bg-[#e4e1d8b2] px-4 sm:px-16 py-10 text-[#2d4122] w-full relative">
//       <div
//         className=" mx-auto h-auto rounded-3xl bg-[#2d4122] p-6 sm:p-10 flex flex-col sm:flex-row gap-6 overflow-hidden "
//         onMouseEnter={stopTimer}
//         onMouseLeave={startTimer}
//       >
//         {/* Content Section */}
//         <div className="w-full sm:w-1/2">
//           <button className="px-4 py-2 border rounded-3xl mb-4 text-sm sm:text-base text-white border-white">
//             Our Stories
//           </button>
//           <h1 className="text-[1.8rem] sm:text-[2.5rem] font-bold text-white mb-4">
//             Success Stories
//           </h1>
//           <div ref={contentRef} className="text-white space-y-1 sm:space-y-2">
//             <h2 className="text-lg sm:text-xl font-semibold">{storiesData[index].name}</h2>
//             <p className="text-sm sm:text-base">{storiesData[index].model}</p>
//             <p className="text-sm sm:text-base">{storiesData[index].land}</p>
//             <p className="text-sm sm:text-base">{storiesData[index].location}</p>
//             <p className="text-sm sm:text-base mt-3 leading-relaxed">
//               “{storiesData[index].description}”
//             </p>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="w-full sm:w-1/2 flex items-center justify-center">
//           <img
//             ref={imageRef}
//             src={storiesData[index].image}
//             alt={storiesData[index].name}
//             className="h-[60vw] sm:h-[80%] max-h-[400px] w-full object-cover rounded-2xl"
//           />
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 h-10 sm:h-12 w-10 sm:w-12 bg-white text-black rounded-full shadow-md hover:bg-white/80 transition flex items-center justify-center"
//         >
//           ❮
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 h-10 sm:h-12 w-10 sm:w-12 bg-white text-black rounded-full shadow-md hover:bg-white/80 transition flex items-center justify-center"
//         >
//           ❯
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {storiesData.map((_, i) => (
//             <span
//               key={i}
//               className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full transition-all duration-300 ${
//                 i === index ? "bg-[#2d4122]" : "bg-[#2d412292]"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stories;



import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../Lang"; // ✅ Your LanguageContext

const Stories: React.FC = () => {
  const { lang } = useLanguage(); // ✅ Moved inside component

  const [index, setIndex] = useState<number>(0);
  const [stories, setStories] = useState<any[]>([]);

  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetch("/Stores.json")
      .then((res) => res.json())
      .then((data) => setStories(data.stories));
  }, []);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 4000);
  };

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (stories.length) startTimer();
    return () => stopTimer();
  }, [stories]);

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
  }, [index, lang]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  const story = stories[index];
  if (!story) return null;

  return (
    <div className="bg-[#e4e1d8b2] px-4 sm:px-16 py-10 text-[#2d4122] w-full relative">
      <div
        className="mx-auto h-auto rounded-3xl bg-[#2d4122] p-6 sm:p-10 flex flex-col sm:flex-row gap-6 overflow-hidden"
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
      >
        {/* Left: Text Content */}
        <div className="w-full sm:w-1/2">
          <button className="px-4 py-2 border rounded-3xl mb-4 text-sm sm:text-base text-white border-white">
            {lang === "en" ? "Our Stories" : "हमारी कहानियाँ"}
          </button>
          <h1 className="text-[1.8rem] sm:text-[2.5rem] font-bold text-white mb-4">
            {lang === "en" ? "Success Stories" : "सफलता की कहानियाँ"}
          </h1>
          <div ref={contentRef} className="text-white space-y-1 sm:space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">{story.name[lang]}</h2>
            <p className="text-sm sm:text-base">{story.model[lang]}</p>
            <p className="text-sm sm:text-base">{story.land[lang]}</p>
            <p className="text-sm sm:text-base">{story.location[lang]}</p>
            <p className="text-sm sm:text-base mt-3 leading-relaxed">
              “{story.description[lang]}”
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <img
            ref={imageRef}
            src={story.image}
            alt={story.name.en}
            className="h-[60vw] sm:h-[80%] max-h-[400px] w-full object-cover rounded-2xl"
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 h-10 sm:h-12 w-10 sm:w-12 bg-white text-black rounded-full shadow-md hover:bg-white/80 transition flex items-center justify-center"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 h-10 sm:h-12 w-10 sm:w-12 bg-white text-black rounded-full shadow-md hover:bg-white/80 transition flex items-center justify-center"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {stories.map((_, i) => (
            <span
              key={i}
              className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#2d4122]" : "bg-[#2d412292]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
