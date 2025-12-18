import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Code, Award, Star } from "lucide-react";

// Assets from src/assets
import ProfilePic from "../assets/profile.png";
import Project1 from "../assets/mern2.png";
import Project2 from "../assets/project.png";
import Project3 from "../assets/mern3.png";

const About = () => {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "Framer Motion",
    "3D Effects",
  ];

  const projects = [Project1, Project2, Project3];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black px-4 py-16 text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-400"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-100 mt-4 max-w-2xl mx-auto"
        >
          I am a passionate Full Stack Developer who loves building modern,
          scalable, and interactive web experiences. I combine creativity, code,
          and design to deliver amazing user experiences.
        </motion.p>
      </div>

      {/* Profile + Info Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto mb-16"
      >
        {/* Profile Pic */}
        <div className="w-64 h-64 relative">
          <Tilt
            tiltEnable={true}
            glareEnable={false}
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="w-full h-full rounded-xl shadow-2xl border border-white/50"
          >
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-xl"
            />
          </Tilt>
        </div>

        {/* Info Box */}
        <div className="space-y-4 bg-white/5 backdrop-blur-xl p-6 rounded-xl shadow-xl flex-1">
          <h2 className="text-2xl font-bold text-blue-400">Md Ammad Hussain</h2>
          <p className="text-gray-100 leading-relaxed">
            Full Stack Developer | MERN Stack Specialist.<br /> I enjoy turning
            complex problems into beautiful and functional web applications.
            With expertise in frontend and backend development, I strive to
            craft user-centric digital products.
          </p>

          {/* Key Stats */}
          <div className="flex gap-8 mt-4 justify-center lg:justify-start flex-wrap">
            <div className="flex flex-col items-center">
              <Award size={24} className="text-blue-400" />
              <span className="text-gray-100 mt-1">1 Year Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <Star size={24} className="text-blue-400" />
              <span className="text-gray-100 mt-1">21+ Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <Code size={24} className="text-blue-400" />
              <span className="text-gray-100 mt-1">MERN Stack</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">
          Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-gray-100 hover:bg-blue-400 hover:text-blue-500 cursor-pointer transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      {/* Projects Section */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="max-w-6xl mx-auto mb-16"
>
  <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">
    Featured Projects
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {projects.map((proj, idx) => (
      <Tilt
        key={idx}
        glareEnable={false}
        scale={1.05}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="rounded-xl overflow-hidden shadow-2xl border border-white/20 h-56"
      >
        <img
          src={proj}
          alt={`Project ${idx + 1}`}
          className="w-full h-full object-cover rounded-xl"
        />
      </Tilt>
    ))}
  </div>
</motion.div>


      {/* Contact / Call To Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h3 className="text-2xl font-bold text-blue-400 mb-4">
          Let's Work Together!
        </h3>
        <p className="text-gray-100 mb-6">
          Interested in collaborating on a project or hiring me? Reach out now!
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:scale-[1.05] active:scale-[0.97] transition"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default About;
