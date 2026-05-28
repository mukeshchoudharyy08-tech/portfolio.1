import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import { SectionHeading } from "./About";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className={`group relative ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/30">
        {/* Project Image / Gradient Placeholder */}
        <div className="relative h-48 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
            style={{
              backgroundImage: project.image ? `url(${project.image})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-dots opacity-20" />

          {/* Animated code lines decoration */}
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-40 group-hover:opacity-60 transition-opacity">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="h-2 rounded-full bg-gradient-to-r from-primary/40 to-transparent my-1"
                style={{ width: `${40 + Math.random() * 40}%` }}
                animate={isHovered ? { x: [0, 10, 0], opacity: [0.4, 0.8, 0.4] } : {}}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold backdrop-blur-sm">
              ⭐ Featured
            </div>
          )}

          {/* Hover overlay with buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-dark-bg/60 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="p-3 rounded-full glass border border-white/10 text-white hover:bg-primary/20 hover:border-primary/40 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="p-3 rounded-full glass border border-white/10 text-white hover:bg-accent/20 hover:border-accent/40 transition-colors"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold font-heading text-text-primary group-hover:text-primary-light transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-dark-bg/60 text-xs font-mono text-text-dim border border-dark-border/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-2 border-t border-dark-border/20">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
              Source Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="My Work" title="Featured Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl font-semibold border border-dark-border text-text-secondary hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer"
            >
              {showAll ? "Show Less" : `View All Projects (${projects.length})`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
