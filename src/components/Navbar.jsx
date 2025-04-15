import React, { useState } from "react";
import logo from "../images/logoo.png";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="backdrop-blur-md shadow-md bg-[#FFFDF2] relative z-50">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="text-lg font-bold flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation List */}
        <ul
          className={`lg:flex flex-col lg:flex-row list-none absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#FFFDF2] lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out z-50 ${
            isOpen ? "flex" : "hidden"
          } lg:space-x-6 items-center text-center lg:text-left p-4 lg:p-0`}
        >
          <li>
            <Link
              to="/"
              className="text-gray-700 no-underline hover:text-blue-500 block py-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 no-underline hover:text-blue-500 block py-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="text-gray-700 no-underline hover:text-blue-500 block py-2"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-gray-700 no-underline hover:text-blue-500 block py-2"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              className="text-gray-700 no-underline hover:text-blue-500 block py-2"
            >
              Certificates
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <button className="bg-[#E3496f] text-white px-4 py-2 rounded-md shadow hover:bg-[#E3354C] transition">
            <Link to="/contact-me">Contact Me</Link>
          </button>
        </div>
      </nav>

     
    </div>
  );
};

export default Navbar;
