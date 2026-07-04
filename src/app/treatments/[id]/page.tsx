"use client";

import { use, useEffect, useState } from "react";
import { TREATMENTS, Treatment } from "@/data/ayurvedaData";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import LuxuryButton from "@/components/LuxuryButton";
import Link from "next/link";
import {
  Clock,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Info,
  CalendarDays,
  ShieldCheck,
  Zap,
  Bookmark
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function TreatmentDetailPage({ params }: PageProps) {
  // Resolve the params promise using React.use()
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const treatment = TREATMENTS.find((t) => t.id === id);

  if (!treatment) {
    return (
      <div className="bg-[#071F16] min-h-screen py-24 text-center flex flex-col items-center justify-center">
        <AlertTriangle className="w-12 h-12 text-accent mb-4" />
        <h1 className="font-serif text-3xl text-cream mb-2">Therapy Protocol Not Found</h1>
        <p className="text-xs text-cream/50 max-w-sm mb-6">The requested Panchakarma procedure does not match our current clinical registers.</p>
        <LuxuryButton href="/treatments" variant="outline">Back to Therapies</LuxuryButton>
      </div>
    );
  }

  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link href="/treatments" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent hover:text-white mb-10 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Core Therapies
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-3">
              {treatment.sanskrit}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-light leading-tight tracking-wide mb-6">
              The {treatment.name} <span className="italic text-accent">Protocol</span>
            </h1>
            <div className="w-16 h-[1px] bg-accent/30 mb-6" />
            
            <p className="font-sans text-sm sm:text-base text-cream/70 leading-relaxed font-light mb-8">
              {treatment.description}
            </p>

            <div className="flex flex-wrap gap-4 items-center bg-[#0D3B2A]/40 border border-accent/15 p-4 rounded-xl mb-8">
              <div className="flex items-center gap-2 text-xs text-cream/80">
                <Clock className="w-4 h-4 text-accent" />
                <span>{treatment.duration}</span>
              </div>
              <div className="hidden sm:block w-[1px] h-6 bg-accent/20" />
              <div className="text-xs text-accent font-semibold">
                Clinical Value: {treatment.price}
              </div>
            </div>

            <div className="flex gap-4">
              <LuxuryButton href={`/book?therapy=${treatment.id}`} variant="accent">
                Book This Ritual
              </LuxuryButton>
              <LuxuryButton href="/contact" variant="outline">
                Speak to a Physician
              </LuxuryButton>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-accent/25 shadow-2xl relative aspect-4/3">
              <img
                src={treatment.image}
                alt={treatment.name}
                className="w-full h-full object-cover filter saturate-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F16] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* Detailed clinical content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Primary details: Procedure & Aftercare */}
          <div className="lg:col-span-8 space-y-8">
            <GlassCard className="bg-primary/20">
              <h2 className="font-serif text-2xl text-cream mb-4 font-medium flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" /> Step-by-Step Clinical Procedure
              </h2>
              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                {treatment.procedure}
              </p>
            </GlassCard>

            <GlassCard className="bg-primary/20">
              <h2 className="font-serif text-2xl text-cream mb-4 font-medium flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-accent" /> Critical Restorative Aftercare (Paschatkarma)
              </h2>
              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                {treatment.aftercare}
              </p>
            </GlassCard>
          </div>

          {/* Secondary Details: Indications & Benefits */}
          <div className="lg:col-span-4 space-y-8">
            {/* Benefits */}
            <div className="bg-[#09251C] border border-accent/15 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-accent font-bold mb-4">Core Benefits</h3>
              <ul className="space-y-3">
                {treatment.benefits.map((b, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs text-cream/80">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Indications */}
            <div className="bg-primary/35 border border-accent/15 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-rose-300 font-bold mb-4">Therapeutic Indications</h3>
              <ul className="space-y-3">
                {treatment.indications.map((ind, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs text-rose-100">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#09251C] rounded-2xl p-8 md:p-12 border border-accent/20 text-center relative overflow-hidden">
          <h2 className="font-serif text-2xl md:text-3xl text-cream font-light mb-4">
            Is {treatment.name} Suitable For Your Dosha?
          </h2>
          <p className="text-xs text-cream/70 max-w-xl mx-auto leading-relaxed mb-8 font-light">
            Every guest undergoes a full 45-minute constitutional analysis and pulse reading prior to procedural initiation. This guarantees that your treatment parameters are perfectly calibrated to your current physical capabilities.
          </p>
          <LuxuryButton href={`/book?therapy=${treatment.id}`} variant="accent">
            Request Constitutional Booking
          </LuxuryButton>
        </div>

      </div>
    </div>
  );
}
