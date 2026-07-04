"use client";

import { use } from "react";
import { CONDITIONS } from "@/data/ayurvedaData";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import LuxuryButton from "@/components/LuxuryButton";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, HeartPulse, Sparkles, Apple } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ConditionDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const condition = CONDITIONS.find((c) => c.id === id);

  if (!condition) {
    return (
      <div className="bg-[#071F16] min-h-screen py-24 text-center flex flex-col items-center justify-center">
        <AlertTriangle className="w-12 h-12 text-accent mb-4" />
        <h1 className="font-serif text-3xl text-cream mb-2">Condition Protocol Not Listed</h1>
        <p className="text-xs text-cream/50 max-w-sm mb-6">The requested chronic pathology is not currently covered in our digital brochures.</p>
        <LuxuryButton href="/conditions" variant="outline">Back to Conditions</LuxuryButton>
      </div>
    );
  }

  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/conditions" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent hover:text-white mb-10 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Conditions Listed
        </Link>

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-3">
              Specialized Recovery Program
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-light leading-tight tracking-wide mb-6">
              Addressing {condition.name}
            </h1>
            <p className="text-xs uppercase tracking-widest text-accent/80 font-bold mb-6 font-sans">
              {condition.tagline}
            </p>
            <div className="w-16 h-[1px] bg-accent/30 mb-6" />
            
            <p className="font-sans text-sm sm:text-base text-cream/70 leading-relaxed font-light mb-8">
              {condition.description}
            </p>

            <div className="flex gap-4">
              <LuxuryButton href={`/book?condition=${condition.id}`} variant="accent">
                Request Clinical Callback
              </LuxuryButton>
              <LuxuryButton href="/doctors" variant="outline">
                Consult Senior Vaidya
              </LuxuryButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-accent/25 shadow-2xl relative aspect-4/5 max-w-sm mx-auto">
              <img
                src={condition.image}
                alt={condition.name}
                className="w-full h-full object-cover filter saturate-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071F16] via-transparent to-transparent opacity-65" />
            </div>
          </div>
        </div>

        {/* Technical Guidelines Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Symptoms & Recommended therapies */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-[#09251C] border border-accent/15 rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl text-cream mb-4 font-semibold flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-accent" /> Clinical Symptoms Addressed
              </h3>
              <p className="text-xs text-cream/60 leading-relaxed mb-4 font-light">
                Our physicians track these physiological indicators of tissue stagnation (Ama accumulation):
              </p>
              <ul className="space-y-3">
                {condition.symptoms.map((s, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs text-cream/80">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0D3B2A]/20 border border-accent/15 rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl text-accent mb-4 font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" /> Advised Panchakarma Therapies
              </h3>
              <p className="text-xs text-cream/60 leading-relaxed mb-4 font-light">
                A combination of these core cleansing procedures is typically structured into your stay:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {condition.recommendedTherapies.map((tName, idx) => (
                  <span
                    key={idx}
                    className="bg-[#071F16] border border-accent/25 text-cream text-[11px] font-semibold px-3 py-1.5 rounded-lg"
                  >
                    {tName}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Dietary & Botanical Advice */}
          <div className="lg:col-span-6">
            <GlassCard className="bg-[#0D3B2A]/30 p-6 md:p-8 h-full">
              <h3 className="font-serif text-xl text-cream mb-4 font-semibold flex items-center gap-2">
                <Apple className="w-5 h-5 text-accent" /> Bio-Individual Nutrition (Ahara & Vihara)
              </h3>
              <p className="text-xs text-cream/60 leading-relaxed mb-6 font-light">
                Ayurvedic recovery relies heavily on culinary pharmacology. Your chef prepares meals adhering strictly to these nutritional instructions during your stay:
              </p>
              
              <div className="space-y-4">
                {condition.dietaryAdvice.map((adv, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-[#071F16]/50 p-4 rounded-xl border border-accent/10">
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-cream/80 leading-relaxed font-light">
                      {adv}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>

        {/* Consultation Call out */}
        <div className="bg-[#09251C] rounded-2xl p-8 md:p-12 border border-accent/20 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-cream font-light mb-4">
            Initiate Your Personalized Recovery Dossier
          </h2>
          <p className="text-xs text-cream/70 max-w-xl mx-auto leading-relaxed mb-8 font-light">
            Every clinical guest is given direct priority email & phone correspondence with their assigned physician. Your recovery journey starts with a simple form submission.
          </p>
          <LuxuryButton href={`/book?condition=${condition.id}`} variant="accent">
            Begin Case Intake Form
          </LuxuryButton>
        </div>

      </div>
    </div>
  );
}
