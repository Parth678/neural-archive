import React from "react";

interface TapeBadgeProps {
  children: React.ReactNode;
  variant?: "white" | "gold" | "dim";
  className?: string;
}

const TapeBadge: React.FC<TapeBadgeProps> = ({
  children,
  variant = "white",
  className = "",
}) => {
  const variants: Record<string, string> = {
    white: "tape-badge",
    gold: "tape-badge tape-badge-gold",
    dim: "tape-badge tape-badge-dim",
  };
  return <span className={`${variants[variant]} ${className}`}>{children}</span>;
};

export default TapeBadge;