// import React, { useState } from 'react';
// import { FaPlay } from 'react-icons/fa';

// const Video: React.FC = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div
//       className="h-[60vh] w-full bg-black text-white px-16 py-6 flex justify-center items-center"
//       // style={{
//       //   backgroundImage: `url(${agri})`,
//       //   backgroundSize: 'cover',
//       // }}
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
//           <video  autoPlay className="h-[60vh] w-screen object-cover">
//             <source src="/video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
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
    <div
      className="h-[60vh] w-full bg-black text-white px-16 py-6 flex justify-center items-center"
    >
      <div className="h-full w-full flex justify-center items-center">
        {!isPlaying ? (
          <button
            type="button"
            className="border h-20 w-20 rounded-full flex justify-center items-center text-4xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-500"
            aria-label="Play Video"
            onClick={() => setIsPlaying(true)}
          >
            <FaPlay />
          </button>
        ) : (
          <iframe
            className="h-[60vh] w-full"
            src="https://www.youtube.com/embed/uruY2Y8fejE?autoplay=1&rel=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default Video;
