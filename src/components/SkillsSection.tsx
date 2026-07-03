import AnimatedSection from "./AnimatedSection";
import { Cpu, Brain, Wrench, Globe, Award } from "lucide-react";

const categories = [
  {
    icon: Cpu,
    title: "Core & Embedded",
    skills: ["Java (Spring Boot)", "C/C++", "Python", "Elixir", "ROS2", "ARM Cortex-M", "IoT (SPI/I2C/CAN)", "STM32"],
  },
  {
    icon: Brain,
    title: "AI, Data & Ops",
    skills: ["LangChain", "LLMs", "YOLO", "Random Forest / XGBoost", "MATLAB (ML)", "Kafka", "SQL (Oracle)", "Docker", "Git", "Linux"],
  },
  {
    icon: Wrench,
    title: "Currently Learning",
    skills: ["A2A & complex agentic systems", "Signal processing theory", "NNs, CNNs, RNNs (math)", "Quantitative trading", "Quantum computing"],
  },
  {
    icon: Globe,
    title: "Languages",
    skills: ["Romanian (Native)", "English (Proficient)"],
  },
];

const awards = [
  { title: "#2 Romania, IMC Prosperity 4", desc: "Top ~300 worldwide out of 22,600+ teams in the algorithmic trading challenge by IMC Trading." },
  { title: "ARM Summer School 2025", desc: "Selected by Google & NXP for advanced embedded optimization." },
  { title: "4th Place, Hard & Soft 2025", desc: "International Undergraduate Robotics Contest." },
  { title: "Elixir Summer School (PDQ)", desc: "Functional programming, LiveView, GenServer, ending with a game hackathon." },
  { title: "Certifications", desc: "MATLAB ML Onramp · MATLAB Optimization Onramp · Spring Framework · Oracle DB Design." },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <AnimatedSection>
        <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-3">Toolkit</p>
        <h2 className="section-heading mb-14">Skills & Awards</h2>
      </AnimatedSection>

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((cat, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            <div className="card-surface p-6 h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <cat.icon size={16} className="text-primary" />
                <h3 className="font-semibold text-sm uppercase tracking-wide">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="tag-pill">{s}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Awards */}
      <AnimatedSection delay={0.3} className="mt-6">
        <div className="card-surface p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-5">
            <Award size={16} className="text-primary" />
            <h3 className="font-semibold text-sm uppercase tracking-wide">Achievements</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a, i) => (
              <div key={i} className="space-y-1">
                <p className="text-sm font-medium">{a.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SkillsSection;
