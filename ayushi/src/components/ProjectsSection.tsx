import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Terminal, LayoutTemplate, ShieldCheck, Settings2, Code2, Sparkles, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Smart Attendance System with AI-Powered Insights",
    date: "2025 – 2026",
    description: "A full-stack attendance management platform featuring real-time presence tracking, and AI-powered attendance analytics.",
    techStack: ["Python", "Java", "Spring Boot", "React", "TypeScript", "MySQL", "REST APIs", "WebSocket"],
    features: [
      "Built a full-stack attendance platform using Spring Boot and React/TypeScript",
      "Designed a normalized MySQL schema and complete RESTful CRUD APIs",
      "Implemented WebSocket-based live presence tracking & real-time dashboard updates",
      "Integrated AI for predictive attendance risk scoring, anomaly detection, and natural-language insights",
      "Resolved complex Java/Gradle, CORS/ngrok, and TypeScript dependency issues"
    ],
    github: "https://github.com/Ayushi-Stech",
    icon: <Sparkles size={24} className="text-primary" />,
    color: "from-primary to-purple-400",
    border: "border-primary/30",
    bg: "bg-primary/5",
  },
  {
    title: "Secure Chat Application — Post-Quantum Cryptography",
    date: "January 2026",
    description: "A real-time secure messaging application implementing post-quantum cryptographic key exchange and encrypted communication.",
    techStack: ["Python", "FastAPI", "JavaScript ES6+", "liboqs", "ML-KEM/Kyber", "AES-256-CBC", "CryptoJS", "Postman"],
    features: [
      "Built the backend using FastAPI with modular object-oriented design principles",
      "Implemented ML-KEM/Kyber post-quantum key exchange (using liboqs-python, FIPS 203 ML-KEM concepts)",
      "Implemented client-side AES-256-CBC encryption via CryptoJS",
      "Validated APIs extensively with Postman"
    ],
    github: "https://github.com/Ayushi-Stech",
    icon: <ShieldCheck size={24} className="text-emerald-400" />,
    color: "from-emerald-400 to-teal-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/5",
  },
  {
    title: "Full-Stack Food Delivery Platform",
    date: "2025",
    description: "A full-stack food ordering and delivery platform featuring authentication, restaurant discovery, cart management, and order tracking.",
    techStack: ["Node.js", "MySQL", "JavaScript", "HTML", "CSS", "REST APIs"],
    features: [
      "Implemented robust user authentication, restaurant browsing, and shopping cart functionality",
      "Designed normalized MySQL database structures and optimized SQL queries",
      "Built RESTful Node.js APIs supporting CRUD operations and input validation",
      "Built a responsive frontend using HTML, CSS, and JavaScript"
    ],
    github: "https://github.com/Ayushi-Stech",
    icon: <LayoutTemplate size={24} className="text-orange-400" />,
    color: "from-orange-400 to-amber-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/5",
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Code2 size={13} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Key Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Full-stack applications highlighting system architecture, security, and AI integrations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`glass-card rounded-3xl border ${project.border} overflow-hidden group`}
            >
              <div className="p-8 md:p-10 grid lg:grid-cols-12 gap-8 items-center relative">
                <div className={`absolute top-0 right-0 w-64 h-64 ${project.bg} rounded-bl-full blur-3xl pointer-events-none -z-10`} />

                <div className="lg:col-span-8 space-y-5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`px-3 py-1 text-[11px] font-bold rounded-full bg-white/[0.05] border ${project.border} text-foreground/90 uppercase tracking-wider flex items-center gap-1.5`}>
                      {project.icon}
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.04] border border-white/[0.08] text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 space-y-2">
                    {project.features.map((feature, i) => (
                      <p key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end space-y-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.03] border ${project.border} hover:bg-white/[0.08] transition-all group/btn`}
                    >
                      <Github size={18} className="text-foreground/80 group-hover/btn:text-foreground" />
                      <span className="font-semibold text-sm">View Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
