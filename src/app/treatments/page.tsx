"use client";

import { TREATMENTS } from "@/data/ayurvedaData";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import LuxuryButton from "@/components/LuxuryButton";
import { Clock, CheckCircle2, HeartPulse, ChevronRight, Award } from "lucide-react";
import Link from "next/link";

export default function TreatmentsPage() {
  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionTitle
          subtitle="Soma Purifications"
          title="The Five Streams of Classical Panchakarma"
          description="Panchakarma is not a generalized body scrub or an aromatherapy session. It is an intensive, five-fold physical and chemical evacuation system that loosens, dissolves, and physically flushes hydrophobic heavy metals and systemic toxins from deep within the lipid chambers."
        />

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((t) => (
            <div
              key={t.id}
              className="bg-primary/20 border border-accent/15 rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 rounded-xl overflow-hidden mb-6 border border-accent/15">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#071F16]/95 backdrop-blur-sm border border-accent/30 py-1.5 px-3 rounded text-[9px] uppercase tracking-wider text-accent font-bold">
                    {t.sanskrit}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-2xl text-cream font-medium group-hover:text-accent transition-colors">
                    {t.name}
                  </h3>
                  <span className="text-[10px] text-accent font-sans font-bold uppercase">{t.price.split(" ")[0]}</span>
                </div>

                <p className="text-[11px] text-accent/80 italic tracking-wider uppercase mb-3 block">{t.tagline}</p>
                
                <p className="text-xs text-cream/70 leading-relaxed font-light mb-6 line-clamp-3">
                  {t.description}
                </p>

                {/* Benefits mini list */}
                <div className="mb-6">
                  <p className="text-[9px] uppercase tracking-wider text-accent font-bold mb-2">Clinical Benefits</p>
                  <ul className="space-y-1.5">
                    {t.benefits.slice(0, 3).map((b, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs text-cream/80 leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-accent/10 mt-auto flex flex-col gap-3">
                <div className="flex justify-between text-[10px] text-cream/40">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-accent" /> {t.duration.split(" ")[0]} Mins</span>
                  <span>Hospital-grade</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <LuxuryButton href={`/treatments/${t.id}`} variant="outline" className="!px-3 !py-2 text-[10px] uppercase font-bold text-center">
                    Procedure
                  </LuxuryButton>
                  <LuxuryButton href={`/book?therapy=${t.id}`} variant="accent" className="!px-3 !py-2 text-[10px] uppercase font-bold text-center" showIcon={false}>
                    Inquire
                  </LuxuryButton>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Informative Grid Row */}
        <div className="mt-24 bg-[#09251C] rounded-2xl p-8 md:p-12 border border-accent/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex gap-3 flex-col">
              <span className="text-[10px] uppercase text-accent font-bold tracking-widest">01. Internal Oleation</span>
              <p className="text-xs text-cream/70 leading-relaxed font-light">
                Drinking hot medicated cow ghee prepared with bitter herbs allows organic lipids to penetrate fat stores, trapping systemic toxins like heavy metals.
              </p>
            </div>
            <div className="flex gap-3 flex-col">
              <span className="text-[10px] uppercase text-accent font-bold tracking-widest">02. Sudation & Steam</span>
              <p className="text-xs text-cream/70 leading-relaxed font-light">
                Applying steam massages liquefies these lipid-trapped toxins, channeling them safely into your gastrointestinal tract for rapid physical extraction.
              </p>
            </div>
            <div className="flex gap-3 flex-col">
              <span className="text-[10px] uppercase text-accent font-bold tracking-widest">03. Target Evacuation</span>
              <p className="text-xs text-cream/70 leading-relaxed font-light">
                Physically flushing the toxic buildup from the stomach (Vamana), bowels (Virechana), or colon (Basti) restores the system to pristine genetic health.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
