// import { GiFarmer } from "react-icons/gi";
// import { GiProfit } from "react-icons/gi";

// function Achievement() {
//     return (
//         <div className="h-[60vh] bg-[#EDEAE4] flex items-center justify-center ">
//             <div className="w-full h-full flex items-center justify-between gap-8 ">
//                 {/* Left Side - Image */}
//                 <div className="w-1/2 h-full relative ">
//                     <img
//                         src="/Est. 2012.png"
//                         alt="Teamwork"
//                         className="w-full h-full object-cover "
//                     />
//                     {/* White Circular Icon */}
//                     <img
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOtTj_-7lK7ebPdLGO_vmqI7JBV9I0P4vIEWWiMIn3nj6QJ1g"
//                         alt="Organic Badge"
//                         className="absolute top-5 right-[-60px] w-[100px] h-[100px] mix-blend-multiply"
//                     />

//                 </div>

//                 {/* Right Side - Content */}
//                 <div className="w-1/2 text-[#2D4122] flex flex-col justify-center pl-12 ">
//                     <button className="px-6 py-3 mb-5 border border-[#2d4122] rounded-full flex justify-center items-center w-fit text-[#2d4122] font-semibold shadow-md hover:bg-[#2d4122] hover:text-white transition-all">
//                         Our Achievements
//                     </button>

//                     <h2 className="text-5xl font-bold my-2">Made farmers' life easier</h2>

//                     <div className="mt-6 space-y-6 w-3/4">
//                         <div className="flex items-start space-x-4">
//                             <div className="bg-[#2D4122] text-[#EDEAE4] p-3 rounded-full h-[4rem] w-[4rem] flex justify-center items-center text-3xl">
//                                 <GiFarmer />
//                             </div>
//                             <div>
//                                 <h4 className="text-lg font-semibold">Introduced IoT devices into farming</h4>
//                                 <p className="text-sm">
//                                     Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu.
//                                 </p>
//                             </div>
//                         </div>

//                         <hr />

//                         <div className="flex items-start space-x-4">
//                             <div className="bg-[#2D4122] text-[#EDEAE4] p-3 rounded-full h-[4rem] w-[4rem] flex justify-center items-center text-3xl">
//                                 <GiProfit />
//                             </div>
//                             <div>
//                                 <h4 className="text-lg font-semibold">Substantially increased farmers' profits</h4>
//                                 <p className="text-sm">
//                                     Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Achievement;

"use client";
import { useEffect, useRef } from "react";
import { GiFarmer, GiProfit } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Achievement() {
    const badgeRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<HTMLDivElement[]>([]);

    // Function to set refs
    const addToRefs = (el: HTMLDivElement) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    useEffect(() => {
        // Infinite Rotation for Badge
        gsap.to(badgeRef.current, {
            rotation: 360,
            duration: 10,
            repeat: -1,
            ease: "linear",
        });

        // GSAP Scroll Animation (Trigger at Mid Screen)
        textRefs.current.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "-50% top", // Animation triggers when element reaches middle of the screen
                        toggleActions: "play none none none",
                        markers:true
                    },
                }
            );
        });
    }, []);

    return (
        <div className="h-[60vh] bg-[#EDEAE4] flex items-center justify-center px-6">
            <div className="w-full h-full flex items-center justify-between gap-8">
                {/* Left Side - Image */}
                <div className="w-1/2  relative h-[80%]">
                    <img src="/Est. 2012.png" alt="Teamwork" className="w-full h-full object-cover rounded-xl" />
                    {/* Rotating Icon */}
                    <div
                        ref={badgeRef}
                        className="absolute top-7 right-[-60px] w-[120px] h-[120px] bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <img
                            src="/cir.jpeg"
                            alt="Organic Badge"
                            className="w-[80px] h-[80px] mix-blend-multiply"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-1/2 text-[#2D4122] flex flex-col justify-center pl-12">
                    <button className="px-6 py-3 mb-5 border border-[#2d4122] rounded-full flex justify-center items-center w-fit text-[#2d4122] font-semibold shadow-md hover:bg-[#2d4122] hover:text-white transition-all">
                        Our Achievements
                    </button>

                    <h2 className="text-5xl font-bold my-2">Made farmers' life easier</h2>

                    <div className="mt-6 space-y-6 w-3/4">
                        {/* First Achievement */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#2D4122] text-[#EDEAE4] p-3 rounded-full h-[4rem] w-[4rem] flex justify-center items-center text-3xl">
                                <GiFarmer />
                            </div>
                            <div>
                                <h4 ref={addToRefs} className="text-lg font-semibold">
                                    Introduced IoT devices into farming
                                </h4>
                                <p ref={addToRefs} className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu.
                                </p>
                            </div>
                        </div>

                        <hr />

                        {/* Second Achievement */}
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#2D4122] text-[#EDEAE4] p-3 rounded-full h-[4rem] w-[4rem] flex justify-center items-center text-3xl">
                                <GiProfit />
                            </div>
                            <div>
                                <h4 ref={addToRefs} className="text-lg font-semibold">
                                    Substantially increased farmers' profits
                                </h4>
                                <p ref={addToRefs} className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
