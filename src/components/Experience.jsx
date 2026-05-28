import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data/portfolioData";
import { SectionHeading } from "./About";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";

function TimelineItem({ item, index, isInView }) {
  const isLeft = index % 2 === 0;
  const isWork = item.type === "work";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      className={`relative flex items-center gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:flex-row`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} w-full`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
        >
          {/* Duration badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
              isWork
                ? "bg-primary/10 text-primary border border-primary/20"
                : "bg-accent/10 text-accent border border-accent/20"
            }`}
          >
            {isWork ? (
              <HiBriefcase className="w-3 h-3" />
            ) : (
              <HiAcademicCap className="w-3 h-3" />
            )}
            {item.duration}
          </div>

          <h3 className="text-lg font-bold font-heading text-text-primary mb-1">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-primary-light mb-3">
            {item.organization}
          </p>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Tech tags */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md bg-dark-bg/60 text-xs font-mono text-text-dim border border-dark-border/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex-shrink-0 hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
            isWork
              ? "bg-primary/20 border-2 border-primary/50"
              : "bg-accent/20 border-2 border-accent/50"
          }`}
        >
          {isWork ? (
            <HiBriefcase className="w-5 h-5 text-primary" />
          ) : (
            <HiAcademicCap className="w-5 h-5 text-accent" />
          )}
        </motion.div>
      </div>

      {/* Empty space for the other side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-dark-surface/40" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading subtitle="My Journey" title="Experience & Education" />

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-accent/50 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experience.map((item, i) => (
              <TimelineItem
                key={item.title + item.duration}
                item={item}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Timeline End Dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: experience.length * 0.2 + 0.3 }}
            className="hidden md:flex justify-center mt-8"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
