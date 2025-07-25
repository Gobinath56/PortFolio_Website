import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          Developer, Engineer, Innovator
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="relative space-y-4">
            <p className="text-white">
              Hello! I'm <span className="font-semibold">Gobinath T</span>, an
              Electronics and Communication Engineering student with a strong
              passion for web development, embedded systems, and automation.
            </p>
            <p className="text-white">
              I'm dedicated to bridging the gap between hardware and software by
              building efficient systems and dynamic web applications. Currently
              expanding into full-stack development to bring complete solutions
              to life.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-300 pl-4">
                <p className="text-white">
                  I'm a continuous learner who believes in hands-on problem
                  solving and building real-world tech solutions. Whether it’s
                  coding a responsive frontend or prototyping a sensor-based
                  system — I love it all.
                </p>
                <div className="mt-6 space-y-3">
                  <cite className="block font-medium text-white">
                    Gobinath T, ECE Student & Full-stack Enthusiast
                  </cite>
                </div>
              </blockquote>
            </div>
          </div>

          {/* Animated Image */}
          <motion.div
            className="relative mb-6 sm:mb-0"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="aspect-76/59 relative rounded-2xl bg-gradient-to-b from-zinc-300/20 to-transparent p-px">
              <img
                src="/images/dev.png" // ✅ CORRECTED PATH
                alt="Futuristic Developer"
                className="rounded-[15px] shadow block w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
