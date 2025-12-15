import React from "react";
import Antigravity from "../components/custom-components/Antigravity";
import TeamCard from "../components/TeamCard";
import CardSwap, { Card } from "../components/custom-components/CardSwap";
import University from "../assets/AKTU.jpg";
import Project from "../assets/project.png";
import Interest from "../assets/interest.png";
import Mern1 from "../assets/mern.webp";
import Mern2 from "../assets/mern2.png";
import Webtech from "../assets/webtech.webp";
import Folder from "../components/custom-components/Folder";

const Home = () => {
  return (
    <div className="w-full h-screen">
      {/* Antigravity Effect */}
      <div style={{ width: "100%", height: "60%", position: "relative" }}>
        <Antigravity
          count={2100}
          magnetRadius={7}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color={"#C71585"}
          autoAnimate={false}
          particleVariance={1}
        />
      </div>
      {/* Card Swap Component */}

      <div className="h-3/5 w-[90%] relative my-40 flex flex-wrap px-40 justify-between">
        <div className="flex flex-col gap-3 w-[60%]">
          <h3 className="text-white text-bold uppercase tracking-widest ">
            <span className="text-blue-400 text-xl">Hello, </span>Its{" "}
            <span className="text-blue-400">M</span>d{" "}
            <span className="text-blue-400">A</span>mmad{" "}
            <span className="text-blue-400">H</span>ussain
          </h3>
          <p className="text-white font-[courier]">
            I am a dedicated Full Stack Developer with strong expertise in the
            MERN stack, focused on building modern, scalable, and user-centric
            web applications. I actively learn and implement advanced web
            development tools and techniques, translating complex requirements
            into clean, efficient, and maintainable solutions. Currently working
            as a Full Stack Developer, I enjoy tackling challenging problems and
            staying up to date with emerging technologies.
          </p>
          <p className="text-white">
            I have a strong passion for collaborating on web development
            projects, where teamwork and shared learning drive better outcomes.
            I enjoy working with designers, frontend and backend developers to
            build scalable, user-friendly applications. Collaboration allows me
            to exchange ideas, follow best coding practices, and contribute
            meaningfully to end-to-end web solutions. I am always eager to be
            part of projects that challenge my skills and encourage innovation
            in web technologies.
          </p>

          <div className="h-[600px] fixed top-120 left-48">
            <Folder size={1} color="#5227FF" className="custom-folder" />
          </div>
        </div>

        <CardSwap
          cardDistance={60}
          verticalDistance={90}
          delay={5000}
          pauseOnHover={true}
        >
          <Card className="text-blue-500 p-8">
            <h3>Btech University</h3>
            <p className="text-white text-sm">
              Dr. APJ Abdul Kalam Technical University | Computer Science
              Engineering | 2020 -2024 |
            </p>
            <br />
            <img
              src={University}
              alt="AKTU"
              className="w-full h-[80%] object-fill object-center"
            />
          </Card>
          <Card className="text-blue-500 p-8">
            <h3>University Project</h3>
            <p className="text-white text-sm">
              AI-Based Text Recognition System | Model Training & Evaluation |
              Final Year Project
            </p>
            <br />
            <img
              src={Project}
              alt="AKTU"
              className="w-full h-[80%] object-fill object-center"
            />
          </Card>
          <Card className="text-blue-500 p-8">
            <h3>Career | Skills & Interest</h3>
            <p className="text-white text-sm">
              MERN Stack Specialist | Web Technology Enthusiast |
              High-Performance CSR & SSR Optimization
            </p>
            <br />
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <img
                src={Interest}
                alt="AKTU"
                className="w-full h-[80%] object-fill object-center"
              />
              <img
                src={Mern1}
                alt="AKTU"
                className="w-full h-[80%] object-fill object-center"
              />
              <img
                src={Mern2}
                alt="AKTU"
                className="w-full h-[80%] object-fill object-center"
              />
              <img
                src={Webtech}
                alt="AKTU"
                className="w-full h-[80%] object-fill object-center"
              />
            </div>
          </Card>
        </CardSwap>
      </div>
      {/* Our Team Card */}
      <div>
        <h1 className="text-blue-500 text-center text-bold text-2xl my-21 items-center justify-center">
          Our Team Members
        </h1>
        <TeamCard />
      </div>
    </div>
  );
};

export default Home;
