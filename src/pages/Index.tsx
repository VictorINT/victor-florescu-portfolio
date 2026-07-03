import { Link } from "react-router-dom";
import { ArrowRight, PenLine } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/data/blogPosts";
import PostCover from "@/components/PostCover";

const BlogCTA = () => {
  const latest = blogPosts.slice(0, 3);
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="card-surface p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <PenLine size={18} className="text-primary" />
              <h2 className="font-semibold text-lg">From the Blog</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {latest.map((post) => (
                <Link key={post.id} to="/blog" className="group">
                  <div className="rounded-lg overflow-hidden mb-3 border border-border">
                    <PostCover
                      post={post}
                      className="h-32 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{post.readTime}</p>
                </Link>
              ))}
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 group"
            >
              Read all posts
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <div className="glow-line max-w-3xl mx-auto" />
      <EducationSection />
      <div className="glow-line max-w-3xl mx-auto" />
      <ExperienceSection />
      <div className="glow-line max-w-3xl mx-auto" />
      <ProjectsSection />
      <div className="glow-line max-w-3xl mx-auto" />
      <SkillsSection />
      <div className="glow-line max-w-3xl mx-auto" />
      <BlogCTA />
    </main>
    <FooterSection />
  </>
);

export default Index;
