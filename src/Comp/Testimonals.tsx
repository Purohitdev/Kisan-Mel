import React from "react";
import Marquee from "react-fast-marquee";

// Prop for card
interface TestimonialCardProps {
  name: string;
  message: string;
}

// Testimonial card structure
const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, message }) => (
  <div className="border border-[#2d4122] min-h-48 w-72 sm:w-80 mx-2 sm:mx-4 p-4 shadow-lg rounded-lg bg-white">
    <div className="border-b border-[#2d4122] pb-2 mb-2 flex items-center gap-3">
      <div className="h-10 w-10 sm:h-12 sm:w-12 bg-black rounded-full" />
      <div className="flex flex-col">
        <h2 className="font-bold text-md sm:text-lg text-[#2d4122]">{name}</h2>
        <p className="text-xs sm:text-sm text-gray-600">Verified User</p>
      </div>
    </div>
    <p className="text-gray-800 text-xs sm:text-sm">{message}</p>
  </div>
);

// Testimonial section
const Testimonials: React.FC = () => {
  const testimonials = [
    { name: "John Doe", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." },
    { name: "Jane Smith", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." },
    { name: "Alice Johnson", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." },
    { name: "Bob Brown", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." },
  ];

  return (
    <div className="min-h-auto px-4 sm:px-16 py-6 sm:py-8 bg-[#e4e1d8b2]">
      <div className="mb-6 sm:mb-8 flex items-center">
        <h1 className="text-3xl sm:text-[2.5rem] leading-none font-bold text-[#2d4122] capitalize text-center sm:text-left w-full">
          Hear it from others, not just us
        </h1>
      </div>

      <div className="space-y-4">
        {/* Left to Right Marquee */}
        <Marquee className="min-h-[20vh] sm:min-h-[25vh]" speed={50} autoFill={true} pauseOnHover={true}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`left-${index}`} {...testimonial} />
          ))}
        </Marquee>

        {/* Right to Left Marquee */}
        {/* <Marquee className="min-h-[20vh] sm:min-h-[25vh]" direction="right" speed={50} autoFill={true} pauseOnHover={true}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`right-${index}`} {...testimonial} />
          ))}
        </Marquee> */}
      </div>
    </div>
  );
};

export default Testimonials;
