import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Code2, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  
  { name: "Certifications", href: "#certifications" },
  
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const scrollPosition = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.substring(1);
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/50 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  Ayushi
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  B.Tech CSE '27
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1 px-4 py-1.5 rounded-full bg-background/50 backdrop-blur-xl border border-white/10 shadow-inner">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Right Action */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#contact"
                className="hidden sm:flex items-center gap-1.5 px-5 py-2 rounded-full font-semibold text-xs text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #D946EF)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={13} />
                <span>Let's Connect</span>
              </motion.a>

              {/* Mobile Hamburger Button */}
              <button
                className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-foreground hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-80 z-[70] bg-background/95 backdrop-blur-2xl border-l border-primary/20 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto custom-scrollbar"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
                      A
                    </div>
                    <span className="font-bold text-sm text-foreground">Navigation</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="text-muted-foreground/60" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA in Drawer */}
              <div className="pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl font-semibold text-xs text-white text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  style={{ background: "linear-gradient(135deg, #8B5CF6, #D946EF)" }}
                >
                  <Sparkles size={14} />
                  <span>Hire Me / Contact</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
