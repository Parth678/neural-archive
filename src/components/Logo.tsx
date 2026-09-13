import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center gap-2 shrink-0 ${className}`}
    >
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shadow-[0_0_12px_rgba(160,120,255,0.2)]">
        <span className="font-label-badge text-label-badge text-primary uppercase font-bold">
          PV
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-title-sm text-title-sm text-on-surface tracking-tight leading-none uppercase">
          PARTH.VERMA
        </span>
        <span className="font-label-mono-sm text-label-mono-sm text-primary tracking-widest leading-none mt-space-xs uppercase">
          AI &amp; AGENTIC SYSTEMS
        </span>
      </div>
    </div>
  );
};

export default Logo;