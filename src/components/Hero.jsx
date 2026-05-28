import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { personalInfo } from "../data/portfolioData";
import { useEffect, useState } from "react";

function RoleTyper({ roles }) {
  const [currentRole, setCurrentRole] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(role.slice(0, text.length + 1));
          if (text.length === role.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(role.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRole, roles]);

  return (
    <span className="gradient-text">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
}

// Floating orbs background
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large primary orb */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, #6366f1 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Secondary orb */}
      <motion.div
        className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {/* Accent orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}

// Particle grid
function ParticleGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div className="bg-dots absolute inset-0" />
    </div>
  );
}

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <FloatingOrbs />
      <ParticleGrid />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-text-secondary font-medium">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text">{personalInfo.firstName}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-text-secondary mb-6 h-[1.5em]"
            >
              <RoleTyper roles={personalInfo.roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-text-muted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollTo("#projects")}
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollTo("#contact")}
                className="px-7 py-3.5 rounded-xl font-semibold border border-dark-border text-text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>

              <motion.a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-text-muted hover:text-primary transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaDownload className="text-sm" />
                Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Spinning ring */}
              <div className="absolute inset-0 -m-4">
                <svg
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 300 300"
                >
                  <defs>
                    <linearGradient
                      id="ringGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="none"
                    stroke="url(#ringGradient)"
                    strokeWidth="1"
                    strokeDasharray="20 10"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Profile image placeholder / Code block visual */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden gradient-border animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-dark-surface to-dark-card flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="font-mono text-sm text-text-dim mb-2">
                      {"// Hello World"}
                    </div>
                    <div className="font-mono text-xs text-primary">
                      const <span className="text-accent">developer</span> ={" "}
                      {"{"}
                    </div>
                    <div className="font-mono text-xs text-text-muted pl-4">
                      name: <span className="text-green-400">"Mukesh"</span>,
                    </div>
                    <div className="font-mono text-xs text-text-muted pl-4">
                      passion: <span className="text-green-400">"Code"</span>,
                    </div>
                    <div className="font-mono text-xs text-text-muted pl-4">
                      coffee: <span className="text-amber-400">true</span>
                    </div>
                    <div className="font-mono text-xs text-primary">
                      {"}"};
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-mono text-accent">
                  React.js ⚛️
                </span>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-4 glass-card px-3 py-2 rounded-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-xs font-mono text-secondary">
                  Node.js 🚀
                </span>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 glass-card px-3 py-2 rounded-lg"
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <span className="text-xs font-mono text-primary-light">
                  MongoDB 🍃
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <HiChevronDown className="w-6 h-6 text-text-dim" />
      </motion.button>
    </section>
  );
}
