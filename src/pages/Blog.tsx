import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";

const Blog = () => (
  <>
    <Navbar />
    <main className="pt-20 pb-8">
      <div className="max-w-5xl mx-auto px-6 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to portfolio
        </Link>
      </div>
      <BlogSection />
    </main>
    <FooterSection />
  </>
);

export default Blog;
