import React from "react";
import GlassIcons from "../custom-components/GlassIcons";
import {
  FileArchive,
  BookA,
  FolderHeart,
  CloudUpload,
  FilePenLine,
  ChartBarIncreasing,
} from "lucide-react";

const Footer = () => {
  const items = [
    { icon: <FileArchive />, color: "blue", label: "Files" },
    { icon: <BookA />, color: "purple", label: "Books" },
    { icon: <FolderHeart />, color: "red", label: "Health" },
    { icon: <CloudUpload />, color: "indigo", label: "Weather" },
    { icon: <FilePenLine />, color: "orange", label: "Notes" },
    { icon: <ChartBarIncreasing />, color: "green", label: "Stats" },
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950/95 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        {/* Top: glass icons strip */}
        <div className="flex justify-center">
          <div className="relative">
            <GlassIcons
              items={items}
              className="flex h-auto w-full items-center justify-center text-white"
            />
          </div>
        </div>

        {/* Middle: info columns */}
        <div className="mt-10 grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand / about */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold tracking-[0.25em] text-blue-400 uppercase">
              MD AMMAD HUSSAIN
            </h3>
            <p className="text-sm text-white/70">
              A modern full‑stack developer portfolio showcasing projects,
              experiments, and continuous learning across React, Express, and
              modern UI engineering.
            </p>
            <p className="text-xs text-white/40">
              Focused on clean code, smooth animations, and real‑world problem
              solving.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white/90">
              Quick navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Projects
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Experience
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Skills
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact / status */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white/90">
              Get in touch
            </h4>
            <p className="text-sm text-white/70">
              Open to exciting roles, freelance collaborations, and
              challenging projects.
            </p>
            <div className="space-y-1 text-sm text-white/70">
              <p>
                Email:{" "}
                <span className="font-medium text-white">
                  yourmail@example.com
                </span>
              </p>
              <p>Location: India</p>
            </div>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} MD Ammad Hussain. All rights reserved.
          </p>
          <p className="text-[11px]">
            Crafted with React, Vite, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
