import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, ArrowUpRight, LayoutGrid, Send } from "lucide-react";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 lg:pt-12 lg:pb-16" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Hero Content */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7 min-w-0 max-w-full">
          {/* Availability Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono-custom font-semibold text-emerald-300 tracking-wide">
              Available for AI Engineering &amp; Research Roles
            </span>
          </div>

          {/* Headline */}
          <div className="relative">
            <div className="tape-badge inline-block px-3 py-1 text-xs uppercase mb-3 shadow-md font-mono-custom">
              ⚡ Autonomous Agents • RAG • Production LLMs
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-display font-black tracking-tight text-white uppercase leading-[1.05] break-words">
              I Engineer <br />
              <span className="text-gradient-gold-violet">Intelligent AI</span> <br />
              Architectures.
            </h1>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Parth Verma — AI / GenAI Developer &amp; Backend Architect specializing in Agentic workflows, Multi-Agent MCP architectures, and enterprise-grade RAG solutions built for scale and sub-second inference.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link to="/projects" className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-mono-custom text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 hover:brightness-110 shadow-glow-gold transition-all flex items-center gap-2">
              <span>View Artifacts</span>
              <LayoutGrid className="w-4 h-4" />
            </Link>
            <Link to="/#contact" className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-mono-custom text-sm font-semibold bg-card-bg border border-border-dark hover:border-primary/60 text-white transition-all flex items-center gap-2 hover:shadow-glow-purple">
              <span>Get In Touch</span>
              <Send className="w-4 h-4 text-primary" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="pt-2 flex items-center gap-4 sm:gap-5 text-slate-400 text-xs font-mono-custom">
            <span className="text-slate-500 uppercase tracking-wider">Follow On:</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-card-bg border border-border-dark hover:text-amber-400 hover:border-amber-400/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-card-bg border border-border-dark hover:text-amber-400 hover:border-amber-400/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-card-bg border border-border-dark hover:text-amber-400 hover:border-amber-400/40 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Hero Graphic */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center lg:justify-end w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-amber-500/20 animate-[spin_20s_linear_infinite] pointer-events-none"></div>
          <div className="absolute w-80 h-80 sm:w-[22rem] sm:h-[22rem] rounded-full border border-dashed border-primary/30 pointer-events-none"></div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/10 via-primary/15 to-transparent blur-3xl -z-10 rounded-full"></div>

          <div className="relative z-10 w-full max-w-sm">
            <div className="relative bg-gradient-to-b from-border-dark/90 to-card-bg p-2 rounded-3xl border border-border-dark shadow-2xl overflow-hidden">
              <div className="absolute top-4 right-4 z-20 tape-badge px-3 py-1 font-mono-custom text-[11px] uppercase tracking-wider text-black">
                100% Reasoning
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-neutral-950">
                <img
                  alt="Parth Verma AI Engineer Portrait"
                  className="w-full h-80 sm:h-96 object-cover object-top brightness-105 contrast-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmBvWr5CrL8gqhPcCkwunxS-XhIK3x1liZDZvoIPIr3TYfi07Tq_Pdo3LXBCV-Kw7MdtzcGBygVlHZ0EA2YnMUyAmRvc7xGg1tZI7c8LLycTt7yZ6n-Tt_AQNofiJzXuyLIojr_XaXCmDT7yWLEelY5W4Ovq8GVa3MDAQI2zcY1unBNOgVEGrzZVKym56mPOEAKHfqoaWJkwONLSWNvwmHKXDw3u6bFeeXjIObngf_Med6kZuNjUINPw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-3 left-3 right-3 text-left p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <p className="text-[11px] font-mono-custom text-primary-soft uppercase tracking-widest font-bold">
                    Core Philosophy
                  </p>
                  <p className="text-xs font-semibold text-slate-200 mt-0.5">
                    &quot;Autonomous agents shouldn&apos;t just respond; they must orchestrate &amp; verify.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 bg-card-bg/90 backdrop-blur-md p-3 rounded-2xl border border-border-dark shadow-xl text-center">
              <div className="p-1">
                <div className="font-display font-black text-amber-400 text-lg">15+</div>
                <div className="text-[10px] font-mono-custom text-slate-400">Agentic Pipelines</div>
              </div>
              <div className="p-1 border-x border-border-dark">
                <div className="font-display font-black text-primary-soft text-lg">99.8%</div>
                <div className="text-[10px] font-mono-custom text-slate-400">RAG Precision</div>
              </div>
              <div className="p-1">
                <div className="font-display font-black text-emerald-400 text-lg">&lt;200ms</div>
                <div className="text-[10px] font-mono-custom text-slate-400">P95 Latency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;