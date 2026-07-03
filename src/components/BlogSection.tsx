import { useState, useMemo } from "react";
import { Search, X, Clock, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { blogPosts, categories, type BlogPost } from "@/data/blogPosts";
import PostCover from "./PostCover";

const BlogSection = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
    <section id="blog" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="section-heading mb-2">
            Blog<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg">
            Thoughts on projects, tech, and life outside the terminal.
          </p>
        </AnimatedSection>

        {/* Article detail view */}
        <AnimatePresence mode="wait">
          {selectedPost ? (
            <motion.article
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="sticky top-16 z-10 inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-secondary text-foreground transition-all mb-6 group shadow-md"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                All posts
              </button>

              <div className="rounded-xl border border-border overflow-hidden mb-6">
                <PostCover post={selectedPost} className="h-64 sm:h-80" />
              </div>

              <div className="flex items-center gap-3 mb-4">
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

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                {selectedPost.title}
              </h1>

              <div
                className="prose prose-invert prose-sm max-w-none
                  [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-foreground
                  [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
                  [&_strong]:text-foreground [&_strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </motion.article>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full h-10 pl-9 pr-9 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all font-mono"
                  />
                  {search && (
                    <button
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
                      className={`text-xs px-3 py-1.5 rounded-full font-mono tracking-tight transition-all duration-200 border ${
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

              {/* Post grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map((post, i) => (
                    <AnimatedSection key={post.id} delay={i * 0.05}>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="card-surface text-left w-full group cursor-pointer flex flex-col h-full"
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
                          <h3 className="text-sm font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                            {post.description}
                          </p>
                          <span className="text-xs text-primary font-mono mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            Read more →
                          </span>
                        </div>
                      </button>
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground text-sm font-mono">
                  No posts found matching your search.
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
