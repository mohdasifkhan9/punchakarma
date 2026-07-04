"use client";

import { CONDITIONS } from "@/data/ayurvedaData";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import LuxuryButton from "@/components/LuxuryButton";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ConditionsPage() {
  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionTitle
          subtitle="Clinical Horizons"
          title="Root Resolutions for Chronic Pathologies"
          description="In clinical Ayurvedic medicine, chronic disorders represent years of deep-tissue stagnation (Ama) driven by corrupted physical movements (Vata), heat (Pitta), or density (Kapha). We do not suppress symptoms; we realign metabolic intelligence."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONDITIONS.map((c) => (
            <div
              key={c.id}
              className="bg-primary/20 border border-accent/15 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-accent/40 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 border border-accent/15">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F16] to-transparent opacity-65" />
                </div>

                <h3 className="font-serif text-2xl text-cream font-medium mb-1 group-hover:text-accent transition-colors">
                  {c.name}
                </h3>
                <p className="text-[10px] text-accent tracking-wider uppercase mb-4 block font-semibold">{c.tagline}</p>
                
                <p className="text-xs text-cream/70 leading-relaxed font-light mb-6">
                  {c.description}
                </p>

                {/* symptoms sneak peek */}
                <div className="mb-6">
                  <p className="text-[9px] uppercase tracking-wider text-accent font-bold mb-2">Primary Signs Addressed</p>
                  <ul className="space-y-1">
                    {c.symptoms.slice(0, 3).map((sym, idx) => (
                      <li key={idx} className="flex gap-1.5 items-start text-xs text-cream/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-accent/10 mt-auto flex items-center justify-between">
                <span className="text-[10px] uppercase text-cream/40 tracking-wider">
                  {c.recommendedTherapies.join(" + ")}
                </span>
                <Link href={`/conditions/${c.id}`} className="text-xs font-semibold text-accent group-hover:underline flex items-center gap-1">
                  Full Protocol &rarr;
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Why Ayurveda Banner */}
        <div className="mt-20 glass-card rounded-2xl p-8 md:p-12 text-center border border-accent/20">
          <h2 className="font-serif text-2xl md:text-3xl text-cream font-light mb-4">
            Unsure of Your Root Pathological Imbalance?
          </h2>
          <p className="text-xs text-cream/70 max-w-xl mx-auto leading-relaxed mb-8 font-light">
            Sanskrit classical diagnostics allow us to read 7 layers of pulse variables, uncovering sub-clinical congestion before it manifests as structural pathology. Register for a remote zoom or residential evaluation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <LuxuryButton href="/book" variant="accent">
              Schedule Diagnostic Call
            </LuxuryButton>
            <LuxuryButton href="/contact" variant="outline">
              Contact Medical Registrar
            </LuxuryButton>
          </div>
        </div>

      </div>
    </div>
  );
}
