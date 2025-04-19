import React from "react";
import Navbar from "../components/Navbar";

const Certificates = () => {
  const certificates = [
    {
      title: "React Certificate",
      img: "ReactJS.png",
      link: "https://drive.google.com/file/d/1L0IfqWNVKvk-8RPETy6mI6QTyu-kmUFU/view?usp=sharing",
    },
    {
      title: "HTML Certificate",
      img: "HTML.png",
      link: "https://drive.google.com/file/d/1bmtPF2mfowADze74hg0plRmf-fTlB4Y0/view?usp=sharing",
    },
    {
      title: "CSS Certificate",
      img: "CSS.png",
      link: "https://drive.google.com/file/d/1UDncTJ2O2wk4kX3c_7m2YrA0N637eFNm/view?usp=sharing",
    },
    {
      title: "JavaScript Certificate",
      img: "JS.png",
      link: "https://drive.google.com/file/d/13SQqVj0a68BuKqs3A3LOrV1qPQnOXFCn/view?usp=sharing",
    },
    {
      title: "JAVA Certificate",
      img: "JAVA.png",
      link: "https://drive.google.com/file/d/1wQ3Q0XTnNp7YQDMz_XLG1NyuUtYtO-Ev/view?usp=sharing",
    },
    {
      title: "C++ Certificate",
      img: "CPP.png",
      link: "https://drive.google.com/file/d/13pnAcLFdWHNyHZyHSryqU-H12FRnKf0n/view?usp=sharing",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-300 via-purple-300 to-indigo-300">
      <Navbar />

      <main className="flex-grow px-6 py-12 mt-15">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          My Certificates
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition duration-300"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-72 h-48 object-cover rounded-xl shadow-md"
              />
              <p className="text-center mt-2 text-gray-700 font-medium">
                {cert.title}
              </p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Certificates;
