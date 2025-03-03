const Banner = () => {
    return (
        <div className="relative w-full min-h-20 md:h-32 flex items-center justify-center py-4 px-4 md:px-12 bg-gradient-to-r from-[#C0A75E] to-[#5D6938] text-[#213D22]">
            <div className="flex flex-col md:flex-row items-center md:gap-8 gap-6 text-center md:text-left">
                {/* Logo Section */}
                <div className="flex items-center gap-1 md:gap-4 ">
                <div className="w-10 h-10 bg-[#213D22] rounded-full flex items-center justify-center">
                        <span className="text-[#C0A75E] text-lg font-bold">🌿</span>
                    </div>
                    <p className="text-sm sm:text-base md:text-xl font-medium">
                        We are bringing a revolution in the agribusiness
                    </p>
                </div>

                <button className="bg-[#E5C869] text-[#213D22] px-4 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-[#D4B75A] transition">
                    DISCOVER MORE
                </button>
            </div>
        </div>
    );
};

export default Banner;
