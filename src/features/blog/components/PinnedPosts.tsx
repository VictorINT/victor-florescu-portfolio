import { Link } from "react-router-dom";
import { ArrowRight, Pin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/features/blog/data/posts";
import PostCover from "./PostCover";

const PinnedPosts = () => {
  const pinnedPosts = blogPosts.filter((post) => post.pinned);
  return (
    <section id="blog" className="py-24 sm:py-32 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="card-surface relative isolate p-8 sm:p-10 cursor-pointer">
            <div className="flex items-center gap-3 mb-6">
              <Pin size={18} className="text-primary" />
              <h2 className="font-semibold text-lg">Pinned from the Blog</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              {pinnedPosts.map((post) => (
                <Link key={post.id} to={`/blog?post=${encodeURIComponent(post.id)}`} className="group relative z-10 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">
                  <div className="rounded-lg overflow-hidden mb-3 border border-border">
                    <PostCover
                      post={post}
                      className="h-48 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.description}</p>
                  <p className="text-xs text-muted-foreground mt-3 font-mono">{post.readTime}</p>
                </Link>
              ))}
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 group focus-visible:outline-none"
            >
              <span aria-hidden="true" className="absolute inset-0 rounded-xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-primary group-focus-visible:outline-offset-4" />
              <span className="relative pointer-events-none">Read all posts</span>
              <ArrowRight size={14} className="relative pointer-events-none group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PinnedPosts;
