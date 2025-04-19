import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logoo.png";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/certificates", label: "Certificates" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu on mobile after clicking
  };

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-md bg-[#FFFDF2] z-50">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-lg font-bold flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 max-h-10" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row list-none absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#FFFDF2] lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out z-40 ${
            isOpen ? "flex" : "hidden"
          } lg:space-x-6 items-center text-center lg:text-left p-4 lg:p-0`}
        >
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={handleLinkClick}
                className={`block py-2 no-underline ${
                  location.pathname === path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          {/* Contact Me Button for Mobile */}
          <li className="lg:hidden mt-4">
            <Link to="/contact-me" onClick={handleLinkClick}>
              <button className="bg-[#E3496f] text-white px-4 py-2 rounded-md shadow hover:bg-[#E3354C] transition w-full">
                Contact Me
              </button>
            </Link>
          </li>
        </ul>

        {/* Contact Me Button for Desktop */}
        <div className="hidden lg:block">
          <Link to="/contact-me">
            <button className="bg-[#E3496f] text-white px-4 py-2 rounded-md shadow hover:bg-[#E3354C] transition">
              Contact Me
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
