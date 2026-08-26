import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden bg-transparent">
      <AnimatedBackground />
      <div className="relative z-10 text-foreground overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <GitHubSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
