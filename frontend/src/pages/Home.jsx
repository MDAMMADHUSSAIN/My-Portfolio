import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Antigravity from "../components/custom-components/Antigravity";
import TeamCard from "../components/TeamCard";
import Folder from "../components/custom-components/Folder";

// Assets
import Profile from "../assets/profile.jpg";
import OS from "../assets/OS.png";
import OSpdf from "../assets/pdfcertificates/ospdf.pdf";
import AI from "../assets/AI.png";
import AIpdf from "../assets/pdfcertificates/aipdf.pdf";
import PM from "../assets/PM.png";
import PMpdf from "../assets/pdfcertificates/pmpdf.pdf";
import CS from "../assets/CS.png";
import CSpdf from "../assets/pdfcertificates/cspdf.pdf";
import DSA from "../assets/DSA.png";
import DSApdf from "../assets/pdfcertificates/dsapdf.pdf";
import Python from "../assets/python.png";
import Pythonpdf from "../assets/pdfcertificates/python.pdf";

const Home = () => {
  const images1 = [
    <a href={OSpdf} download target="_blank" rel="noreferrer" key="os">
      <img
        src={OS}
        alt=""
        className="w-full h-full object-cover cursor-pointer rounded-xl"
      />
    </a>,
    <a href={AIpdf} download target="_blank" rel="noreferrer" key="ai">
      <img
        src={AI}
        alt=""
        className="w-full h-full object-cover cursor-pointer rounded-xl"
      />
    </a>,
    <a href={PMpdf} download target="_blank" rel="noreferrer" key="pm">
      <img
        src={PM}
        alt=""
        className="w-full h-full object-cover cursor-pointer rounded-xl"
      />
    </a>,
  ];

  const images2 = [
    <a href={CSpdf} download target="_blank" rel="noreferrer" key="cs">
      <img
        src={CS}
        alt=""
        className="w-full h-full object-cover cursor-pointer rounded-xl"
      />
    </a>,
    <a href={DSApdf} download target="_blank" rel="noreferrer" key="dsa">
      <img
        src={DSA}
        alt=""
        className="w-full h-full object-cover cursor-pointer rounded-xl"
      />
    </a>,
    <a href={Pythonpdf} target="_blank" rel="noreferrer" key="py">
      <img
        src={Python}
        alt=""
        className="w-full h-full object-cover cursor-pointer rounded-xl"
      />
    </a>,
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black text-white">
      {/* Antigravity Particle Background */}
      {/* Antigravity Particle Background */}
      <div className="fixed inset-0 -z-10">
        <Antigravity
          count={2500}
          magnetRadius={10}
          ringRadius={10}
          waveSpeed={0.5}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color={"#C71585"}
          autoAnimate={true}
          particleVariance={1.2}
        />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-10 lg:px-32 gap-16"
      >
        <div className="flex-1 space-y-6">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-400"
          >
            Hello, I'm <span className="text-white">Md Ammad Hussain</span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 font-[courier] text-lg md:text-xl"
          >
            A passionate Full Stack Developer | MERN Stack Specialist. I craft
            modern, scalable web apps with creativity & precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 mt-6 flex-wrap"
          >
            <a
              href="#certificates"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white font-semibold hover:scale-105 hover:text-blue-500 transform transition"
            >
              Browse Certificates
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-blue-400 rounded-xl text-blue-400 hover:bg-blue-400 hover:text-white transition transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 w-full max-w-md"
        >
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
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-xl"
              />
            </Tilt>
          </div>
        </motion.div>
      </motion.div>

      {/* Certificates Section */}
      <div id="certificates" className="max-w-6xl mx-auto py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-30">
          My Certificates
        </h2>
        <div className="flex flex-wrap justify-center gap-50">
          <Folder size={2} color="#5227FF" items={images1} />
          <Folder size={2} color="#5227FF" items={images2} />
        </div>
      </div>

      {/* Who Am I Section */}
      <div className="max-w-6xl mx-auto py-32" id="about">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-12">
          Who Am I?
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 text-gray-100 space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-blue-400">M</span>D{" "}
              <span className="text-blue-400">A</span>MMAD{" "}
              <span className="text-blue-400">H</span>USSAIN
            </h3>
            <p className="text-gray-300">
              I am a Full Stack Developer passionate about building modern web
              applications, learning new technologies, and collaborating with
              teams to deliver scalable, high-quality solutions. I focus on
              combining creative design with efficient coding practices to craft
              seamless user experiences.
            </p>
          </div>
          <div className="flex-1">
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
