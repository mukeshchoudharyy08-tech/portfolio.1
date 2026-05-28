import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { HiChevronUp } from "react-icons/hi";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-border/30">
      {/* Back to Top */}
      <div className="flex justify-center -mt-6">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full glass border border-dark-border/50 text-text-muted hover:text-primary hover:border-primary/40 transition-all cursor-pointer shadow-lg shadow-black/20"
        >
          <HiChevronUp className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold font-heading tracking-tight cursor-default"
          >
            <span className="gradient-text">&lt;</span>
            <span className="text-text-primary">{personalInfo.firstName}</span>
            <span className="gradient-text"> /&gt;</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-lg text-text-dim hover:text-primary transition-colors"
                title={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-text-dim flex items-center gap-1.5">
            © {currentYear} {personalInfo.name}. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart className="w-3 h-3 text-red-500" />
            </motion.span>
          </p>
        </div>

        {/* Bottom gradient line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </footer>
  );
}
