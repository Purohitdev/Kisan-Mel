import React from 'react';
import { FaPlay } from 'react-icons/fa';
import agri from "/Est. 2012.png"


const Video: React.FC = () => {
  return (
    <div className="h-[60vh] w-full bg-black text-white px-16 py-6 flex justify-center items-center"
    style={{
      backgroundImage: `url(${agri})`,
      backgroundSize: 'cover',
      // backgroundPosition: 'center',
    }}>
      <div className="h-[50vh] w-full flex flex-col justify-center items-center gap-4">
        <button
          type="button"
          className="border h-23 w-23 rounded-full flex justify-center items-center text-4xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-500"
          aria-label="Play Video"
        >
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default Video;
