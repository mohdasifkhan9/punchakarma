"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface LuxuryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  showIcon?: boolean;
  disabled?: boolean;
}

export default function LuxuryButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  showIcon = true,
  disabled = false,
}: LuxuryButtonProps) {
  const baseStyle =
    "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 overflow-hidden group pointer-events-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary hover:bg-secondary text-cream border border-accent/20 hover:border-accent/50 shadow-lg gold-glow-hover",
    secondary:
      "bg-[#F8F5EF] hover:bg-white text-primary hover:text-black border border-primary/10 shadow-md",
    accent:
      "bg-accent hover:bg-amber-500 text-primary font-bold border border-accent/40 shadow-xl gold-glow-hover",
    outline:
      "bg-transparent hover:bg-primary/20 text-accent hover:text-cream border border-accent/40 hover:border-accent",
  };

  const content = (
    <>
      {/* Glare/Shimmer effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-1.5 font-sans">
        {children}
        {showIcon && (
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent" />
        )}
      </span>
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
