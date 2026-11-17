import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sectionLinks = [
  { label: "Home", hash: "home" },
  { label: "Blog", hash: "blog" },
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
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const onHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!onHomePage) return;
      const currentSection = [...sectionLinks].reverse().find(({ hash }) => {
        const section = document.getElementById(hash);
        return section && section.getBoundingClientRect().top <= 120;
      });
      setActiveSection(currentSection?.hash ?? "home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHomePage]);

  const isActive = (hash: string) => hash === "blog"
    ? location.pathname === "/blog" || (onHomePage && activeSection === "blog")
    : onHomePage && activeSection === hash;


  const handleSectionClick = (e: React.MouseEvent, hash: string) => {
    if (onHomePage) {
      e.preventDefault();
      scrollToSection(hash);
      window.history.replaceState(null, "", `${import.meta.env.BASE_URL}#${hash}`);
    }
    setOpen(false);
  };

  const linkClass = (hash: string) =>
    `text-sm min-h-10 inline-flex items-center px-3 py-2 rounded-md border-b-2 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
      isActive(hash)
        ? "text-foreground font-medium border-primary bg-secondary/60"
        : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/50"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !onHomePage
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
              to={l.hash === "blog" ? "/blog" : { pathname: "/", hash: l.hash }}
              onClick={(e) => l.hash === "blog" ? setOpen(false) : handleSectionClick(e, l.hash)}
              className={linkClass(l.hash)}
              aria-current={isActive(l.hash) ? (l.hash === "blog" ? "page" : "location") : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="md:hidden min-h-11 min-w-11 inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
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
            <div id="mobile-navigation" className="px-6 py-4 flex flex-col gap-1">
              {sectionLinks.map((l) => (
                <Link
                  key={l.hash}
                  to={l.hash === "blog" ? "/blog" : { pathname: "/", hash: l.hash }}
                  onClick={(e) => l.hash === "blog" ? setOpen(false) : handleSectionClick(e, l.hash)}
                  className={linkClass(l.hash)}
                  aria-current={isActive(l.hash) ? (l.hash === "blog" ? "page" : "location") : undefined}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
