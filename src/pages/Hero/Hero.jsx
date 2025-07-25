import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const handleScroll = () => {
    const skillSection = document.getElementById("skills");
    if (skillSection) {
      skillSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-4 md:px-16 lg:px-32 bg-gray-900 text-white font-[Poppins] overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-2xl opacity-20 -z-10" />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 text-right md:text-left">
        {/* Text Section */}
        <div className="max-w-xl">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: `'Space Grotesk', sans-serif` }}
          >
            Hi, I'm GobinathT{" "}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I am a passionate Electronics and Communication Engineering student
            with an interest in embedded systems, web development, and
            automation.
          </motion.p>

          {/* Button */}
          <motion.a
            href="#skills"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get to Know Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>

          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-start gap-6 text-2xl text-white">
            <a
              href="https://github.com/Gobinath56"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gobinath-t-4878542b8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:gobinatht67@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Optional Profile Image */}
        <motion.img
          src="/images/dev.png"
          // replace with your image path
          alt="Gobinath"
          className="w-81 h-81 rounded-full shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
      </div>

   
    </section>
  );
};

export default Hero;
