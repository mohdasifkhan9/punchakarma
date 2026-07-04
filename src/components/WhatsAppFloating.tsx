"use client";

import { MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltips every 15s to catch user's attention gently
    const timer = setTimeout(() => setShowTooltip(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {showTooltip && (
        <div className="glass-card-light text-primary text-xs py-2 px-3 rounded-lg shadow-xl border border-accent/30 max-w-[240px] animate-bounce relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-[10px] hover:text-red-500 font-bold px-1"
          >
            ✕
          </button>
          <div className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">Concierge Desk</span>
          </div>
          <p className="mt-1 text-slate-700 leading-snug">
            Speak to a Wellness Director. Get instant answers.
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999?text=Hello,%20I%20am%20interested%20in%20the%20luxury%20Panchakarma%20retreat.%20Please%20connect%20me%20with%20a%20Vaidya."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl transition-all duration-300 hover:scale-110 group relative border border-emerald-400/20"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span className="absolute right-full mr-3 bg-luxury-dark/95 text-accent text-[10px] uppercase tracking-widest font-semibold py-1 px-3.5 rounded border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          WhatsApp Chat
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:+919999999999"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-secondary text-accent border border-accent/30 shadow-2xl transition-all duration-300 hover:scale-110 group relative"
      >
        <PhoneCall className="w-5 h-5" />
        <span className="absolute right-full mr-3 bg-luxury-dark/95 text-accent text-[10px] uppercase tracking-widest font-semibold py-1 px-3.5 rounded border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Call Concierge
        </span>
      </a>
    </div>
  );
}
