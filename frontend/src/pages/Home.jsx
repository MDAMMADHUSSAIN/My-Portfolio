import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import UserCard from "../components/UserCard";
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
        alt="Operating System Certificate"
        className="h-full w-full cursor-pointer rounded-xl object-cover"
      />
    </a>,
    <a href={AIpdf} download target="_blank" rel="noreferrer" key="ai">
      <img
        src={AI}
        alt="AI Certificate"
        className="h-full w-full cursor-pointer rounded-xl object-cover"
      />
    </a>,
    <a href={PMpdf} download target="_blank" rel="noreferrer" key="pm">
      <img
        src={PM}
        alt="Project Management Certificate"
        className="h-full w-full cursor-pointer rounded-xl object-cover"
      />
    </a>,
  ];

  const images2 = [
    <a href={CSpdf} download target="_blank" rel="noreferrer" key="cs">
      <img
        src={CS}
        alt="Computer Science Certificate"
        className="h-full w-full cursor-pointer rounded-xl object-cover"
      />
    </a>,
    <a href={DSApdf} download target="_blank" rel="noreferrer" key="dsa">
      <img
        src={DSA}
        alt="DSA Certificate"
        className="h-full w-full cursor-pointer rounded-xl object-cover"
      />
    </a>,
    <a href={Pythonpdf} target="_blank" rel="noreferrer" key="py">
      <img
        src={Python}
        alt="Python Certificate"
        className="h-full w-full cursor-pointer rounded-xl object-cover"
      />
    </a>,
  ];

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

  const projects = [
    {
      name: "Project One",
      desc: "Integrating soon",
      link: "#",
    },
    {
      name: "Project Two",
      desc: "Integrating soon",
      link: "#",
    },
    {
      name: "Project Three",
      desc: "Integrating soon",
      link: "#",
    },
  ];

  const testimonials = [
    {
      name: "Client X",
      feedback: "Ammad is a fantastic developer, highly recommended!",
    },
    {
      name: "Client Y",
      feedback: "Worked with Ammad on multiple projects. Great skills!",
    },
    {
      name: "Client Z",
      feedback: "Delivered beyond expectations, very professional.",
    },
  ];

  const services = [
    {
      title: "Full‑Stack Web Apps",
      desc: "End‑to‑end development of modern, scalable MERN stack applications with clean architecture.",
    },
    {
      title: "API Design & Integration",
      desc: "RESTful APIs, authentication, and integrations with third‑party services and databases.",
    },
    {
      title: "UI/UX & Micro‑Interactions",
      desc: "Smooth, interactive interfaces using Tailwind CSS and Framer Motion animations.",
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Foundation of Web Development",
      desc: "Initiated the web development journey by learning HTML, CSS, and JavaScript, building a clear understanding of core frontend concepts, browser behavior, and the fundamentals of creating simple, responsive user interfaces.",
    },
    {
      year: "2023",
      title: "Explored MERN stack",
      desc: "Engineered multiple end-to-end MERN applications with a strong focus on scalable system design, optimized backend architectures, secure authentication flows, and efficient API development. Demonstrated deep understanding of real-world application workflows, performance considerations, and production-ready development practices.",
    },
    {
      year: "2024",
      title:
        "Successfully completed a Bachelor of Technology (B.Tech) in Computer Science and Engineering with a strong foundation in core computer science principles.",
      desc: "Built strong foundations in core Computer Science subjects including Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, and Software Engineering || Developed strong problem-solving and programming skills through C/C++, Object-Oriented Programming, and system-level concepts such as memory management and process scheduling || Gained exposure to modern computing areas including Web Technologies, Cloud Computing, Artificial Intelligence, and Machine Learning fundamentals.",
    },
    {
      year: "2025 - Present",
      title: "Full Stack Developer",
      desc: "Working as a full stack developer in an enterprise-level organization, contributing to the design, development, and maintenance of scalable web applications and end-to-end solutions.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black text-white">
      {/* Hero Section */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center gap-12 px-4 pt-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-extrabold text-blue-400 sm:text-4xl md:text-5xl"
          >
            Hello, I'm <span className="text-white">Md Ammad Hussain</span>
          </motion.h1>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base font-mono text-gray-300 sm:text-lg md:text-xl"
          >
            A passionate Full Stack Developer | MERN Stack Specialist. I craft
            modern, scalable web apps with creativity & precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#certificates"
              className="transform rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:text-blue-100 sm:text-base"
            >
              Browse Certificates
            </a>
            <a
              href="/contact"
              className="transform rounded-xl border border-blue-400 px-6 py-3 text-sm font-semibold text-blue-400 transition hover:scale-105 hover:bg-blue-400 hover:text-white sm:text-base"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72">
            <Tilt
              tiltEnable
              glareEnable={false}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="h-full w-full rounded-xl border border-white/30 shadow-2xl"
            >
              <img
                src={Profile}
                alt="Profile"
                className="h-full w-full rounded-xl object-cover"
              />
            </Tilt>
          </div>
        </motion.div>
      </section>

      {/* 3D Lanyard Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Interactive ID
          </p>
          <h2 className="text-3xl font-bold text-blue-400 md:text-4xl">
            3D Developer Badge
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">
            Drag the badge around to feel the physics. Replace this 3D card with
            your own event pass, portfolio ID, or any creative visual you like.
          </p>
        </div>
      </section>

      {/* Services Section (dummy) */}
      <section
        id="services"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-blue-400 md:text-4xl">
          What I Do
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/5 p-6 shadow-lg shadow-black/40 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10"
            >
              <h3 className="mb-2 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section (React Bits Folder) */}
      <section
        id="certificates"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Certificates
          </p>
          <h2 className="text-3xl font-bold text-blue-400 md:text-4xl">
            My Certifications
          </h2>
          <p className="max-w-2xl text-sm text-gray-300 sm:text-base">
            All major certifications grouped into interactive folders. Click any
            preview to open or download the certificate in a new tab.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Core Computer Science
            </h3>
            <p className="text-sm text-gray-300">
              Completed certifications that reinforce key technical and
              professional skills, including:
              <br />• <strong>Operating Systems:</strong> Overview,
              Administration, and Security (IBM)
              <br />• <strong>AI for Everyone:</strong>Fundamentals of
              Artificial Intelligence (DeepLearning.AI)
              <br />• <strong>Foundations of Project Management:</strong> Core
              principles and practices (Google)
            </p>

            <div className="mt-20 flex justify-center">
              <Folder size={2} color="#5227FF" items={images1} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Programming & Problem Solving
            </h3>

            <p className="text-sm text-gray-300">
              Completed certifications focused on programming, problem-solving,
              and cybersecurity fundamentals, including:
              <br />•{" "}
              <strong>
                Introduction to Cyber Security: Tools and Cyber Attacks
              </strong>{" "}
              (IBM)
              <br />•{" "}
              <strong>
                Programming for Everybody: Getting Started with Python
              </strong>{" "}
              (University of Michigan)
              <br />• <strong>Data Structures</strong> (UC San Diego / National
              Research University)
            </p>

            <div className="mt-20 flex justify-center">
              <Folder size={2} color="#5227FF" items={images2} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-blue-400 md:text-4xl">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="transform cursor-pointer rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-105 hover:text-blue-400 sm:px-6 sm:py-3 sm:text-base"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-blue-400 md:text-4xl">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="transform rounded-xl bg-white/10 p-6 shadow-lg shadow-black/40 backdrop-blur-md transition hover:-translate-y-1 hover:scale-[1.02]"
            >
              <h3 className="mb-2 text-lg font-bold text-white">
                {project.name}
              </h3>
              <p className="mb-4 text-sm text-gray-300">{project.desc}</p>
              <a
                href={project.link}
                className="text-sm font-semibold text-blue-400 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section
        id="experience"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-blue-400 md:text-4xl">
          Experience Timeline
        </h2>
        <div className="space-y-6 border-l border-blue-500/40 pl-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-4">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-blue-500 bg-slate-900" />
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                {item.year}
              </p>
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-blue-400 md:text-4xl">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="w-full max-w-sm transform rounded-xl bg-white/10 p-6 shadow-lg shadow-black/40 backdrop-blur-md transition hover:-translate-y-1 hover:scale-[1.02]"
            >
              <p className="mb-4 text-sm text-gray-300">"{t.feedback}"</p>
              <p className="text-sm font-bold text-white">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Am I Section */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            About
          </p>
          <h2 className="text-3xl font-bold text-blue-400 md:text-4xl">
            Who Am I?
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center">
          {/* Text / story */}
          <div className="space-y-5 text-gray-100">
            <h3 className="text-xl font-bold sm:text-2xl">
              <span className="text-blue-400">M</span>D{" "}
              <span className="text-blue-400">A</span>MMAD{" "}
              <span className="text-blue-400">H</span>USSAIN
            </h3>
            <p className="text-sm text-gray-300 sm:text-base">
              I began my journey in web development by learning HTML, CSS, and
              JavaScript, building a strong foundation in core programming and
              problem-solving. Over time, I expanded my skills through
              certifications in Operating Systems, AI, Project Management, and
              Data Structures, while exploring full-stack development and
              real-world applications with the MERN stack. I am motivated by
              solving challenging problems and creating efficient, scalable
              solutions, and I aim to contribute to impactful software projects
              that combine technical excellence with practical value.
            </p>
            <p className="text-sm text-gray-300 sm:text-base">
              I enjoy working with the MERN stack (MongoDB, Express, React,
              Node.js) to build scalable web applications and real-world
              solutions. I am particularly passionate about developing
              dashboards, SaaS applications, and responsive user interfaces that
              solve practical problems. My long-term goal is to grow as a
              full-stack developer, contributing to innovative software products
              while continuously learning and mastering new technologies.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                  Current focus
                </p>
                <p className="text-sm text-gray-200">
                  Currently working as a full-stack developer at an
                  enterprise-grade automotive company in Kuwait City. As an
                  early-career professional, I am gaining hands-on experience in
                  building and maintaining scalable web applications,
                  contributing to real-world projects, and strengthening my
                  expertise in full-stack development.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                  Strengths
                </p>
                <p className="text-sm text-gray-200">
                  Strong problem-solving and analytical skills, proficiency in
                  building clean and responsive user interfaces, and a focus on
                  developing efficient, high-performance full-stack
                  applications.
                </p>
              </div>
            </div>
          </div>

          {/* Visual card / UserCard */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/40 backdrop-blur-md">
              <UserCard />
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 p-6 text-center shadow-lg shadow-black/40 sm:p-8">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Ready to build something impactful?
          </h2>
          <p className="mb-6 text-sm text-gray-200 sm:text-base">
            Replace this section with your primary call to action – job
            opportunities, collaborations, or freelance work.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 sm:text-base"
          >
            Let’s Connect
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
