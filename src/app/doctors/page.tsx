"use client";

import { DOCTORS } from "@/data/ayurvedaData";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import LuxuryButton from "@/components/LuxuryButton";
import { Award, GraduationCap, Briefcase, Sparkles, UserCheck } from "lucide-react";

export default function DoctorsPage() {
  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionTitle
          subtitle="Our Eminent Vaidyas"
          title="Physicians of Supreme Clinical Authority"
          description="Soma & Ananda rejects the diluted commercial spa approach. Our senior medical board represents the vanguard of classical academic Ayurveda, balancing centuries-old palm leaf diagnostics with global scientific rigor."
        />

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 gap-16">
          {DOCTORS.map((doc, index) => (
            <div
              key={doc.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-primary/25 border border-accent/15 rounded-2xl p-6 md:p-12 shadow-2xl relative overflow-hidden group ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 filter blur-3xl pointer-events-none" />

              {/* Profile Image Column */}
              <div className="lg:col-span-4 relative max-w-sm mx-auto lg:max-w-none w-full">
                <div className="rounded-xl overflow-hidden border border-accent/25 relative aspect-4/5 shadow-xl">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top filter saturate-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
                </div>
              </div>

              {/* Profile Dossier Details Column */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold mb-2 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5" /> Chief Medical Board Representative
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-cream font-medium">
                  {doc.name}
                </h2>
                <p className="text-sm text-accent italic font-serif mt-1">{doc.title}</p>
                <div className="w-12 h-[1px] bg-accent/30 my-4" />

                {/* Technical stats boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#071F16]/80 rounded-lg p-4 border border-accent/10 flex gap-3 items-start">
                    <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase text-cream/40 tracking-wider">University Credentials</p>
                      <p className="text-xs text-cream/80 font-medium leading-relaxed mt-0.5">{doc.qualification}</p>
                    </div>
                  </div>

                  <div className="bg-[#071F16]/80 rounded-lg p-4 border border-accent/10 flex gap-3 items-start">
                    <Briefcase className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase text-cream/40 tracking-wider">Core Clinical Specialization</p>
                      <p className="text-xs text-cream/80 font-medium leading-relaxed mt-0.5">{doc.specialization}</p>
                    </div>
                  </div>
                </div>

                {/* Narrative Bio */}
                <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light mb-6">
                  {doc.bio}
                </p>

                {/* Honors and Awards */}
                <div className="mb-8 bg-[#09251C] p-4 rounded-xl border border-accent/10">
                  <p className="text-[10px] uppercase tracking-wider text-accent font-bold mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Honors, Decorations & Titles
                  </p>
                  <ul className="flex flex-col gap-2">
                    {doc.awards.map((aw, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-cream/70">
                        <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{aw}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Active CTA */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <LuxuryButton href={`/book?doctor=${doc.id}`} variant="accent" className="w-full sm:w-auto">
                    Secure Consultation with {doc.name.split(" ")[1]}
                  </LuxuryButton>
                  <a
                    href="tel:+919999999999"
                    className="text-xs uppercase tracking-widest text-cream/60 hover:text-accent font-semibold flex items-center gap-1"
                  >
                    Discuss Flight Options First &rarr;
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Final Disclaimer banner */}
        <div className="mt-20 glass-card rounded-2xl p-6 md:p-8 text-center border border-accent/15 max-w-3xl mx-auto">
          <p className="text-[11px] text-cream/50 leading-relaxed font-light">
            All consultations are conducted with standard Sanskrit transcription logging. Our clinical procedures are fully documented and compliant under the clinical standards of the Ministry of AYUSH, Government of India.
          </p>
        </div>

      </div>
    </div>
  );
}
