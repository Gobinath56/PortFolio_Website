import React, { useState, useEffect } from "react";
import { FaLaptopCode, FaEnvelope, FaBars } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("projects");

  const navLinks = [
    { id: "projects", icon: FaLaptopCode, text: "Projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact" },
  ];

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveLink(link.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-lg">
      <div className="md:fixed md:top-5 md:right-5 w-full md:w-auto">
        <nav className="bg-gray-900/95 backdrop-blur-lg rounded-full px-4 md:px-6 py-2.5 shadow-md">
          {/* Mobile Header */}
          <div className="flex justify-between items-center md:hidden px-2">
            <span className="text-white font-bold text-lg">Menu</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <FaBars />
            </button>
          </div>

          {/* Nav Items */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0 transition-all duration-500 ease-in-out">
              {navLinks.map(({ id, icon: Icon, text }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                    flex items-center gap-2 transition-all duration-300
                    ${
                      activeLink === id
                        ? "text-white font-semibold bg-gray-800"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                >
                  <Icon
                    className={`text-base transition-transform duration-200 ${
                      activeLink === id ? "scale-110" : ""
                    }`}
                  />
                  <span className="inline">{text}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
