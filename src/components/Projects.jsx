import React from "react";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-300 via-purple-300 to-indigo-300">
      <Navbar />

      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 py-20 mt-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-14">
            My Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                Salvaging and Garbage Cataloguing Assistant
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A YOLO-based trash classification system that identifies and
                categorizes waste into: Plastic, Paper, Cardboard, Metal, Glass,
                and Trash. It also checks for recyclability using supervised
                learning models.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Used YOLOv5 & YOLOv7 for object detection</li>
                <li>6 waste categories with recyclability prediction</li>
                <li>Supervised learning model for classification</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                Personal Contact Manager
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A contact management web app built using the MERN stack. Allows
                users to securely create, edit, and manage personal contacts
                through a clean and responsive UI.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Built using MongoDB, Express, React & Node.js</li>
                <li>RESTful APIs for data handling</li>
                <li>Responsive layout with React & Bootstrap</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
