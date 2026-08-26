import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2, Cpu, Globe, Server, Database, Award, Sparkles, CheckCircle2 } from "lucide-react";

const corePillars = [
  {
    icon: <Server size={18} className="text-primary" />,
    title: "Backend & REST APIs",
    description: "Building scalable services with Java (Spring Boot), Node.js, FastAPI, and robust MySQL databases.",
  },
  {
    icon: <Globe size={18} className="text-secondary" />,
    title: "Full-Stack Development",
    description: "Creating responsive, real-time web applications with React.js, TypeScript, and WebSockets.",
  },
  {
    icon: <Cpu size={18} className="text-blue-400" />,
    title: "AI/ML Integration",
    description: "Integrating predictive scoring, anomaly detection, and natural language insights into applications.",
  },
  {
    icon: <Code2 size={18} className="text-emerald-400" />,
    title: "Applied Cryptography",
    description: "Implementing post-quantum key exchange (ML-KEM/Kyber) and robust AES encryption paradigms.",
  },
];

const statItems = [
  {
    icon: <GraduationCap size={22} />,
    label: "Cumulative CGPA",
    value: "7.65",
    subtext: "Parul University",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "Gujarat",
    subtext: "India",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Sparkles size={13} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technical background, core engineering principles, and academic focus
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-primary/20 relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/15 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span>Engineering Mindset & Systems Builder</span>
              </h3>

              <p className="text-foreground/90 leading-relaxed text-sm md:text-base mb-4">
                I am a Computer Science undergraduate (B.Tech, 2023–2027) with a builder mindset and a strong interest in AI/ML and emerging technologies beyond routine coursework.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                I have independently designed and shipped original full-stack projects integrating AI-powered features — such as predictive scoring, anomaly detection, and natural-language insights — into live dashboards.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I am also experienced in applied cryptography, including post-quantum key exchange (ML-KEM/Kyber). I am comfortable working across the stack using Python, Java (Spring Boot), React.js, TypeScript, and Node.js, designing RESTful APIs and real-time systems using WebSockets.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {corePillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.04] transition-all flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2 font-semibold text-sm text-foreground">
                    {pillar.icon}
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {statItems.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`glass-card p-5 text-center border ${stat.border} rounded-2xl relative overflow-hidden transition-all`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bg} ${stat.color} mb-3 shadow-[0_0_15px_rgba(139,92,246,0.15)]`}>
                  {stat.icon}
                </div>
                <div className={`text-2xl font-bold ${stat.color} tracking-tight`}>{stat.value}</div>
                <div className="text-foreground font-medium text-xs mt-1">{stat.label}</div>
                <div className="text-muted-foreground/70 text-[11px] mt-0.5">{stat.subtext}</div>
              </motion.div>
            ))}

            <div className="col-span-2 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 text-foreground font-semibold text-xs mb-1">
                <CheckCircle2 size={14} className="text-primary" />
                <span>Core Competencies Summary</span>
              </div>
              <p>• Strong command of Computer Science fundamentals: Data Structures, Algorithms, OOP, and Networks.</p>
              <p>• Practical experience in AI Integration: Predictive Modeling, Anomaly Detection, and NLP Awareness.</p>
              <p>• Backend architecture: Relational schema design, query optimization, and RESTful CRUD APIs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
