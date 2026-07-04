"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";
import LuxuryButton from "@/components/LuxuryButton";
import { Star, ShieldCheck, HeartPulse, Quote, User, Sparkles } from "lucide-react";

interface Review {
  id?: number;
  name: string;
  rating: number;
  text: string;
  treatment: string;
  location: string;
}

export default function TestimonialsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    text: "",
    treatment: "General Detox",
    location: "United Kingdom"
  });
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      if (res.ok) {
        const data = await res.json();
        if (data.length > 0) {
          setReviews(data);
        } else {
          setReviews([
            {
              id: 101,
              name: "Alexandra de Beaufort",
              rating: 5,
              text: "The 14-day Kayakalpa Immersion has completely re-authored my physical trajectory. I arrived with severe insomnia and joint wear, and left feeling a deep metabolic lightness. The clinical precision of Dr. Vasudevan is unmatched. Truly, the Aman resort of wellness.",
              treatment: "14-Day Kayakalpa",
              location: "Geneva, Switzerland"
            },
            {
              id: 102,
              name: "Vikram Malhotra",
              rating: 5,
              text: "Most clinics offer a watered down version of Panchakarma. Soma & Ananda adheres strictly to classical texts. The medicated oils, the continuous presence of doctors during treatments, and the luxury cottage environment created the absolute perfect healing field.",
              treatment: "7-Day Shanti Detox",
              location: "New York, USA"
            },
            {
              id: 103,
              name: "Lady Caroline Cavendish",
              rating: 5,
              text: "The Basti and Shirodhara therapies literally calmed my chronic autonomic anxiety within days. The food is a masterclass in culinary alchemy—delicious yet profoundly therapeutic.",
              treatment: "21-Day Pilgrimage",
              location: "London, UK"
            }
          ]);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) {
      setStatus("Please fill in your name and review text.");
      return;
    }
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("Your review was posted successfully! It is now stored in our database records.");
        setForm({
          name: "",
          rating: 5,
          text: "",
          treatment: "General Detox",
          location: "United Kingdom"
        });
        fetchReviews();
      } else {
        setStatus("Could not save review. Try again.");
      }
    } catch (err) {
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          subtitle="Guest Chronicles"
          title="Narratives of Restored Radiance"
          description="Read real descriptions from travelers, creators, and business leaders who spent weeks grounding their nervous systems and purifying their physiology at our sanctuary."
        />

        {/* Rating Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center max-w-4xl mx-auto bg-primary/20 border border-accent/15 rounded-2xl p-6">
          <div className="flex flex-col justify-center">
            <span className="font-serif text-4xl text-accent font-semibold">4.97 / 5</span>
            <span className="text-[10px] uppercase text-cream/50 mt-1 tracking-wider">Aggregate Guest Rating</span>
          </div>
          <div className="flex flex-col justify-center border-y md:border-y-0 md:border-x border-accent/10 py-4 md:py-0">
            <div className="flex justify-center gap-1 text-accent">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="text-[10px] uppercase text-cream/50 mt-2 tracking-wider">120+ Verified Reviews</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-sm text-cream font-medium italic">“Voted World's #1 Luxury Ayurveda Retreat in 2025”</span>
          </div>
        </div>

        {/* Review list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reviews.map((rev, index) => (
            <GlassCard key={rev.id || index} className="flex flex-col justify-between h-full bg-primary/10">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1 text-accent">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-accent font-bold px-2 py-0.5 rounded border border-accent/15 bg-primary/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified Residency
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-cream/80 leading-relaxed italic mb-6 font-light">
                  “{rev.text}”
                </p>
              </div>

              <div className="pt-4 border-t border-accent/10 mt-auto flex justify-between items-center">
                <div>
                  <h4 className="text-xs text-cream font-semibold">{rev.name}</h4>
                  <p className="text-[10px] text-cream/40">{rev.location}</p>
                </div>
                <span className="text-[10px] text-accent font-medium uppercase font-sans tracking-wide">
                  {rev.treatment}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Submit Review Form Box */}
        <div className="max-w-xl mx-auto bg-primary/30 border border-accent/20 rounded-2xl p-6 md:p-8">
          <h2 className="font-serif text-2xl text-cream mb-2 font-medium text-center">Add Your Chronicle</h2>
          <p className="text-xs text-cream/60 leading-relaxed text-center mb-8 font-light">
            If you spent time at our Rishikesh or Kerala wings, please write your detailed experience for our patient register.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] uppercase text-accent tracking-widest block mb-1">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Sterling H. Dupont"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#071F16]/60 border border-accent/20 rounded-lg p-2.5 text-xs text-cream focus:outline-none focus:border-accent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] uppercase text-accent tracking-widest block mb-1">Location</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Geneva, CH"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full bg-[#071F16]/60 border border-[#C8A96A]/20 rounded-lg p-2.5 text-xs text-cream focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase text-accent tracking-widest block mb-1">Rating</label>
                <select
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                  className="w-full bg-[#071F16]/60 border border-[#C8A96A]/20 rounded-lg p-2.5 text-xs text-accent focus:outline-none focus:border-accent"
                >
                  <option value={5}>5 Stars (Flawless)</option>
                  <option value={4}>4 Stars (Very Good)</option>
                  <option value={3}>3 Stars (Good)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase text-accent tracking-widest block mb-1">Therapeutic Immersion</label>
              <input
                type="text"
                required
                placeholder="e.g. 14-Day Kayakalpa Detox"
                value={form.treatment}
                onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                className="w-full bg-[#071F16]/60 border border-accent/20 rounded-lg p-2.5 text-xs text-cream focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-accent tracking-widest block mb-1">Your Chronicle</label>
              <textarea
                rows={4}
                required
                placeholder="Describe your daily evaluations, the physicians' expertise, treatments, food alchemy, and overall health progression."
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full bg-[#071F16]/60 border border-accent/20 rounded-lg p-2.5 text-xs text-cream focus:outline-none"
              />
            </div>

            <LuxuryButton type="submit" variant="accent" className="w-full" showIcon={false}>
              Archive Review
            </LuxuryButton>

            {status && (
              <p className="text-xs text-center text-accent font-medium mt-4 bg-[#071F16] p-3 rounded-lg border border-accent/15">
                {status}
              </p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
