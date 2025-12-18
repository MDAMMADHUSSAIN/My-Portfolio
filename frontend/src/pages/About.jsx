import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Code, Award, Star } from "lucide-react";

// Assets from src/assets
import ProfilePic from "../assets/profile.png";
import Project1 from "../assets/mern.png";
import Project2 from "../assets/project.png";
import Project3 from "../assets/responsive.png";

const About = () => {
  const skills = [
     "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TailwindCSS",
    "Python",
    "Java",
    "Flutter",
    "Dart",
  ];

  const projects = [Project1, Project2, Project3];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black px-4 py-16 text-white">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-32 top-40 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mb-16 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-blue-400 md:text-5xl"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-4 max-w-2xl text-sm text-gray-100 sm:text-base"
        >
          I am a passionate Full Stack Developer who loves building modern,
          scalable, and interactive web experiences. I combine creativity, code,
          and design to deliver meaningful user experiences.
        </motion.p>
      </div>

      {/* Profile + Info Section */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-20 flex max-w-6xl flex-col items-center gap-12 lg:flex-row"
      >
        {/* Profile Pic */}
        <div className="relative h-64 w-64 sm:h-72 sm:w-72">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/50 via-indigo-500/40 to-purple-500/40 opacity-70 blur-xl" />
          <Tilt
            tiltEnable
            glareEnable={false}
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="relative h-full w-full rounded-2xl border border-white/30 bg-slate-900/40 shadow-2xl shadow-black/60"
          >
            <img
              src={ProfilePic}
              alt="Profile"
              className="h-full w-full rounded-2xl object-cover"
            />
          </Tilt>
        </div>

        {/* Info Box */}
        <div className="flex-1 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40 backdrop-blur-xl sm:p-8">
          <h2 className="text-2xl font-bold text-blue-400 sm:text-3xl">
            Md Ammad Hussain
          </h2>
          <p className="text-sm text-gray-100 sm:text-base leading-relaxed">
            Full Stack Developer | MERN Stack Specialist. I enjoy turning complex
            ideas into beautiful and functional web applications. With experience
            in both frontend and backend, the focus is always on clean
            architecture, performance, and real-world impact.
          </p>
          <p className="text-sm text-gray-300 sm:text-base">
            Outside of writing code, a lot of time goes into learning new tools,
            refining problem‑solving, and exploring ways to create interfaces that
            feel smooth, intuitive, and reliable.
          </p>

          {/* Key Stats */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-white/5 px-3 py-3 border border-white/10">
              <Award size={22} className="text-blue-400" />
              <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-300">
                Experience
              </span>
              <span className="text-sm text-gray-100">1+ Year</span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-white/5 px-3 py-3 border border-white/10">
              <Star size={22} className="text-blue-400" />
              <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-300">
                Projects
              </span>
              <span className="text-sm text-gray-100">21+</span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-white/5 px-3 py-3 border border-white/10">
              <Code size={22} className="text-blue-400" />
              <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-300">
                Stack
              </span>
              <span className="text-sm text-gray-100">MERN & UI/UX</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-20 max-w-6xl"
      >
        <h3 className="mb-6 text-center text-2xl font-bold text-blue-400 md:mb-8">
          Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -2 }}
              className="cursor-pointer rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm shadow-black/30 backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-500/10"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects Section (simple images, no overlay) */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-20 max-w-6xl"
      >
        <h3 className="mb-8 text-center text-2xl font-bold text-blue-400">
          Featured Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((proj, idx) => (
            <Tilt
              key={idx}
              glareEnable={false}
              scale={1.05}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="h-56 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/40 shadow-2xl shadow-black/60"
            >
              <img
                src={proj}
                alt={`Project ${idx + 1}`}
                className="h-full w-full rounded-2xl object-contain"
              />
            </Tilt>
          ))}
        </div>
      </motion.section>

      {/* Contact / Call To Action */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl text-center"
      >
        <div className="rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-600/25 via-indigo-600/25 to-purple-600/25 p-6 shadow-lg shadow-black/40 sm:p-8">
          <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Let's Work Together!
          </h3>
          <p className="mb-6 text-sm text-gray-100 sm:text-base">
            Interested in collaborating on a project or hiring for your team?
            Share the idea—let's turn it into a clean, scalable product.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:scale-[1.05] active:scale-[0.97]"
          >
            Contact Me
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
