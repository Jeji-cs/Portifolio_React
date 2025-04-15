import React, { useState } from "react";
import Navbar from "../components/Navbar";

const ContactMe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mjejichandrasekhar@gmail.com&su=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-blue-200 to-indigo-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center px-4 pt-10 pb-10">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-lg bg-white/60 border border-white/30 shadow-2xl rounded-xl p-8 w-full max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center tracking-tight">
            Contact Me
          </h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium py-3 rounded-lg transition-all shadow-md hover:shadow-xl"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
