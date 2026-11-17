import PinnedPosts from "@/features/blog/components/PinnedPosts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/features/portfolio/components/HeroSection";
import EducationSection from "@/features/portfolio/components/EducationSection";
import ExperienceSection from "@/features/portfolio/components/ExperienceSection";
import ProjectsSection from "@/features/portfolio/components/ProjectsSection";
import SkillsSection from "@/features/portfolio/components/SkillsSection";
import FooterSection from "@/components/layout/FooterSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location]);

  return (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <div className="glow-line max-w-3xl mx-auto" />
      <PinnedPosts />
      <div className="glow-line max-w-3xl mx-auto" />
      <EducationSection />
      <div className="glow-line max-w-3xl mx-auto" />
      <ExperienceSection />
      <div className="glow-line max-w-3xl mx-auto" />
      <ProjectsSection />
      <div className="glow-line max-w-3xl mx-auto" />
      <SkillsSection />
    </main>
    <FooterSection />
  </>
  );
};

export default Index;
