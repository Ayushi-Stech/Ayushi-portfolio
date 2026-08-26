import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: <Github size={18} />, href: "https://github.com/Ayushi-Stech", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ayushi-shrivastava-6329283a1/", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:ayushishrivastava83490@gmail.com", label: "Email" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-foreground">
              Ayushi
            </span>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm">
              Computer Science Undergraduate â€¢ Backend â€¢ Machine Learning â€¢ IoT
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:scale-105"
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            title="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/70">
          <p>
            Â© {new Date().getFullYear()} Ayushi. All rights reserved.
          </p>
          <p className="text-[11px]">
            Designed & Engineered with React, TypeScript, Tailwind CSS & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
