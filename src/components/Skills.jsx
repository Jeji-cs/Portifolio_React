import React from "react";
import Navbar from "../components/Navbar";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "React.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Node.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Express.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
      name: "MongoDB",
      img: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    },
    {
      name: "Java",
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      name: "C++",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
  ];

  return (
    <div
      className="bg-gradient-to-r to-indigo-200 from-indigo-300"
      style={{
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div
        style={{ padding: "2rem" }}
        className="bg-gradient-to-r to-indigo-200 from-indigo-300 lg:mt-32 md:mt-48 sm:mt-60"
      >
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
          My Skills
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "1rem",
                width: "150px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                  marginBottom: "0.75rem",
                }}
              />
              <h4 style={{ margin: 0, fontSize: "1rem", color: "#333" }}>
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
