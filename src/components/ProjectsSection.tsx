import AnimatedSection from "./AnimatedSection";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    name: "AIconomy",
    subtitle: "Event-Driven Multi-Agent Freelancing Economy",
    tech: ["Java 21", "Spring Boot", "Kafka", "PostgreSQL", "Python", "LangGraph", "Docker"],
    link: "https://a1conomy.github.io",
    bullets: [
      "Services marketplace where client, manager, and worker agents negotiate, delegate, and get paid via Kafka events.",
      "Core banking ledger in Spring Boot with ACID transfers and escrow (hold, release, refund) backed by PostgreSQL.",
      "Gradle multi-module microservices: ledger, tasks, and analytics, wired end-to-end with Docker Compose and CI.",
    ],
  },
  {
    name: "JobSaw",
    subtitle: "AI-Driven CV Orchestrator",
    tech: ["Python", "LangGraph", "Spring Boot", "Kafka", "Docker"],
    bullets: [
      "Autonomous agent pipeline using LangGraph & LLMs for intelligent CV optimization and job scraping.",
      "Distributed event-driven backend via Kafka streaming between Python AI microservices and Spring Boot core.",
      "Reactive Vue.js interface for visualizing tailored CVs with dynamic content propagation.",
    ],
  },
  {
    name: "Maze Runner",
    subtitle: "Hard & Soft 2025, Autonomous Robot",
    tech: ["ROS2", "YOLO", "Raspberry Pi", "LiDAR", "C++", "Python"],
    badge: "4th International",
    bullets: [
      "Autonomous maze robot using Pi + LiDAR + camera with DFS pathfinding and holonomic PID control.",
      "Lightweight YOLO model for real-time object detection with live overlays.",
      "Reverse SSH and hybrid encryption for resilient, encrypted telemetry.",
    ],
  },
  {
    name: "Smart Home",
    subtitle: "IoT Autonomous System",
    tech: ["STM32", "Embedded C", "IoT", "SPI/I2C"],
    bullets: [
      "IoT-based home automation system with STM32 microcontrollers.",
      "Real-time sensor data processing and actuator control via custom protocols.",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-3">Work</p>
        <h2 className="section-heading mb-14">Projects</h2>
      </AnimatedSection>

      <div className="space-y-6">
        {projects.map((proj, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="card-surface p-6 sm:p-8 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-lg">{proj.name}</h3>
                    {proj.badge && (
                      <span className="text-[10px] uppercase tracking-wider font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary">
                        {proj.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{proj.subtitle}</p>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-1 font-mono text-xs text-primary hover:underline underline-offset-4"
                    >
                      {proj.link.replace(/^https?:\/\//, "")} ↗
                    </a>
                  )}
                </div>
                <FolderGit2 size={18} className="text-muted-foreground group-hover:text-primary transition-colors hidden sm:block flex-shrink-0" />
              </div>

              <ul className="space-y-2.5 mb-5">
                {proj.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-secondary-foreground flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
