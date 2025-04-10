// import React from "react";
// import Marquee from "react-fast-marquee";

// interface TestimonialCardProps {
//   name: string;
//   logo: string;
// }

// const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, logo }) => (
//   <div className="border border-[#2d4122] min-h-40 w-72 sm:w-80 mx-2 sm:mx-4 p-4 shadow-lg rounded-lg bg-white flex flex-col items-center justify-center gap-4">
//     <img src={logo} alt={name} className="h-12 sm:h-16 object-contain" />
//     <h2 className="font-bold text-md sm:text-lg text-[#2d4122] text-center">{name}</h2>
//   </div>
// );

// const Testimonials: React.FC = () => {
//   const testimonials = [
//     {
//       name: "Jain rrigation",
//       logo: "https://www.digi.com/getattachment/customer-stories/Jain-Irrigation-Precision-Agriculture-Solutions/jain-logo-color-new.png?lang=en-US&width=340&height=230&ext=.png",
//     },
//     {
//       name: "GreenGrow Fertilizers",
//       logo: "/logos/greengrow.png",
//     },
//     {
//       name: "SmartFarm Tech",
//       logo: "/logos/smartfarm.png",
//     },
//     {
//       name: "Bharat Seeds Co.",
//       logo: "/logos/bharatseeds.png",
//     },
//     {
//       name: "KhetCare Insurance",
//       logo: "/logos/khetcare.png",
//     },
//     {
//       name: "AgriTrade India",
//       logo: "/logos/agritrade.png",
//     },
//   ];

//   return (
//     <div className="min-h-auto px-4 sm:px-16 py-6 sm:py-8 bg-[#e4e1d8b2]">
//       <div className="mb-6 sm:mb-8 flex items-center">
//         <h1 className="text-3xl sm:text-[2.5rem] leading-none font-bold text-[#2d4122] capitalize text-center sm:text-left w-full">
//           Hear it from others, not just us
//         </h1>
//       </div>

//       <div className="space-y-4">
//         <Marquee className="min-h-[20vh] sm:min-h-[25vh]" speed={50} autoFill pauseOnHover>
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard key={`logo-${index}`} {...testimonial} />
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;



import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials: React.FC = () => {
  const logos = [
    "https://www.digi.com/getattachment/customer-stories/Jain-Irrigation-Precision-Agriculture-Solutions/jain-logo-color-new.png?lang=en-US&width=340&height=230&ext=.png",
    "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png",

  ];

  return (
    <div className="w-full px-4 sm:px-16 py-12 sm:py-16 bg-[#e4e1d8b2] ">
      <div className="mb-16 flex items-center">
         <h1 className="text-3xl sm:text-[2.5rem] leading-none font-bold text-[#2d4122] capitalize text-center sm:text-left w-full">
           Hear it from others, not just us
         </h1>
       </div>

      <Marquee speed={50} pauseOnHover autoFill={true}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <img
              src={logo}
              alt={`partner-logo-${index}`}
              className="h-10 sm:h-14 object-contain  hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
