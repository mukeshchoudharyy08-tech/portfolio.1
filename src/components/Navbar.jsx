import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo("#home")}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl md:text-2xl font-bold font-heading tracking-tight">
                <span className="gradient-text">&lt;</span>
                <span className="text-text-primary">
                  {personalInfo.firstName}
                </span>
                <span className="gradient-text"> /&gt;</span>
              </span>
            </motion.button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 cursor-pointer ${
                    activeSection === link.href.slice(1)
                      ? "text-primary-light"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden relative z-50 p-2 text-text-primary cursor-pointer"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-72 glass flex flex-col pt-24 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className={`py-3 px-4 text-left text-lg font-medium rounded-lg transition-colors cursor-pointer mb-1 ${
                    activeSection === link.href.slice(1)
                      ? "text-primary-light bg-primary/10"
                      : "text-text-muted hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}

              {/* Decorative line */}
              <div className="mt-auto mb-8">
                <div className="h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-transparent" />
                <p className="mt-4 text-xs text-text-dim text-center">
                  {personalInfo.name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
