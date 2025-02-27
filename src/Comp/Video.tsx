import React from 'react';
import { FaPlay } from 'react-icons/fa';
import agri from "../assets/Est. 2012.png"


const Video: React.FC = () => {
  return (
    <div className="h-[60vh] bg-black text-white px-16 py-6 flex justify-center items-center"
    style={{
      backgroundImage: `url(${agri})`,
      backgroundSize: 'cover',
      // backgroundPosition: 'center',
    }}>
      <div className="h-[50vh] w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-[1.5rem] text-center max-w-3xl leading-relaxed">
          Loluptatum. Esse est enim reiciendis expedita odit sequi sunt! Recusandae veniam obcaecati ab quos?
        </h1>
        <button
          type="button"
          className="border h-16 w-16 rounded-full flex justify-center items-center text-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-500"
          aria-label="Play Video"
        >
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default Video;
