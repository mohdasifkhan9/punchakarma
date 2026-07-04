"use client";

import { PACKAGES } from "@/data/ayurvedaData";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import LuxuryButton from "@/components/LuxuryButton";
import { CheckCircle2, ShieldCheck, Info, Award, HelpCircle } from "lucide-react";

export default function PackagesPage() {
  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          subtitle="Inclusive Immersions"
          title="Bespoke Residential Clinical Packages"
          description="Soma & Ananda clinical immersions are completely all-inclusive. Each rate comprises luxury cottage lodging, personalized medical evaluation, organic farm-to-table culinary nutrition, daily medications, and unlimited customized classical treatments."
        />

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-primary/25 border border-accent/20 rounded-2xl p-6 md:p-10 flex flex-col justify-between hover:border-accent/40 hover:shadow-2xl transition-all duration-300 relative group"
            >
              {/* Top highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold px-3 py-1 rounded bg-[#071F16] border border-accent/15">
                      {pkg.duration} Immersion
                    </span>
                    <h2 className="font-serif text-3xl text-cream font-light mt-4">{pkg.name}</h2>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-cream/40 block">All-Inclusive Rate</span>
                    <span className="font-serif text-2xl text-accent font-semibold">{pkg.price}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-cream/70 italic leading-relaxed mb-8 font-light border-b border-accent/10 pb-4">
                  “{pkg.tagline}”
                </p>

                {/* Specs list */}
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase text-accent font-semibold tracking-wider">Luxury Lodging Included</h4>
                      <p className="text-xs text-cream/80 mt-0.5">{pkg.stay}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase text-accent font-semibold tracking-wider">Bespoke Organic Cuisine</h4>
                      <p className="text-xs text-cream/80 mt-0.5">{pkg.meals}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase text-accent font-semibold tracking-wider">Physician Supervision</h4>
                      <p className="text-xs text-cream/80 mt-0.5">{pkg.consultation}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase text-accent font-semibold tracking-wider">Procedural Core Cleanse</h4>
                      <p className="text-xs text-cream/80 mt-0.5">{pkg.treatments}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-[#071F16]/60 p-4 rounded-xl border border-accent/10 mb-8">
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-3">Amenities & Services Included</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cream/70">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-1.5 items-start">
                        <span className="text-accent">&bull;</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                <LuxuryButton href={`/book?package=${pkg.id}`} variant="accent" className="w-full">
                  Book This Immersion Sanctuary
                </LuxuryButton>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Banner */}
        <div className="bg-[#09251C] rounded-2xl p-8 md:p-12 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase text-accent font-bold tracking-widest flex items-center gap-1.5 mb-2">
              <Award className="w-4 h-4 animate-pulse" /> Verified NABH Class-A Sanctuary
            </span>
            <h3 className="font-serif text-2xl text-cream font-light">International Guest Insurance & Billing</h3>
            <p className="text-xs text-cream/60 leading-relaxed font-light mt-2">
              We provide standard certified medical receipts, doctor prescriptions, and clinical procedure summaries for international health insurance claims. Speak to our registrar regarding your coverage.
            </p>
          </div>
          <LuxuryButton href="/contact" variant="outline">
            Inquire Insurance Claims
          </LuxuryButton>
        </div>

      </div>
    </div>
  );
}
