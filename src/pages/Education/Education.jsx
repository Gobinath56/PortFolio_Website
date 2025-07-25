import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-12 px-4"
    >
      {/* Animated Section Heading */}
      <div className="relative text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
          Education
        </h2>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* College */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-[1.01] transition duration-300">
          <h3 className="text-2xl font-semibold">
            B.E. in Electronics and Communication Engineering
          </h3>
          <p className="text-md text-gray-300 mt-2">
            Dr. NGP Institute of Technology, Coimbatore <br />
            <span className="text-sm text-gray-400">2022 – 2026</span>
            <br />
            <span className="text-sm text-green-400">CGPA: 8.05</span>
          </p>
        </div>

        {/* HSC */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-[1.01] transition duration-300">
          <h3 className="text-2xl font-semibold">HSC</h3>
          <p className="text-md text-gray-300 mt-2">
            Kamaraj Higher Secondary School, Nambiyur <br />
            <span className="text-sm text-gray-400">2020 – 2022</span>
            <br />
            <span className="text-sm text-green-400">Percentage: 80%</span>
          </p>
        </div>

        {/* SSLC */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-[1.01] transition duration-300">
          <h3 className="text-2xl font-semibold">SSLC</h3>
          <p className="text-md text-gray-300 mt-2">
            Kamaraj Higher Secondary School, Nambiyur <br />
            <span className="text-sm text-gray-400">2019 – 2020</span>
            <br />
            <span className="text-sm text-green-400">Percentage: 85%</span>
          </p>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mt-20">
        <div className="relative text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Certificates
          </h3>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certificate 1 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-[1.01] transition duration-300">
            <h4 className="text-xl font-semibold">Cloud Computing</h4>
            <p className="text-sm text-gray-300 mt-2">
              NPTEL <br />
              <span className="text-gray-400">Elite Grade</span>
            </p>
            <a className="text-gray-400">Issued: 2024</a>
          </div>

          {/* Certificate 2 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-[1.01] transition duration-300">
            <h4 className="text-xl font-semibold">
              Social Innovation in Industry 4.0
            </h4>
            <p className="text-sm text-gray-300 mt-2">
              NPTEL <br />
              <span className="text-gray-400">Elite + Silver Grade</span>
            </p>
            <a className="text-gray-400">Issued: 2024</a>
          </div>

          {/* Certificate 3 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-[1.01] transition duration-300">
            <h4 className="text-xl font-semibold">PCB Design</h4>
            <p className="text-sm text-gray-300 mt-2">
              Coimbatore Institute of Technology <br />
              <span className="text-gray-400">Issued: 2023</span>
            </p>
          </div>

          {/* Certificate 4 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-[1.01] transition duration-300">
            <h4 className="text-xl font-semibold">
              National Level Paper Presentation
            </h4>
            <p className="text-sm text-gray-300 mt-2">
              BIT <br />
              <span className="text-gray-400">Issued: 2024</span>
            </p>
          </div>

          {/* Certificate 5 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-[1.01] transition duration-300">
            <h4 className="text-xl font-semibold">MATLAB Simulink</h4>
            <p className="text-sm text-gray-300 mt-2">
              MathWorks <br />
              <span className="text-gray-400">Issued: 2024</span>
            </p>
          </div>

          {/* Certificate 6 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:scale-[1.01] transition duration-300">
            <h4 className="text-xl font-semibold">MATLAB Onramp</h4>
            <p className="text-sm text-gray-300 mt-2">
              MathWorks <br />
              <span className="text-gray-400">Issued: 2024</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
