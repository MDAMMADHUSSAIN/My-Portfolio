import React from "react";
import Antigravity from "../components/custom-components/Antigravity";
import TeamCard from "../components/TeamCard";
import CardSwap, { Card } from "../components/custom-components/CardSwap";
import University from "../assets/AKTU.jpg";
import Project from "../assets/project.png";
import Interest from "../assets/interest.png";
import Mern1 from "../assets/mern.webp";
import Mern2 from "../assets/mern2.png";
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
import Webtech from "../assets/webtech.webp";
import Folder from "../components/custom-components/Folder";
import GlassIcons from '../components/custom-components/GlassIcons'
import {FileArchive} from "lucide-react" 
import {BookA} from "lucide-react" 
import {FolderHeart} from "lucide-react" 
import {CloudUpload} from "lucide-react" 
import {FilePenLine} from "lucide-react" 
import {ChartBarIncreasing} from "lucide-react" 
import Footer from '../components/footer/Footer'
const Home = () => {
  const images1 = [
    <a href={OSpdf} download target="_blank" rel="noreferrer">
      <img
        src={OS}
        alt=""
        className="w-full h-full object-cover cursor-pointer"
      />
    </a>,
    <a href={AIpdf} download target="_blank" rel="noreferrer">
      <img
        src={AI}
        alt=""
        className="w-full h-full object-cover cursor-pointer"
      />
    </a>,
    <a href={PMpdf} download target="_blank" rel="noreferrer">
      <img
        src={PM}
        alt=""
        className="w-full h-full object-cover cursor-pointer"
      />
    </a>,
  ];
  const images2 = [
    <a href={CSpdf} download target="_blank" rel="noreferrer">
      <img
        src={CS}
        alt=""
        className="w-full h-full object-cover cursor-pointer"
      />
    </a>,
    <a href={DSApdf} download target="_blank" rel="noreferrer">
      <img
        src={DSA}
        alt=""
        className="w-full h-full object-cover cursor-pointer"
      />
    </a>,
    <a href={Pythonpdf} target="_blank" rel="noreferrer">
      <img
        src={Python}
        alt=""
        className="w-full h-full object-cover cursor-pointer"
      />
    </a>,
  ];
  // icons part
  const items = [
    { icon: <FileArchive />, color: "blue", label: "Files" },
    { icon: <BookA />, color: "purple", label: "Books" },
    { icon: <FolderHeart />, color: "red", label: "Health" },
    { icon: <CloudUpload />, color: "indigo", label: "Weather" },
    { icon: <FilePenLine />, color: "orange", label: "Notes" },
    { icon: <ChartBarIncreasing />, color: "green", label: "Stats" },
  ];

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
          <h2 className="text-blue-500 text-xl font-semibold text-center py-10">
            Browse my certificates below
          </h2>
          <div className="h-[100px] relative mt-20 flex flex-wrap justify-evenly gap-20">
            <Folder
              size={2}
              color="#5227FF"
              className="custom-folder"
              items={images1}
            />
            <Folder
              size={2}
              color="#5227FF"
              className="custom-folder"
              items={images2}
            />
          </div>
        </div>

        <CardSwap
          cardDistance={60}
          verticalDistance={90}
          delay={5000}
          pauseOnHover={true}
        >
          <Card className="text-blue-500 p-8">
            <h3 className="text-2xl">Btech University</h3>
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
          <Card className="text-blue-500 text-2xl p-4 overflow-clip">
            <h3>University Project</h3>
            <p className="text-white text-sm">
              AI-Based Text Recognition System | Model Training & Evaluation |
              Final Year Project
            </p>
            <br />
            <img
              src={Project}
              alt="AKTU"
              className="w-full h-[80%] object-contain object-center"
            />
          </Card>
          <Card className="text-blue-500 p-8 text-2xl">
            <h3>Career | Skills & Interest</h3>
            <p className="text-white text-sm">
              MERN Stack Specialist | Web Technology Enthusiast |
              High-Performance CSR & SSR Optimization
            </p>
            <br />
            <div className="grid grid-cols-2 grid-rows-2 gap-1">
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
      {/* who am i card */}
      <div className="mt-80 mb-0">
        <h1 className="text-blue-500 text-center font-extrabold text-2xl my-12 items-center justify-center tracking-widest">
          Who am i?
        </h1>
        <div className="flex bg-[#222] justify-evenly flex-wrap">
          <div className=" text-white w-[50vw]  gap-5 flex flex-col">
            <h1 className="text-xl font-bold">
              {" "}
              <span className="text-blue-400">M</span>D{" "}
              <span className="text-blue-400">A</span>MMAD{" "}
              <span className="text-blue-400">H</span>USSAIN
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto unde dolore nihil? Quidem eos facere, laboriosam dolore quasi libero fugiat a itaque dolorum. Recusandae saepe qui, itaque aliquid repellat nisi alias, accusantium dolore illo voluptatem voluptatum mollitia, corporis perferendis incidunt consequatur molestiae eaque non! Corporis, qui voluptate? Laborum atque quos tenetur provident porro totam nemo, dicta magni! Soluta provident vitae unde voluptatum, molestias distinctio itaque minus iste! Numquam illum nostrum sit ipsum eum fugit neque! Aliquid perferendis, quod maiores at quam recusandae, ipsa non officiis temporibus sapiente quo obcaecati, eveniet magni? Nostrum, amet? Nulla omnis veritatis deserunt voluptatem illum nihil repudiandae accusantium, nobis tenetur excepturi qui itaque eligendi eaque officiis id vitae totam illo ut. Incidunt suscipit a necessitatibus, soluta ratione voluptatem iste repudiandae tenetur minima placeat cum velit molestiae, aspernatur ipsam, omnis doloremque quia blanditiis exercitationem harum? Molestias, velit cumque quidem at hic repudiandae amet provident ratione cum nostrum quas, atque dicta expedita vel ipsum quae reiciendis voluptatum, nobis quasi. Illum aperiam suscipit laboriosam maxime cumque corporis labore aut, odio tempora! Nihil eos veniam possimus officiis, vitae sapiente aliquam omnis officia iure recusandae dolores ab iusto nobis veritatis sit dolore consequuntur repellat placeat. Quam illo pariatur eaque consequuntur possimus?
            </p>
          </div>
          <TeamCard />
        </div>
      </div>
     <Footer />
    </div>
  );
};

export default Home;
