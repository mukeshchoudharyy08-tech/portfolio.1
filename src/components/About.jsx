import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData, personalInfo } from "../data/portfolioData";
import { HiCode, HiLightningBolt, HiGlobe, HiHeart } from "react-icons/hi";

const passionItems = [
  { icon: HiCode, title: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: HiLightningBolt, title: "Performance", desc: "Optimized for speed & efficiency" },
  { icon: HiGlobe, title: "Responsive", desc: "Pixel-perfect on every device" },
  { icon: HiHeart, title: "User First", desc: "Designing for great experiences" },
];

function SectionHeading({ subtitle, title }) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary font-mono text-sm tracking-widest uppercase mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading"
      >
        {title.split(" ").map((word, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="gradient-text">
              {word}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
      />
    </div>
  );
}

export { SectionHeading };

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Get To Know" title="About Me" />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Terminal-style card */}
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-border/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-text-dim font-mono">
                  about-me.tsx
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-6 space-y-4">
                {aboutData.description.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    className="text-text-secondary leading-relaxed text-sm sm:text-base"
                  >
                    <span className="text-text-dim font-mono mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Stats & Passion */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.highlights.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card rounded-xl p-5 text-center group cursor-default"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Passion Items */}
            <div className="grid grid-cols-2 gap-4">
              {passionItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-muted mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
