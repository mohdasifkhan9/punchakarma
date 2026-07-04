import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverGlow = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 relative overflow-hidden group ${
        hoverGlow ? "hover:border-accent/30 hover:shadow-2xl hover:-translate-y-1 gold-glow-hover" : ""
      } ${className}`}
    >
      {/* Decorative inner gradient shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      {children}
    </div>
  );
}
