
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useLanguage } from "./Lang"; // adjust path if needed

function Nav() {
  const { lang, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="min-h-[8vh] w-full flex items-center justify-between text-white px-6 md:px-12 py-4 text-xl z-50 fiex top-5 right-0">
        {/* Menu Icon */}
        <button
          onClick={toggleMenu}
          aria-label="Open menu"
          className="h-[45px] w-[45px] rounded-full bg-white text-[#2d4122] flex justify-center items-center hover:scale-105 transition-transform"
        >
          <IoMdMenu size={22} />
        </button>

        {/* Language Toggle Button */}
        <button
          onClick={toggleLang}
          className="text-sm px-4 py-2 bg-white text-[#2d4122] border border-[#2d4122] rounded-full font-medium hover:bg-[#e3e3e3] transition-colors"
        >
          {lang === "en" ? "हिंदी में देखें" : "View in English"}
        </button>
      </div>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0  text-white z-40 flex flex-col items-center justify-center gap-10 text-2xl font-medium transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Close Icon */}
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-white text-4xl hover:scale-110 transition-transform"
        >
          <IoMdClose />
        </button>

        {/* Links */}
        <div className="flex gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="relative group"
            >
              {link.name}
              <span className="block h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Nav;
