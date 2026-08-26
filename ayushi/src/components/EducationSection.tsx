import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 mx-auto shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            <GraduationCap size={32} className="text-primary" />
          </motion.div>
          <h2 className="section-title">Education</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Academic background & foundation
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Degree 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="relative glass-card rounded-3xl p-8 md:p-10 border border-primary/25 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-400 to-secondary" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-3 gap-8 items-start relative z-10">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30 flex items-center gap-1.5">
                    <Calendar size={13} />
                    2023 – 2027
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <Award size={13} />
                    Class of 2027
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    Bachelor of Technology in Computer Science & Engineering
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-primary font-medium text-lg">
                    <span>Parul University</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                    <MapPin size={14} className="text-muted-foreground" />
                    <span>Gujarat, India</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white/[0.02] p-6 rounded-2xl border border-white/[0.06]">
                <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                    CGPA
                  </div>
                  <div className="text-4xl font-extrabold gradient-text">
                    7.65 / 10
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Degree 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="relative glass-card rounded-3xl p-8 md:p-10 border border-secondary/25 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(217,70,239,0.15)]"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-pink-400 to-primary" />

            <div className="grid lg:grid-cols-3 gap-8 items-start relative z-10">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/30 flex items-center gap-1.5">
                    <Calendar size={13} />
                    2020 – 2022
                  </span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                    Class XII
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-secondary font-medium text-lg">
                    <span>Kendriya Vidyalaya</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white/[0.02] p-6 rounded-2xl border border-white/[0.06]">
                <div className="text-center p-4 rounded-xl bg-secondary/10 border border-secondary/20 shadow-[0_0_20px_rgba(217,70,239,0.15)]">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                    Percentage
                  </div>
                  <div className="text-4xl font-extrabold text-secondary">
                    70%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
