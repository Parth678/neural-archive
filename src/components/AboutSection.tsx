import React from "react";
import { CheckCircle2, FileDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const valuePillars = [
  "Multi-Agent Swarm Architectures & Model Context Protocol (MCP)",
  "Sub-second vector retrieval with hybrid dense/sparse search",
  "Production FastAPI, Async I/O, & Distributed Database Caching",
];

const AboutSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="about">
      <article className="lg:col-span-5 bg-card-bg border border-border-dark rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden group hover:border-amber-500/40 transition-all">
        <div className="space-y-5">
          <SectionHeading number="01" label="About Me" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
            Bridging High-Performance Backend with Next-Gen{" "}
            <span className="text-gradient-gold-violet">Generative Intelligence</span>.
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            I am a Software Engineer focused on Agentic Systems, context-aware RAG pipelines, and high-throughput microservices. With roots in low-level systems (C++, Compilers) and production AI frameworks, I treat prompt engineering and inference reliability as deterministic software engineering problems.
          </p>
          <ul className="space-y-2.5 pt-2 text-xs font-mono-custom text-slate-300">
            {valuePillars.map((pillar, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/10 text-white font-mono-custom text-xs font-semibold transition-all"
          >
            <FileDown className="w-4 h-4 text-amber-400" />
            <span>Download Engineering Resume</span>
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;