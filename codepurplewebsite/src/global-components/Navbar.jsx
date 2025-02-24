import Logo from "../assets/5827_logo.jpg";
import { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState({ scrollTop: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrollPosition({ scrollTop: window.scrollY });

    const navBar = document.querySelector(".navbar-bg");
    if (window.scrollY > 500) {
      navBar.classList.remove("bg-opacity-50", "hover:bg-opacity-80");
    } else {
      navBar.classList.add("bg-opacity-50");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50">
      <div className="w-[90%] md:w-[70%] h-16 bg-codePurple navbar-bg fixed top-8 left-1/2 -translate-x-1/2 bg-opacity-50 rounded-full flex items-center z-50 px-6 md:px-12 transition duration-300 border-white border-4 drop-shadow-2xl ml-3">
        <img
          src={Logo}
          alt="CodePurple"
          className="absolute h-20 md:h-24 left-[-30px] md:left-[-40px] rounded-full cursor-pointer hover:scale-110 transition-all duration-300 border-4 border-white"
          onClick={() => window.location.replace("/home")}
        />

        <div className="hidden md:flex flex-1 justify-end gap-8 pr-8">
          {["Home", "About", "Subteams", "Leadership", "Contact"].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} className="text-white font-kode relative group">
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </div>

        <a href="https://github.com/codepurplewebsite/codepurple" target="_blank" className="hidden md:block w-8 md:w-10 hover:scale-110 transition-all duration-300">
          <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000">
            <path
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
              d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
            ></path>
          </svg>
        </a>

        <button className="md:hidden ml-auto mr-3 z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-codePurple bg-opacity-90 z-40 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 flex flex-col items-center justify-center gap-6`}
      >
        {["Home", "About", "Subteams", "Leadership", "Contact"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-white text-2xl font-kode relative group"
            onClick={() => setMenuOpen(false)}
          >
            {item}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        ))}
        <a
          href="https://github.com/codepurplewebsite/codepurple"
          target="_blank"
          className="text-white text-2xl font-kode hover:scale-110 transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Navbar;
