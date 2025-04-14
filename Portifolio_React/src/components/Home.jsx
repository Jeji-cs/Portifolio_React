import React from "react";
import Navbar from "../components/Navbar";
import { FaDownload } from "react-icons/fa";
import img from "../images/img.jpeg";
import resume from "../images/Jeji_Chandra_Sekhar.pdf";

const Home = () => {
  return (
    <div className="bg-gradient-to-r to-indigo-200 from-indigo-300 h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-1 items-center justify-center text-black px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
          <div className="relative mb-6 md:mb-0">
            <img
              src={img}
              alt="Profile"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-[#E3354C] object-cover"
            />
          </div>

          <div className="md:ml-10 text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Hello, I am <br />
              <span className="text-[#E3354C] font-bold text-4xl md:text-5xl">
                Jeji Chandra Sekhar
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl mt-2">
              I'm a{" "}
              <span className="text-indigo-600 font-bold">
                MERN Stack Developer
              </span>
            </h2>
            <p className="text-black-300 italic mt-2 text-sm md:text-base">
              Connecting the front-end and back-end seamlessly, <br />
              turning ideas into fully functional web applications.
            </p>

            <a
              href={resume}
              download
              className="inline-flex items-center mt-6 px-5 py-2 border border-[#E3354C] text-[#E3354C] rounded-full hover:bg-[#4F46E5] hover:text-white transition duration-300"
            >
              Download Resume <FaDownload className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
