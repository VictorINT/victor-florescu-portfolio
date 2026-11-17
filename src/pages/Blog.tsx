import Navbar from "@/components/layout/Navbar";
import BlogSection from "@/features/blog/components/BlogSection";
import FooterSection from "@/components/layout/FooterSection";

const Blog = () => (
  <>
    <Navbar />
    <main className="pt-14">
      <BlogSection />
    </main>
    <FooterSection />
  </>
);

export default Blog;
