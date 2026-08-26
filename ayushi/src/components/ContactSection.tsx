import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, GraduationCap, Send, User, Sparkles, Linkedin, Github, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactDetails = [
  { icon: <User size={18} />, label: "Full Name", value: "Ayushi" },
  { icon: <Mail size={18} />, label: "Email Address", value: "ayushishrivastava83490@gmail.com", href: "mailto:ayushishrivastava83490@gmail.com" },
  { icon: <Phone size={18} />, label: "Phone", value: "+91 9835419656", href: "tel:+919835419656" },
  { icon: <MapPin size={18} />, label: "Location", value: "Gujarat, India" },
  { icon: <GraduationCap size={18} />, label: "Education", value: "B.Tech CSE, Parul University (Class of 2027)" },
  { icon: <Sparkles size={18} />, label: "Availability", value: "Open for SDE Internships & Roles" },
];

const socialLinks = [
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/ayushi-shrivastava-6329283a1/" },
  { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/Ayushi-Stech" },
  { icon: <Mail size={18} />, label: "Email", href: "mailto:ayushishrivastava83490@gmail.com" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = "919835419656";
    const formattedMsg = `*New Portfolio Message*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject || "Collaboration Inquiry"}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMsg}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Message Prepared!",
      description: "Redirecting to send message. You can also email directly.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <MessageSquare size={13} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open for software engineering opportunities, internships, and technical collaboration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-primary/20 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground">Contact Details</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Reach out directly via email, phone, or LinkedIn
                </p>
              </div>

              <div className="space-y-4">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground font-medium">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-foreground font-medium hover:text-primary transition-colors text-xs md:text-sm"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-xs md:text-sm">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Social Profiles:
                </p>
                <div className="flex gap-2.5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:scale-105"
                      title={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-primary/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary" />

              <h3 className="text-xl font-bold text-foreground mb-2">Send a Direct Message</h3>
              <p className="text-xs text-muted-foreground mb-6">
                Have an inquiry or project in mind? Drop a message below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the role, project, or technical opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  style={{ background: "linear-gradient(135deg, #8B5CF6, #D946EF)" }}
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
