import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, ChevronDown } from "lucide-react";
import victorImg from "@/assets/victor.jpg";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex flex-col pt-14 relative">
    <div className="flex-1 flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full py-16 sm:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Text */}
          <div className="flex-1 order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-sm text-primary mb-4 tracking-wide"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-4"
            >
              Victor
              <br />
              <span className="text-gradient">Florescu</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              CS & Engineering @ UPB Bucharest.
              <span className="hidden sm:inline"> </span>
              <br className="sm:hidden" />
              Embedded systems · AI agents · Robotics.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <a
                href={`${import.meta.env.BASE_URL}Victor_Florescu_CV.pdf`}
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                <Download size={15} />
                Download CV
              </a>
              <a
                href="mailto:victor.s.florescu@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-sm text-foreground hover:bg-secondary transition-all duration-200"
              >
                <Mail size={15} />
                Get in Touch
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://github.com/VictorINT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Github size={17} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <span className="w-px h-4 bg-border" />
              <a
                href="https://www.linkedin.com/in/victor-florescu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Linkedin size={17} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 md:order-2 flex-shrink-0"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/8 blur-2xl" />
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
                <img
                  src={victorImg}
                  alt="Victor-Stefan Florescu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Scroll
      </span>
      <ChevronDown size={16} className="text-primary animate-scroll-bounce" />
    </motion.div>
  </section>
);

export default HeroSection;
