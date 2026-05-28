import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHtml5,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiFigma,
  SiPostman,
  SiVercel,
  SiVite,
  SiFramer,
} from "react-icons/si";

export const personalInfo = {
  name: "Mukesh Choudhary",
  firstName: "Mukesh",
  lastName: "Choudhary",
  roles: [
    "Frontend Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Full Stack Developer",
  ],
  tagline: "Building digital experiences that make a difference",
  shortBio:
    "I craft premium web applications with clean code, modern design, and exceptional user experiences.",
  email: "mukesh@example.com",
  location: "India",
  resumeLink: "#",
  socialLinks: {
    github: "https://github.com/mukeshchoudharyy08-tech",
    linkedin: "https://www.linkedin.com/in/mukesh-choudhary-453565381/",
    twitter: "https://twitter.com/mukeshchoudhary",
  },
};

export const aboutData = {
  description: [
    "I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless digital experiences. My journey in web development started with curiosity and has evolved into a professional pursuit of excellence.",
    "I specialize in building modern, responsive web applications using the MERN stack, with a focus on clean architecture, performance optimization, and intuitive user interfaces.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  ],
  highlights: [
    { label: "Public Repositories", value: "28+" },
    { label: "Technologies", value: "20+" },
    { label: "GitHub Followers", value: "10+" },
    { label: "Cups of Coffee", value: "∞" },
  ],
};

export const skillCategories = [
  {
    title: "Frontend",
    icon: FaReact,
    color: "#6366f1",
    skills: [
      { name: "React.js", icon: FaReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 80 },
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 75 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
      { name: "HTML5", icon: FaHtml5, level: 95 },
      { name: "CSS3", icon: FaCss3Alt, level: 90 },
      { name: "Framer Motion", icon: SiFramer, level: 78 },
    ],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    color: "#8b5cf6",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 85 },
      { name: "Express.js", icon: SiExpress, level: 85 },
      { name: "REST APIs", icon: SiPostman, level: 88 },
    ],
  },
  {
    title: "Database",
    icon: SiMongodb,
    color: "#06b6d4",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 70 },
      { name: "Redis", icon: SiRedis, level: 65 },
      { name: "Firebase", icon: SiFirebase, level: 75 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: FaGitAlt,
    color: "#f59e0b",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt, level: 90 },
      { name: "Docker", icon: FaDocker, level: 70 },
      { name: "AWS", icon: FaAws, level: 60 },
      { name: "Vercel", icon: SiVercel, level: 88 },
      { name: "Vite", icon: SiVite, level: 85 },
      { name: "Figma", icon: SiFigma, level: 72 },
    ],
  },
];

export const projects = [
  {
    title: "ColorPallet",
    description: "A project built by Mukesh Choudhary.",
    techStack: [
      "JavaScript"
    ],
    githubUrl: "https://github.com/mukeshchoudharyy08-tech/ColorPallet",
    liveUrl: "https://color-pallet-three.vercel.app",
    image: null,
    featured: true
  },
  {
    title: "Jeevan.AI",
    description: "A project built by Mukesh Choudhary.",
    techStack: [
      "TypeScript"
    ],
    githubUrl: "https://github.com/mukeshchoudharyy08-tech/Jeevan.AI",
    liveUrl: "https://jeevan-ai-eight.vercel.app",
    image: null,
    featured: true
  },
  {
    title: "smart-disaster-management",
    description: "A project built by Mukesh Choudhary.",
    techStack: [
      "C++"
    ],
    githubUrl: "https://github.com/mukeshchoudharyy08-tech/smart-disaster-management",
    liveUrl: "https://github.com/mukeshchoudharyy08-tech/smart-disaster-management",
    image: null,
    featured: true
  },
  {
    title: "Array-to-csv-expoter",
    description: "A project built by Mukesh Choudhary.",
    techStack: [
      "CSS"
    ],
    githubUrl: "https://github.com/mukeshchoudharyy08-tech/Array-to-csv-expoter",
    liveUrl: "https://github.com/mukeshchoudharyy08-tech/Array-to-csv-expoter",
    image: null,
    featured: true
  },
  {
    title: "online-ticket-booking-system",
    description: "A project built by Mukesh Choudhary.",
    techStack: [
      "C++"
    ],
    githubUrl: "https://github.com/mukeshchoudharyy08-tech/online-ticket-booking-system",
    liveUrl: "https://github.com/mukeshchoudharyy08-tech/online-ticket-booking-system",
    image: null,
    featured: true
  },
  {
    title: "C-grp-project",
    description: "A project built by Mukesh Choudhary.",
    techStack: [
      "C++"
    ],
    githubUrl: "https://github.com/mukeshchoudharyy08-tech/C-grp-project",
    liveUrl: "https://github.com/mukeshchoudharyy08-tech/C-grp-project",
    image: null,
    featured: true
  }
];

export const experience = [
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Freelance / Self-Employed",
    duration: "2024 - Present",
    description:
      "Building production-grade web applications for clients. Specializing in MERN stack development, responsive design, and performance optimization.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    organization: "Tech Startup",
    duration: "2023 - 2024",
    description:
      "Developed and maintained React-based web applications. Collaborated with the design team to implement pixel-perfect UIs and integrated REST APIs.",
    techStack: ["React", "JavaScript", "CSS", "Git"],
  },
  {
    type: "education",
    title: "Bachelor of Technology",
    organization: "Computer Science & Engineering",
    duration: "2020 - 2024",
    description:
      "Studied core computer science fundamentals including data structures, algorithms, database management, and software engineering principles.",
    techStack: ["C++", "Java", "Python", "SQL"],
  },
];

export const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: personalInfo.socialLinks.github },
  { name: "LinkedIn", icon: FaLinkedin, url: personalInfo.socialLinks.linkedin },
  { name: "Twitter", icon: FaTwitter, url: personalInfo.socialLinks.twitter },
];
