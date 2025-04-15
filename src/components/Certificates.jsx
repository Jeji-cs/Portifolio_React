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
    <div
      style={{
        backgroundColor: "#E5EDF1",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div className="bg-gradient-to-r to-indigo-200 from-indigo-300 h-[110vh] lg:pt-24 md:pt-16 sm:pt-32">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          My Certificates
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={cert.img}
                alt={cert.title}
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  color: "#333",
                  marginTop: "0.5rem",
                }}
              >
                {cert.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
