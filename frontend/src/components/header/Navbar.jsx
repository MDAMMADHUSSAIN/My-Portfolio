import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/teams", label: "Teams" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-white/5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/40">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500 sm:text-base">
            MD AMMAD HUSSAIN
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-white">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "transition-colors duration-200 hover:text-blue-400",
                      isActive ? "text-blue-400" : "text-white/80",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-sm font-semibold">
            <Link
              to="/login"
              className="flex items-center gap-1.5 text-white/50 transition-colors hover:text-blue-600"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
            <span className="text-white/40">|</span>
            <Link
              to="/signup"
              className="flex items-center gap-1.5 text-white/50  transition-colors hover:text-blue-600"
            >
              <UserPlus className="h-4 w-4" />
              <span>Signup</span>
            </Link>
          </div>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to="/signup"
            className="hidden items-center gap-1.5 text-xs font-semibold text-[#f8f8f8] sm:inline-flex"
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span>Signup</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen right-to-left menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              aria-label="Close navigation"
            />

            {/* Fullscreen drawer */}
            <motion.aside
              className="fixed inset-0 right-0 z-[9999] flex h-screen w-screen flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white lg:hidden"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                },
              }}
              exit={{
                x: "100%",
                transition: { duration: 0.25, ease: "easeInOut" },
              }}
            >
              {/* Top bar inside drawer */}
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/40">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                    MD AMMAD HUSSAIN
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-md p-1.5 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Close navigation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Menu items */}
              <div className="flex flex-1 flex-col justify-between px-4 pb-6">
                <div>
                  <ul className="space-y-2 text-base font-medium sm:text-lg">
                    {navLinks.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            [
                              "block rounded-md px-3 py-2 transition-colors duration-200",
                              "hover:bg-white/10",
                              isActive
                                ? "bg-white/10 text-blue-400"
                                : "text-white/90",
                            ].join(" ")
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 text-sm font-semibold sm:text-base">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-[#f8f8f8] hover:bg-white/10 hover:text-[#222]"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-[#f8f8f8] hover:bg-white/10 hover:text-[#222]"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Signup</span>
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
