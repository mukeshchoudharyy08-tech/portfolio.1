import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories } from "../data/portfolioData";
import { SectionHeading } from "./About";

function SkillBar({ name, icon: Icon, level, delay, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono text-text-dim">{level}%</span>
      </div>
      <div className="h-2 bg-dark-bg rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section-padding relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-dark-surface/40" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading subtitle="What I Know" title="Skills & Technologies" />

        <div ref={ref}>
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((cat, i) => (
              <motion.button
                key={cat.title}
                onClick={() => setActiveTab(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === i
                    ? "text-white"
                    : "text-text-muted hover:text-text-secondary glass-card"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <cat.icon className="w-4 h-4" />
                  {cat.title}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Category Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: `${skillCategories[activeTab].color}15`,
                  }}
                >
                  {(() => {
                    const Icon = skillCategories[activeTab].icon;
                    return (
                      <Icon
                        className="w-6 h-6"
                        style={{ color: skillCategories[activeTab].color }}
                      />
                    );
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-text-primary">
                    {skillCategories[activeTab].title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {skillCategories[activeTab].skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {skillCategories[activeTab].skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={i * 0.08}
                    isInView={true}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* All Technologies Mini Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12"
          >
            <p className="text-center text-sm text-text-dim mb-6 font-mono">
              {"< All Technologies />"}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories.flatMap((cat) =>
                cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg glass-card text-xs text-text-muted hover:text-text-primary transition-colors cursor-default"
                  >
                    <skill.icon className="w-3.5 h-3.5" />
                    {skill.name}
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
