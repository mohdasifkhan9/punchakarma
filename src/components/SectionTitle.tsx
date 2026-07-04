interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className} mb-12 md:mb-16`}>
      {/* Editorial Mini-Tagline */}
      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        {subtitle}
      </span>

      {/* Large luxury typography */}
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream font-light leading-[1.1] tracking-wide mb-5">
        {title}
      </h2>

      {/* Luxury thin divider */}
      <div className="w-16 h-[1px] bg-accent/30 mb-5" />

      {/* Beautiful description */}
      {description && (
        <p className="font-sans text-sm md:text-base text-cream/70 leading-relaxed max-w-2xl font-light">
          {description}
        </p>
      )}
    </div>
  );
}
