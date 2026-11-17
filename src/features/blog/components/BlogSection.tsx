import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, X, Clock, Pin, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts, categories } from "@/features/blog/data/posts";
import PostCover from "./PostCover";

const BlogSection = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchParams] = useSearchParams();
  const selectedPost = blogPosts.find((post) => post.id === searchParams.get("post")) ?? null;

  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [selectedPost?.id]);

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section id="blog" className="py-10 sm:py-16 px-6 scroll-mt-14">
      <div className="max-w-5xl mx-auto">
        {/* Article detail view */}
        <AnimatePresence mode="wait">
          {selectedPost ? (
            <motion.article
              key={selectedPost.id}
              onAnimationComplete={() => headingRef.current?.focus({ preventScroll: true })}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <Link
                to="/blog"
                className="inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/40 transition-colors mb-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to blog
              </Link>

              <h1 ref={headingRef} tabIndex={-1} className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 focus:outline-none">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="tag-pill capitalize">{selectedPost.category}</span>
                <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                  <Clock size={12} /> {selectedPost.readTime}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  {new Date(selectedPost.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="rounded-xl border border-border overflow-hidden mb-10">
                <PostCover post={selectedPost} className={selectedPost.thumbnail ? "aspect-[3/2] h-auto" : "h-56 sm:h-72"} />
              </div>

              <div
                className="prose prose-invert prose-base max-w-none
                  [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-foreground
                  [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
                  [&_strong]:text-foreground [&_strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </motion.article>
          ) : (
            <motion.div
              key="list"
              onAnimationComplete={() => headingRef.current?.focus({ preventScroll: true })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <header className="mb-10">
                <h1 ref={headingRef} tabIndex={-1} className="section-heading mb-3 focus:outline-none">
                  Blog<span className="text-primary">.</span>
                </h1>
                <p className="text-muted-foreground max-w-lg">
                  Thoughts on projects, tech, and life outside the terminal.
                </p>
              </header>

              {/* Search + Categories */}
              <AnimatedSection delay={0.1} className="mb-8 space-y-4">
                {/* Search bar */}
                <div className="relative max-w-md">
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    aria-label="Search posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full h-10 pl-9 pr-9 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all font-mono"
                  />
                  {search && (
                    <button
                      aria-label="Clear search"
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Category pills */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      aria-pressed={activeCategory === cat.value}
                      className={`text-xs min-h-10 px-3 py-2 rounded-full font-mono tracking-tight transition-all duration-200 border ${
                        activeCategory === cat.value
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary text-secondary-foreground border-border hover:border-primary/30"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </AnimatedSection>

              <p role="status" className="text-xs text-muted-foreground font-mono mb-5">
                {filtered.length} {filtered.length === 1 ? "post" : "posts"}
                {search || activeCategory !== "all" ? " found" : ""}
              </p>

              {/* Post grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map((post, i) => (
                    <AnimatedSection key={post.id} delay={i * 0.05}>
                      <Link
                        to={`?post=${encodeURIComponent(post.id)}`}
                        className="card-surface text-left w-full group cursor-pointer flex flex-col h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                      >
                        <div className="overflow-hidden rounded-t-xl">
                          <PostCover
                            post={post}
                            className="h-44 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="tag-pill capitalize">{post.category}</span>
                            <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                              <Clock size={11} /> {post.readTime}
                            </span>
                          </div>
                          {post.pinned && <span className="inline-flex items-center gap-1.5 text-xs text-primary font-mono mb-2"><Pin size={12} /> Pinned</span>}
                          <h3 className="text-base font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                            {post.description}
                          </p>
                          <span className="text-xs text-primary font-mono mt-4">
                            Read article →
                          </span>
                        </div>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground text-sm font-mono">
                  <p className="mb-4">No posts found matching your search.</p>
                  <button onClick={() => { setSearch(""); setActiveCategory("all"); }} className="min-h-11 px-4 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors">
                    Clear filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogSection;
