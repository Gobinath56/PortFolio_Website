import React, { useState } from "react";
import "./assets/css/index.css";

import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";

import { Route, Routes, useLocation } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(true); // Set this true for scroll version
  const location = useLocation();

  const hideHeaderInRoutes = location.pathname === "/contact";
  const hideHeaderInScroll = false; // Change to true if you want to hide header in scroll layout's contact

  return (
    <>
      {/* 🔁 Header shown only if needed */}
      {isOnePage
        ? !hideHeaderInScroll && <Header />
        : !hideHeaderInRoutes && <Header />}

      {isOnePage ? (
        // ✅ One-page vertical scroll
        <div className="scroll-smooth bg-gray-900 text-white">
          <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-20"
          >
            <Hero />
          </section>

          <section
            id="skills"
            className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-12 pb-16"
          >
            <Skills />
          </section>

          <section
            id="experience"
            className="bg-gradient-to-br from-gray-900 via-gray-950 to-black pt-8 pb-20"
          >
            <Experience />
          </section>

          <section
            id="education"
            className="min-h-screen flex items-center justify-center bg-gray-900"
          >
            <Education />
          </section>

          <section
            id="projects"
            className="min-h-screen flex items-center justify-center bg-gray-900"
          >
            <Projects />
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-gray-900"
          >
            <Contact />
          </section>
        </div>
      ) : (
        // 🚦 Multi-page routing mode
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}
