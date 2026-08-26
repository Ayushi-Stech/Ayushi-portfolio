import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { GraduationCap, Mail, Sparkles, Github, Linkedin, ArrowRight, Code2, Award, Terminal } from "lucide-react";

const typewriterTexts = [
  "Computer Science Engineer",
  2000,
  "Full-Stack Developer",
  2000,
  "AI/ML Enthusiast",
  2000,
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            >
              <Sparkles size={13} className="animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-3 leading-tight"
            >
              Hi, I'm <span className="gradient-text block mt-1">Ayushi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base font-semibold text-foreground/80 mb-4 tracking-wide"
            >
              Gujarat, India
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl font-display text-muted-foreground mb-6 h-8 flex items-center gap-2"
            >
              <Terminal size={18} className="text-primary" />
              <TypeAnimation
                sequence={typewriterTexts}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
            >
              Computer Science undergraduate (B.Tech, 2023–2027) with a builder mindset and a strong interest in AI/ML and emerging technologies. Comfortable across the stack in Python, Java (Spring Boot), React.js, TypeScript, and Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              <span className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-semibold flex items-center gap-1.5">
                <GraduationCap size={14} /> CGPA: 7.65
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                <Code2 size={13} />
                Full-Stack & Backend
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold">
                Class of 2027
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-3.5 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #D946EF)",
                }}
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                title="Contact Me"
              >
                <Mail size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 text-xs text-muted-foreground"
            >
              <span>Connect:</span>
              <a
                href="https://github.com/Ayushi-Stech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-card border border-border hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all"
                title="GitHub @Ayushi-Stech"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayushi-shrivastava-6329283a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-card border border-border hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div
              className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(217,70,239,0.08) 50%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-primary/20"
              style={{ borderStyle: "dashed" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-[270px] h-[270px] md:w-[340px] md:h-[340px] rounded-full border border-secondary/20"
              style={{ borderStyle: "dotted" }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-primary/40 shadow-[0_0_40px_rgba(139,92,246,0.35)]"
            >
              <img
                src="/ayushi.jpeg"
                alt="Ayushi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 left-0 md:-left-4 glass-card px-3.5 py-2 rounded-2xl border border-secondary/30 shadow-xl text-xs font-semibold text-foreground backdrop-blur-xl"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-secondary"><GraduationCap size={14} /></span>
                <span>CGPA</span>
                <span className="text-secondary font-bold">7.65</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-[11px] text-muted-foreground hover:text-primary transition-colors"
        >
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-primary/40 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
