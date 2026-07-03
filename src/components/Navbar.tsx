import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sectionLinks = [
  { label: "Home", hash: "home" },
  { label: "Education", hash: "education" },
  { label: "Experience", hash: "experience" },
  { label: "Projects", hash: "projects" },
  { label: "Skills", hash: "skills" },
] as const;

const scrollToSection = (hash: string) => {
  document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent, hash: string) => {
    if (onHomePage) {
      e.preventDefault();
      scrollToSection(hash);
      window.history.replaceState(null, "", `${import.meta.env.BASE_URL}#${hash}`);
    }
    setOpen(false);
  };

  const linkClass =
    "text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-md hover:bg-secondary/50 transition-all duration-200";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to={{ pathname: "/", hash: "home" }}
          onClick={(e) => handleSectionClick(e, "home")}
          className="font-mono text-sm font-bold text-primary tracking-tight hover:opacity-80 transition-opacity"
        >
          vsf.
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {sectionLinks.map((l) => (
            <Link
              key={l.hash}
              to={{ pathname: "/", hash: l.hash }}
              onClick={(e) => handleSectionClick(e, l.hash)}
              className={linkClass}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/blog" className={linkClass}>
            Blog
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {sectionLinks.map((l) => (
                <Link
                  key={l.hash}
                  to={{ pathname: "/", hash: l.hash }}
                  onClick={(e) => handleSectionClick(e, l.hash)}
                  className="text-sm text-muted-foreground hover:text-foreground py-2 px-3 rounded-md hover:bg-secondary/50 transition-all"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-2 px-3 rounded-md hover:bg-secondary/50 transition-all"
              >
                Blog
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
