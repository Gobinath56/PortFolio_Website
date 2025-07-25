import { motion } from "framer-motion";
import { FaJava, FaGithub, FaReact, FaCode } from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiArduino,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Arduino", icon: <SiArduino size={40} /> },
  { name: "MATLAB", icon: <FaCode size={40} title="MATLAB (placeholder)" /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full pt-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-12 drop-shadow-[0_0_5px_#3b82f6]"
        >
          Tech I'm Fluent In
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-36 h-36 bg-white/5 rounded-2xl border border-blue-500/20 backdrop-blur-md flex flex-col items-center justify-center text-blue-400 shadow-xl hover:shadow-[0_0_30px_#3b82f6] transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-2 drop-shadow-[0_0_10px_#3b82f6]">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold tracking-wide">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
