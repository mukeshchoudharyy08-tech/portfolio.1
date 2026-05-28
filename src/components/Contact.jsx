import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiMail, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { personalInfo, socialLinks } from "../data/portfolioData";
import { SectionHeading } from "./About";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Get In Touch" title="Contact Me" />

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-heading mb-4">
                Let's work <span className="gradient-text">together</span>
              </h3>
              <p className="text-text-muted leading-relaxed">
                I'm always excited to collaborate on interesting projects.
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <HiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-text-dim uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm text-text-secondary group-hover:text-primary-light transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl"
              >
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <HiLocationMarker className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-text-dim uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm text-text-secondary">
                    {personalInfo.location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-text-dim mb-4 font-mono">
                // Find me online
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass-card rounded-xl text-text-muted hover:text-primary hover:border-primary/30 transition-all"
                    title={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs text-text-dim uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg/60 border border-dark-border/50 text-text-primary text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs text-text-dim uppercase tracking-wider mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-bg/60 border border-dark-border/50 text-text-primary text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs text-text-dim uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-dark-bg/60 border border-dark-border/50 text-text-primary text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="block text-xs text-text-dim uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-bg/60 border border-dark-border/50 text-text-primary text-sm placeholder:text-text-dim focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitted ? (
                  "Message Sent! ✓"
                ) : (
                  <>
                    Send Message
                    <HiPaperAirplane className="w-4 h-4 rotate-90" />
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-400 mt-4"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
