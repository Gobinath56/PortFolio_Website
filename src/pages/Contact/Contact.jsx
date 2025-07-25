import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import StarField from "../../components/StarField";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-screen min-h-screen py-16 px-4 text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 z-0" />
      <div className="fixed inset-0 z-10 pointer-events-none">
        <StarField />
      </div>

      {/* Contact Card */}
      <motion.div
        className="relative z-20 bg-gray-800 p-8 rounded-2xl max-w-xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">
          Contact Me
        </h2>

        <div className="space-y-4 text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:gobinatht67@gmail.com"
              className="text-blue-300 hover:text-blue-500 underline"
            >
              gobinatht67@gmail.com
            </a>
          </p>
          <p>
            📱 Phone:{" "}
            <a
              href="tel:+919876543210"
              className="text-blue-300 hover:text-blue-500 underline"
            >
              +91 7603875757
            </a>
          </p>
          <p>
            📍 Location: <span className="text-blue-300">Coimbatore, India</span>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/gobinath-t-4878542b8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-500 underline"
            >
              Gobinath T
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Gobinath56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-500 underline"
            >
              Gobinath56
            </a>
          </p>
        </div>

        {/* 📄 Resume Button with Pulse */}
        <div className="mt-8 flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="animate-pulse inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            <FiDownload className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
