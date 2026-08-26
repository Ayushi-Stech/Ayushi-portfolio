import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  description?: string;
  topics?: string[];
  gradient: string;
  border: string;
  badgeBg: string;
  badgeColor: string;
  glow: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    border: "border-blue-500/30",
    badgeBg: "bg-blue-500/15",
    badgeColor: "text-blue-400",
    glow: "rgba(59,130,246,0.25)",
    gradient: "from-blue-500/15 via-indigo-900/10 to-transparent",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    border: "border-orange-500/30",
    badgeBg: "bg-orange-500/15",
    badgeColor: "text-orange-400",
    glow: "rgba(249,115,22,0.25)",
    gradient: "from-orange-500/15 via-red-900/10 to-transparent",
  },
  {
    title: "AWS Academy Graduate",
    issuer: "AWS Academy",
    border: "border-orange-500/30",
    badgeBg: "bg-orange-500/15",
    badgeColor: "text-orange-400",
    glow: "rgba(249,115,22,0.25)",
    gradient: "from-orange-500/15 via-red-900/10 to-transparent",
  },
  {
    title: "Hashgraph Developer Course",
    issuer: "Hashgraph",
    border: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/15",
    badgeColor: "text-emerald-400",
    glow: "rgba(16,185,129,0.25)",
    gradient: "from-emerald-500/15 via-teal-900/10 to-transparent",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Sparkles size={13} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">Professional Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className={`glass-card rounded-3xl p-7 md:p-8 border ${cert.border} flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all`}
              style={{ boxShadow: `0 10px 30px ${cert.glow}` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-400 to-secondary" />

              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`px-3 py-1 rounded-xl text-xs font-bold ${cert.badgeBg} ${cert.badgeColor} border border-white/10 flex items-center gap-1.5`}>
                    <ShieldCheck size={14} />
                    <span>{cert.issuer}</span>
                  </div>
                  {cert.date && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={13} />
                      <span>{cert.date}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground leading-snug mb-3">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={14} />
                  <span>Verified Credential</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
