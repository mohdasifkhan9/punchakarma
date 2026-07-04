"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import LuxuryButton from "@/components/LuxuryButton";
import { FAQS } from "@/data/ayurvedaData";
import { Search, HelpCircle, AlertCircle, ArrowRight } from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveFilter] = useState("All");

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          subtitle="Direct Clinical Guidance"
          title="The FAQ & Knowledge Commons"
          description="Deconstruct the Panchakarma process. Read detailed clarifications regarding medical protocols, dietary constraints, accommodation arrangements, and medical safety."
        />

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
            <input
              type="text"
              placeholder="Search specific questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0D3B2A]/40 border border-accent/25 focus:border-accent rounded-xl pl-10 pr-4 py-3 text-xs text-cream placeholder-cream/40 focus:outline-none transition-all"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {["All", "General", "Treatments", "Duration", "Cost"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-primary"
                    : "bg-[#0D3B2A]/20 hover:bg-primary/40 text-cream/70 border border-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="space-y-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div key={idx} className="bg-primary/20 border border-accent/15 rounded-xl p-5 md:p-8 hover:border-accent/40 transition-colors duration-300">
                <div className="flex gap-3 justify-between items-start mb-3">
                  <span className="text-[9px] uppercase tracking-widest text-accent font-bold bg-[#071F16] px-2 py-0.5 rounded border border-accent/15">
                    {faq.category}
                  </span>
                  <span className="text-[10px] text-accent/50 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Medical Officer Approved
                  </span>
                </div>
                
                <h3 className="font-serif text-xl text-cream font-medium mb-3">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-12 glass-card rounded-xl">
              <HelpCircle className="w-10 h-10 text-accent/50 mx-auto mb-3" />
              <p className="text-xs text-cream/50">No answers matched your criteria. Contact our registry directly.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#09251C] rounded-2xl p-8 border border-accent/20 text-center">
          <HelpCircle className="w-8 h-8 text-accent mx-auto mb-4" />
          <h3 className="font-serif text-xl text-cream font-medium mb-2">Have a Complex Pathological Query?</h3>
          <p className="text-xs text-cream/65 max-w-lg mx-auto leading-relaxed mb-6 font-light">
            Certain severe chronic diseases require direct board review. Submit your medical logs and standard blood markers for a confidential evaluation.
          </p>
          <LuxuryButton href="/contact" variant="accent">
            Inquire Confidential Board Review
          </LuxuryButton>
        </div>

      </div>
    </div>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}
