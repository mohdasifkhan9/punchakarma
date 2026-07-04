"use client";

import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import LuxuryButton from "@/components/LuxuryButton";
import { CheckCircle2, ShieldCheck, Heart, Sparkles, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3 block">
            Our Ancestral Foundation
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-cream font-light leading-tight tracking-wide mb-6">
            The Legend of <span className="italic text-accent">Soma & Ananda</span>
          </h1>
          <div className="w-24 h-[1px] bg-accent/30 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-cream/70 leading-relaxed font-light">
            Founded high in the sacred valleys of Rishikesh, overlooking the pristine blue currents of the Ganges, Soma & Ananda was conceived to bridge pure ancient Vedic medical pharmacology with the comforting retreat sanctuary standards of the world's most elite resorts.
          </p>
        </div>

        {/* Feature Split 1: Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24 pb-20 border-b border-accent/10">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-accent/15 relative">
              <img
                src="https://images.pexels.com/photos/36774486/pexels-photo-36774486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=550"
                alt="Ancient Himalayan Valley"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent opacity-50" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block mb-2">The Malabar Legacy</span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-6">
              Eight Generations of Traditional Healing Science
            </h2>
            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed font-light mb-6">
              Our chief physician, Dr. Vasudevan Namboothiri, carries forward a lineage documented on authentic palm-leaf records dating back over 350 years to the Malabar Coast of Kerala. These manuscripts contain complex molecular formulas for herb curing, neurological restoration, and specialized pulse diagnosis (Nadi Pariksha) that cannot be found in standard textbooks.
            </p>
            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed font-light mb-8">
              At Soma & Ananda, this ancestral wisdom is reinforced by strict modern laboratory diagnostics. This integration ensures that every custom-formulated oil drop is both structurally potent and chemically verified.
            </p>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs text-accent">
                <ShieldCheck className="w-4 h-4" /> 100% Classical Texts Compliance
              </div>
              <div className="w-[1px] bg-accent/20" />
              <div className="flex items-center gap-2 text-xs text-accent">
                <Award className="w-4 h-4" /> NABH Hospital Grade Certified
              </div>
            </div>
          </div>
        </div>

        {/* Feature Split 2: Farm-To-Table Pharmacology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24 pb-20 border-b border-accent/10 lg:flex-row-reverse">
          <div className="lg:col-span-6 lg:order-2">
            <div className="rounded-2xl overflow-hidden border border-accent/15 relative">
              <img
                src="https://images.pexels.com/photos/6629614/pexels-photo-6629614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=550"
                alt="Organic Herb Harvesting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent opacity-50" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block mb-2">Sacred Agriculture</span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-6">
              Our Micro-Farming Botanical Reserve
            </h2>
            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed font-light mb-6">
              We do not source raw ingredients from commercial pharmaceutical bulk dealers. We cultivate our therapeutic species—such as fresh Ashwagandha, rare Brahmi, and hand-pressed Amalaki—on our own private, certified organic farmlands nestled in the rich, mineral-dense Himalayan foothills.
            </p>
            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed font-light mb-8">
              Each plant is harvested in alignment with classical astronomical calendars (Vedic Panchang) during specified lunar tides to maximize the botanical concentration of active cellular alkaloids. The herbs are then slow-boiled on-site in copper vessels using pure mountain spring water and hand-churned A2 cow ghee.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <li className="flex gap-2 items-center text-xs text-cream/80">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Zero Synthetic Fertilizers
              </li>
              <li className="flex gap-2 items-center text-xs text-cream/80">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Solar-Powered Copper Distilleries
              </li>
              <li className="flex gap-2 items-center text-xs text-cream/80">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Ethically Paid Farmers & Tribals
              </li>
              <li className="flex gap-2 items-center text-xs text-cream/80">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Spring-Water Nourished Soils
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: The Sanctuary Architecture */}
        <div className="mb-24 text-center">
          <SectionTitle
            subtitle="Eco-conscious Luxury"
            title="Designed in Pure Reverence for Nature"
            description="Our physical sanctuary is built entirely from sustainable local teakwood, river stone, and lime plaster to promote maximum electromagnetic grounding."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="bg-[#0D3B2A]/20">
              <Heart className="w-6 h-6 text-accent mb-4 mx-auto" />
              <h3 className="font-serif text-lg text-cream mb-2 font-medium">Silent Zones</h3>
              <p className="text-xs text-cream/60 leading-relaxed font-light">
                Our suite quarters are designated strictly silent zones, preventing electronic interference to preserve the natural circadian rhythms of our guests.
              </p>
            </GlassCard>

            <GlassCard className="bg-[#0D3B2A]/20">
              <Sparkles className="w-6 h-6 text-accent mb-4 mx-auto" />
              <h3 className="font-serif text-lg text-cream mb-2 font-medium">Copper Fluidic Pipes</h3>
              <p className="text-xs text-cream/60 leading-relaxed font-light">
                All drinking and therapy water is routed through high-grade copper piping, naturally ionizing the water and activating digestive health.
              </p>
            </GlassCard>

            <GlassCard className="bg-[#0D3B2A]/20">
              <ShieldCheck className="w-6 h-6 text-accent mb-4 mx-auto" />
              <h3 className="font-serif text-lg text-cream mb-2 font-medium">Vedic Vastu Geometrics</h3>
              <p className="text-xs text-cream/60 leading-relaxed font-light">
                The entire layout of the resort is structured around classical Vastu Shastra principles, enhancing positive magnetic energy and quiet nervous systems.
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#09251C] rounded-2xl p-8 md:p-12 border border-accent/20 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
          <h2 className="font-serif text-2xl md:text-4xl text-cream font-light mb-4">
            Ready to Begin Your Wellness Re-authorship?
          </h2>
          <p className="text-xs md:text-sm text-cream/70 max-w-xl mx-auto leading-relaxed mb-8 font-light">
            Each month, we accept only 12 exclusive residential guests to guarantee absolute, intensive physician attention and individual therapeutic focus. Register early to claim your suite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <LuxuryButton href="/book" variant="accent">
              Book Consultation
            </LuxuryButton>
            <LuxuryButton href="/packages" variant="outline">
              View Immersions & Rates
            </LuxuryButton>
          </div>
        </div>

      </div>
    </div>
  );
}
