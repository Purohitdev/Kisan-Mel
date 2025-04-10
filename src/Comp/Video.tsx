

// import React, { useState } from 'react';
// import { FaPlay } from 'react-icons/fa';

// const Video: React.FC = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div
//       className="h-[60vh] w-full bg-black text-white px-16 py-6 flex justify-center items-center"
//     >
//       <div className="h-full w-full flex justify-center items-center">
//         {!isPlaying ? (
//           <button
//             type="button"
//             className="border h-20 w-20 rounded-full flex justify-center items-center text-4xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-500"
//             aria-label="Play Video"
//             onClick={() => setIsPlaying(true)}
//           >
//             <FaPlay />
//           </button>
//         ) : (
//           <iframe
//             className="h-[60vh] w-full"
//             src="https://www.youtube.com/embed/uruY2Y8fejE?autoplay=1&rel=0&modestbranding=1"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Video;



import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-[60vh] w-full bg-black text-white px-4 md:px-16 py-6 flex justify-center items-center relative">
      {!isPlaying ? (
        <div className="relative h-full w-full flex justify-center items-center overflow-hidden rounded-xl">
          {/* Banner Image */}
          <img
            src="/logo2.svg"
            alt="Video banner"
            className="absolute w-[50%] h-[50%] object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />

          {/* Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Play Button */}
          <button
            type="button"
            className="z-20 border h-15 w-15 rounded-full flex justify-center items-center  bg-white/40 text-black/40 transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-500 text-2xl"
            aria-label="Play Video"
            onClick={() => setIsPlaying(true)}
          >
            <FaPlay />
          </button>
        </div>
      ) : (
        <iframe
          className="h-full w-full rounded-xl"
          src="https://www.youtube.com/embed/uruY2Y8fejE?autoplay=1&rel=0&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Video;
