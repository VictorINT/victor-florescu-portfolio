import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Scientist (Contractor)",
    org: "BRAT (Biroul Român de Audit Transmedia)",
    period: "Mar 2026 - Jun 2026",
    bullets: [
      "Built an ML price estimator for influencer campaigns from structured Excel inputs (reach, engagement, format, network).",
      "Pipeline: clean & align features, filter outliers with Isolation Forest, train Random Forest with semi-supervised labels (RF + XGBoost agreement), then run inference on new files or a single JSON row.",
      "Delivered a standalone tool plus technical documentation for training, updates, and production use.",
    ],
  },
  {
    role: "Data Structures & Algorithms Teaching Assistant",
    org: "Faculty of Automatic Control and Computers, UPB",
    period: "Feb 2026 - May 2026",
    bullets: [
      "Guiding first-year students through Algorithm Design, Data Structures, and Computational Complexity in hands-on lab sessions.",
    ],
  },
  {
    role: "Programming Teaching Assistant",
    org: "Faculty of Automatic Control and Computers, UPB",
    period: "Oct 2025 - Feb 2026",
    bullets: [
      "Taught C programming to 120+ first-year students across four lab groups.",
      "Covered pointers, memory management, core data structures (arrays, structs, linked lists), and fundamental algorithms.",
    ],
  },
  {
    role: "Robotics & Software Engineer",
    org: "HBFS Robotics",
    period: "Jan 2025 - Jun 2025",
    bullets: [
      "Architected end-to-end robotic solutions integrating low-level hardware control with high-level software pipelines.",
      "Developed backend services using Java (Spring Boot) and Vue.js, containerized via Docker.",
      "Implemented computer vision pipelines using YOLO and ROS2 for real-time object detection and autonomous navigation.",
    ],
  },
  {
    role: "Private Tutor, Mathematics & Physics",
    org: "Freelance",
    period: "Jun 2023 - Sep 2024",
    bullets: [
      "Tutored high school students in math and physics for baccalaureate and college entrance exams.",
      "Covered algebra, real analysis, complex integrals, derivatives, mechanics, thermodynamics, electricity, and optics.",
      "Helped one student achieve a perfect baccalaureate score; all students admitted to their top-choice universities.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-3">Work</p>
        <h2 className="section-heading mb-14">Experience</h2>
      </AnimatedSection>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="card-surface p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.org}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap bg-secondary px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-secondary-foreground flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
