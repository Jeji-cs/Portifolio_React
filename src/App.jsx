import React from "react";
import "./index.css"
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/certificates" element={<Certificates />} />
    <Route path="/contact-me" element={<ContactMe />} />
  </Routes>
</BrowserRouter>
  );
};

export default App;
