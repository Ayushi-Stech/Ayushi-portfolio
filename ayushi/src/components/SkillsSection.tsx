import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Layout, Server, Terminal, Shield, Cloud, Brain, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal size={18} className="text-primary" />,
    color: "from-primary to-purple-400",
    border: "border-primary/20",
    bg: "bg-primary/5",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layout size={18} className="text-secondary" />,
    color: "from-secondary to-pink-400",
    border: "border-secondary/20",
    bg: "bg-secondary/5",
    skills: ["Spring Boot", "React.js", "Node.js", "FastAPI", "Electron.js"],
  },
  {
    title: "AI / Machine Learning",
    icon: <Brain size={18} className="text-blue-400" />,
    color: "from-blue-400 to-cyan-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    skills: ["Predictive Modeling", "Anomaly Detection", "NLP Awareness", "AI Feature Integration"],
  },
  {
    title: "Databases",
    icon: <Database size={18} className="text-emerald-400" />,
    color: "from-emerald-400 to-green-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    skills: ["MySQL", "Relational Schema Design", "Query Optimization", "ORM-style Data Modeling"],
  },
  {
    title: "APIs & Real-Time Systems",
    icon: <Server size={18} className="text-orange-400" />,
    color: "from-orange-400 to-amber-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
    skills: ["REST API Design", "WebSockets", "Postman", "HTTP", "CORS Debugging"],
  },
  {
    title: "Security",
    icon: <Shield size={18} className="text-red-400" />,
    color: "from-red-400 to-rose-400",
    border: "border-red-400/20",
    bg: "bg-red-400/5",
    skills: ["AES-256-CBC", "AES-128", "Fernet", "Post-Quantum Cryptography", "ML-KEM/Kyber", "FIPS 203"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={18} className="text-sky-400" />,
    color: "from-sky-400 to-blue-400",
    border: "border-sky-400/20",
    bg: "bg-sky-400/5",
    skills: ["AWS Cloud Foundations", "Docker", "Git", "GitHub", "CI/CD Awareness"],
  },
  {
    title: "Core Computer Science",
    icon: <Layers size={18} className="text-indigo-400" />,
    color: "from-indigo-400 to-violet-400",
    border: "border-indigo-400/20",
    bg: "bg-indigo-400/5",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "SDLC", "Agile", "Computer Networks", "Operating Systems"],
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Server size={13} />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive overview of my technical proficiencies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-6 rounded-3xl border ${category.border} ${category.bg} flex flex-col h-full hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] shadow-inner">
                  {category.icon}
                </div>
                <h3 className="font-bold text-foreground text-sm tracking-wide">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[11px] font-medium rounded-lg bg-white/[0.03] border border-white/[0.08] text-foreground/80 hover:bg-white/[0.1] hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
