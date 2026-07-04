"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Elegant fade out sequence
    const timer1 = setTimeout(() => {
      setFade(true);
    }, 1800);

    const timer2 = setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#071F16] z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        fade ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      <div className="max-w-xl text-center px-6 flex flex-col items-center">
        {/* Sanskrit Mandala Indicator */}
        <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center relative mb-8 animate-spin-slow">
          <div className="w-12 h-12 rounded-full border border-dashed border-accent/60 flex items-center justify-center">
            <div className="w-3 h-3 bg-accent rounded-full" />
          </div>
        </div>

        {/* Brand name */}
        <p className="text-accent font-serif tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 animate-pulse">
          Soma & Ananda
        </p>

        {/* Sacred Quote */}
        <h2 className="font-serif text-2xl sm:text-4xl text-cream/90 italic font-light leading-relaxed mb-6">
          “सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः”
        </h2>

        <p className="font-sans text-[11px] sm:text-xs text-accent/80 tracking-widest uppercase max-w-sm leading-loose">
          May all beings be happy. May all beings be free from disease.
        </p>

        {/* Thin bottom line */}
        <div className="w-24 h-[1px] bg-accent/30 mt-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent w-1/2 animate-shimmer" style={{ animationDuration: '1.5s' }} />
        </div>
      </div>
    </div>
  );
}
