import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const education = [
  {
    period: "2024 - present",
    school: "University Politehnica of Bucharest",
    degree: "B.Sc. Computer Science & Engineering",
    detail: "Faculty of Automatic Control and Computers: Control Systems, Applied Math, Software Engineering.",
    courses: [
      "Algorithm Design", "OOP", "Signals & Systems", "Numerical Methods",
      "Linear Electronic Circuits", "Web Design", "Real Analysis", "Linear Algebra",
    ],
  },
  {
    period: "2020 - 2024",
    school: "Cantemir Vodă National College",
    degree: "High School, Mathematics & CS",
    detail: "Intensive coursework in C++, Algorithm Design, and Computational Logic.",
    courses: [
      "Programming (C++)", "Data Structures", "Algorithms", "Databases & SQL",
      "Calculus", "Algebra", "Probability & Statistics",
    ],
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-3">Background</p>
        <h2 className="section-heading mb-14">Education</h2>
      </AnimatedSection>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="card-surface p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{edu.school}</h3>
                  <p className="text-primary text-sm font-medium">{edu.degree}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap bg-secondary px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{edu.detail}</p>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((c) => (
                  <span key={c} className="tag-pill">{c}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
