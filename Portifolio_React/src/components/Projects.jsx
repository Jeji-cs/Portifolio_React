import React from "react";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <div
      className="bg-gradient-to-r to-indigo-200 from-indigo-300"
      style={{
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16 bg-gradient-to-r to-indigo-200 from-indigo-300 lg:mt-32 md:mt-48 sm:mt-60">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Project 1: Salvaging and Garbage Cataloguing Centered Assistant */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Salvaging and Garbage Cataloguing Centered Assistant
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Developed a trash classification system using the YOLO algorithm,
              capable of identifying objects in an image across 6 categories:
              Plastic, Paper, Cardboard, Metal, Paper, and Trash. The system
              determines whether each object is recyclable using supervised
              learning. Implemented with YOLO variants (V5 and V7) for accurate
              object detection and classification.
            </p>
            <ul className="list-disc list-inside mt-4 text-sm sm:text-base md:text-lg text-gray-600">
              <li>Utilized YOLO V5 and V7 for object detection</li>
              <li>Classified 6 trash categories with recyclability status</li>
              <li>Employed supervised learning for enhanced accuracy</li>
            </ul>
          </div>

          {/* Project 2: Individual Persons Contacts Storage */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Individual Persons Contacts Storage
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Built a contact management web application using the MERN stack
              (MongoDB, Express.js, React.js, Node.js). Users can add, view,
              edit, and delete personal contacts with a responsive design
              implemented using React and Bootstrap. Integrated REST APIs for
              seamless data handling between frontend and backend.
            </p>
            <ul className="list-disc list-inside mt-4 text-sm sm:text-base md:text-lg text-gray-600">
              <li>Developed with MERN stack (MongoDB, Express, React, Node)</li>
              <li>Responsive design using React and Bootstrap</li>
              <li>Implemented REST APIs for data management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
