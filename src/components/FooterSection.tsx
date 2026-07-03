import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-16">
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col items-center text-center gap-6">
        <p className="font-mono text-sm font-bold text-primary">vsf.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/VictorINT" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/victor-florescu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Linkedin size={18} />
          </a>
          <a href="mailto:victor.s.florescu@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2025 Victor-Stefan Florescu · Bucharest, Romania
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
