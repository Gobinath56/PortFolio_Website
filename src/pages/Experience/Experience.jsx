import React from "react";
import { Briefcase, Presentation } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 w-full max-w-xl">
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />
    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const internships = [
    {
      icon: Briefcase,
      title: "Embedded Systems Intern",
      company: "Krish Tec",
      period: "July 2023 - August 2023",
      description:
        "Worked on ESP32 and IoT-based projects, including sensor interfacing and simulation.",
    },
  ];

  const workshops = [
    {
      icon: Presentation,
      title: "PCB Design And Fabrication Workshop",
      company: "Surya Tech",
      period: "2023",
      description:
        "Participated in hands-on sessions covering PCB design using EAGLE software, Manufacturing process and real-time applications.",
    },
    {
      icon: Presentation,
      title: "MATLAB & Simulink Workshop",
      company: "MathWorks Community",
      period: "2024",
      description:
        "Learned about modeling, simulation, and analysis using MATLAB and Simulink.",
    },
    {
      icon: Presentation,
      title: "IoT Product Design and Testing",
      company: "Krish Tec",
      period: "2024",
      description:
        "Hands-on training on designing, simulating, and Testing  using tools.",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full pb-1 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Title & Subtext */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Experience & Learning
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide max-w-2xl mx-auto">
            A journey through internships and hands-on learning experiences.
          </p>
        </div>

        {/* Internship Section */}
        <div className="space-y-4 w-full flex flex-col items-center">
          <h3 className="text-4xl font-bold text-cyan-400 text-center">
            Internship
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {internships.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Workshop Section */}
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-cyan-400 text-center">
            Workshops
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {workshops.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
