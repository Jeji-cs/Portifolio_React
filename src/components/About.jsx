import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gradient-to-br from-indigo-300 via-purple-300 to-indigo-300 flex flex-col items-center justify-center text-center relative mt-15">
        <div className="max-w-7xl w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 rounded-2xl  transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify px-2 sm:px-4 md:px-6">
            I'm a passionate and aspiring{" "}
            <strong className="text-[#E3354C]">MERN Stack Developer</strong>,
            eager to build dynamic and scalable web applications. With a strong
            foundation in{" "}
            <strong className="text-[#E3354C]">
              JavaScript, React.js, Node.js, Express.js, and MongoDB
            </strong>
            , I am committed to mastering full-stack development. Having
            completed my{" "}
            <strong className="text-[#E3354C]">
              B.Tech in Computer Science and Engineering
            </strong>
            , I have honed my skills through hands-on projects and internships,
            gaining experience in both frontend and backend technologies. My
            <strong className="text-[#E3354C]"> problem-solving mindset</strong>
            , combined with expertise in
            <strong className="text-[#E3354C]">
              {" "}
              HTML, CSS, JavaScript, and databases
            </strong>
            , enables me to create user-friendly and efficient web applications.
            I am always keen to learn new technologies and stay updated with
            industry trends. As a{" "}
            <strong className="text-[#E3354C]">fresher</strong>, I seek
            opportunities to contribute to innovative projects, collaborate with
            teams, and grow as a professional in the field of web development.
            My dedication to writing clean, efficient code and my passion for
            technology make me a promising candidate for a{" "}
            <strong className="text-[#E3354C]">MERN Stack Developer</strong>{" "}
            role.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
