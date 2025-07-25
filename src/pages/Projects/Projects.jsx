import { FaReact, FaGithub, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiArduino } from "react-icons/si";

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-4 pb-2 px-4 min-h-fit bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Projects
          </h2>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded shadow animate-fade flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Aircraft Fault Detection
              </h3>
              <p className="text-gray-300 mb-4">
                A MATLAB-based machine learning project to detect actuator and
                hydraulic faults in aircraft using sensor data.
              </p>
              <div className="flex gap-3 text-xl text-cyan-400">
                <FaCode title="MATLAB (placeholder)" />
                <FaGithub title="GitHub" />
              </div>
            </div>
            <div className="mt-4">
              <img
                src="/images/aircraftsim.png"
                alt="Aircraft Fault Detection"
                className="w-full h-48 object-cover rounded transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/Gobinath56/Faultprediction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
              >
                View Full Project
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded shadow animate-fade flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Line Following Robot
              </h3>
              <p className="text-gray-300 mb-4">
                A microcontroller-powered robot that uses IR sensors and LSRB
                algorithm to follow paths autonomously.
              </p>
              <div className="flex gap-3 text-xl text-cyan-400">
                <SiArduino title="Arduino" />
                <FaGithub title="GitHub" />
              </div>
            </div>
            <div className="mt-4">
              <img
                src="/images/linefollower.jpg"
                alt="Line Following Robot"
                className="w-full h-48 object-cover rounded transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/Gobinath56/Linefollower"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
              >
                View Full Project <FaGithub />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded shadow animate-fade flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Personal Portfolio</h3>
              <p className="text-gray-300 mb-4">
                A responsive portfolio built using React and Tailwind CSS to
                showcase my skills, projects, and resume.
              </p>
              <div className="flex gap-3 text-xl text-cyan-400">
                <FaReact title="React" />
                <SiTailwindcss title="Tailwind CSS" />
                <FaGithub title="GitHub" />
              </div>
            </div>
            <div className="mt-4">
              <img
                src="/images/portfolio.png"
                alt="Personal Portfolio"
                className="w-full h-48 object-cover rounded transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/Gobinath56/PortFolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
              >
                View Full Project <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
