"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  Heart,
  Calendar,
  Layers,
  ChevronRight,
  Star,
  Users,
  Award,
  BookOpen,
  Search,
  MessageCircle,
  HelpCircle,
  Send,
  Phone,
  Mail,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
  Camera,
  MapPin,
  UserCheck
} from "lucide-react";
import {
  TREATMENTS,
  CONDITIONS,
  PACKAGES,
  DOCTORS,
  BLOG_POSTS,
  FAQS,
  Treatment,
  Condition,
  Package
} from "@/data/ayurvedaData";
import LuxuryButton from "@/components/LuxuryButton";
import SectionTitle from "@/components/SectionTitle";
import GlassCard from "@/components/GlassCard";

interface Review {
  id?: number;
  name: string;
  rating: number;
  text: string;
  treatment: string;
  location: string;
  createdAt?: string;
}

export default function HomePage() {
  // Client States
  const [activeTab, setActiveTab] = useState<"vamana" | "virechana" | "basti" | "nasya" | "raktamokshana">("basti");
  const [faqSearch, setFaqSearch] = useState("");
  const [selectedFaqCategory, setSelectedFaqCategory] = useState("All");
  
  // Custom interactive Review state
  const [reviews, setReviews] = useState<Review[]>([]);
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    text: "",
    treatment: "Panchakarma Detox",
    location: "United States"
  });
  const [reviewStatus, setReviewStatus] = useState<string | null>(null);

  // Quick Consultation scheduler quick state (from homepage)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Home Page Quick Contact",
    message: ""
  });
  const [contactStatus, setContactStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [sendingInquiry, setSendingInquiry] = useState(false);

  // Load reviews on mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      if (res.ok) {
        const data = await res.json();
        // If empty, use seed testimonials
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
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.text) {
      setReviewStatus("Please complete all the fields.");
      return;
    }
    setSubmittingReview(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewForm)
      });
      const data = await res.json();
      if (res.ok) {
        setReviewStatus("Review posted successfully! Your voice is added to our ledger.");
        setReviewForm({
          name: "",
          rating: 5,
          text: "",
          treatment: "Panchakarma Detox",
          location: "United States"
        });
        fetchReviews();
      } else {
        setReviewStatus(data.error || "Failed to post review.");
      }
    } catch (e) {
      setReviewStatus("Error posting review.");
    } finally {
      setSubmittingReview(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactStatus({ success: false, message: "Please fill in Name, Email, and Message." });
      return;
    }
    setSendingInquiry(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm)
      });
      const data = await res.json();
      if (res.ok) {
        setContactStatus({ success: true, message: data.message });
        setContactForm({
          name: "",
          email: "",
          phone: "",
          subject: "Home Page Quick Contact",
          message: ""
        });
      } else {
        setContactStatus({ success: false, message: data.error || "An error occurred." });
      }
    } catch (e) {
      setContactStatus({ success: false, message: "Failed to send. Please check your connection." });
    } finally {
      setSendingInquiry(false);
    }
  };

  // Filter FAQs based on search and category
  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    const matchesCategory =
      selectedFaqCategory === "All" || faq.category === selectedFaqCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative">
      
      {/* SECTION 1: HERO (Cinematic Ambient Sanctuary) */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12">
        {/* Absolute Background Image with Slow Luxury Ken Burns zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/36774486/pexels-photo-36774486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
            alt="Cinematic Himalayan Wellness Sanctum"
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_8s_infinite] opacity-35 brightness-75 filter saturate-75"
          />
          {/* Rich gradients for high-end text legibility and dark mood */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071F16] via-[#071F16]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071F16] via-transparent to-[#071F16]/90" />
        </div>

        {/* Floating Abstract Leaves/Sparks in Background */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/5 filter blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-500/5 filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          {/* Small Gold Shield */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-accent/25 text-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" /> Luxury Ayurveda & Panchakarma Clinic
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[1.05] tracking-wide font-light max-w-5xl mb-8 animate-fade-in-up">
            Restore Your <span className="italic text-accent">Body</span>,<br />
            <span className="font-light">Mind & Soul</span> Naturally
          </h1>

          {/* Premium Subtitle */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-cream/70 max-w-2xl leading-relaxed tracking-wide mb-10 font-light">
            Step away from modern exhaustion into clinical Ayurvedic excellence. Under the strict supervision of 8th-generation Vaidyas, experience Aman-grade healing designed for cellular rejuvenation.
          </p>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mb-16 w-full max-w-md">
            <LuxuryButton href="/book" variant="accent" className="w-full sm:w-auto">
              Book Consultation
            </LuxuryButton>
            <LuxuryButton href="/treatments" variant="outline" className="w-full sm:w-auto">
              Explore Therapies
            </LuxuryButton>
          </div>

          {/* Animated Statistics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 w-full max-w-6xl border-t border-accent/15 pt-8 mt-4 text-center">
            <div>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-accent font-semibold">32+</p>
              <p className="text-[10px] uppercase tracking-widest text-cream/50 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-accent font-semibold">45K+</p>
              <p className="text-[10px] uppercase tracking-widest text-cream/50 mt-1">Guests Restored</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-accent font-semibold">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-cream/50 mt-1">BAMS MD Physicians</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-accent font-semibold">5/5</p>
              <p className="text-[10px] uppercase tracking-widest text-cream/50 mt-1">Google Rating</p>
            </div>
            <div className="col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-accent/10 pt-4 md:pt-0">
              <p className="font-serif text-xs text-cream italic">“Voted Asia's Best Luxury Wellness Retreat 2025”</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
          <span className="text-[9px] uppercase tracking-[0.25em]">Scroll to enter</span>
          <div className="w-5 h-8 rounded-full border border-cream/30 flex justify-center p-1">
            <span className="w-1 h-2 rounded-full bg-accent animate-bounce" />
          </div>
        </div>
      </section>


      {/* SECTION 2: TRUST BADGES (Hospital Grade Meets Resort Splendor) */}
      <section className="py-12 bg-[#09251C] border-y border-accent/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold font-sans shrink-0">
              Approved Standards & Accreditations
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 w-full max-w-4xl justify-items-center opacity-65">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-[11px] uppercase tracking-widest font-semibold">Ministry of AYUSH</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-[11px] uppercase tracking-widest font-semibold">ISO 9001 Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-[11px] uppercase tracking-widest font-semibold">NABH Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-[11px] uppercase tracking-widest font-semibold">IAMA Affiliated</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 3: ABOUT AYURVEDA & WHY CHOOSE US */}
      <section className="py-24 bg-[#071F16] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Image Reveal and Gold Glimmer */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-accent/20 max-w-md mx-auto lg:max-w-none">
                <img
                  src="https://images.pexels.com/photos/6629613/pexels-photo-6629613.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=600"
                  alt="Ayurvedic Abhyanga Massage Therapy"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071F16] via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Glass Card Info */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#0D3B2A]/90 backdrop-blur-md p-6 rounded-xl border border-accent/30 shadow-2xl max-w-xs">
                <p className="font-serif text-accent text-lg italic mb-2">“Prana Restoration”</p>
                <p className="text-xs text-cream/70 leading-relaxed font-light">
                  Our customized herbal oils are boiled locally using original copper vessels with fresh mountain spring water.
                </p>
              </div>
            </div>

            {/* Right Column: Editorial Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionTitle
                subtitle="The Science of Longevity"
                title="A Harmonious Synthesis of Medical Precision and Spiritual Calm"
                description="We do not look at you as a set of mechanical symptoms. To us, you are a bio-individual universe made of Vata, Pitta, and Kapha. Our treatments aim at structural detoxification rather than temporary comfort."
                align="left"
                className="!mb-8"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-cream">Bio-Individual Customization</h4>
                    <p className="text-[11px] text-cream/60 mt-1 leading-relaxed font-light">
                      No two bodies receive the exact same oil, diet, or treatment cycle. Your pulse is our clinical map.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-cream">8-Generation Lineage</h4>
                    <p className="text-[11px] text-cream/60 mt-1 leading-relaxed font-light">
                      Our physicians carry original handwritten palm-leaf manuscripts prescribing specialized herbal decoctions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-cream">Pharmacological Integrity</h4>
                    <p className="text-[11px] text-cream/60 mt-1 leading-relaxed font-light">
                      We cultivate our own therapeutic herbs in organic forest farmlands, hand-harvested during specific lunar tides.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-cream">Aman-Grade Resort Luxury</h4>
                    <p className="text-[11px] text-cream/60 mt-1 leading-relaxed font-light">
                      Settle in beautiful suites with open-air copper bathtubs, private yoga pavilions, and pristine silence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <LuxuryButton href="/about" variant="primary">
                  The Sanctuary Philosophy
                </LuxuryButton>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 4: THE 5 PANCHAKARMA THERAPIES (HANDCRAFTED TABS) */}
      <section className="py-24 bg-[#09251C] border-t border-accent/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="Deep Purification"
            title="The Five Streams of Classical Panchakarma"
            description="Our sacred five-fold cellular cleansing resets metabolic pathways, flushes systemic heavy metals, and restores original biological vigor."
          />

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {TREATMENTS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                  activeTab === t.id
                    ? "bg-accent text-primary border border-accent"
                    : "bg-primary/20 hover:bg-primary/40 text-cream/80 border border-accent/15"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active Tab Showcase Area */}
          {TREATMENTS.map((t) => {
            if (t.id !== activeTab) return null;
            return (
              <div key={t.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-primary/20 rounded-2xl p-6 md:p-12 border border-accent/15 shadow-2xl animate-fade-in-up">
                
                {/* Therapy Image */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-xl overflow-hidden border border-accent/20 relative aspect-4/3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#071F16]/95 backdrop-blur-sm border border-accent/30 py-1.5 px-3.5 rounded text-[10px] uppercase tracking-wider text-accent font-bold">
                      {t.sanskrit}
                    </div>
                  </div>
                </div>

                {/* Therapy Meta & Benefits */}
                <div className="lg:col-span-7 flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                    Active Clinical Protocol
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl text-cream mb-4 font-light">{t.tagline}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-cream/65 mb-6 border-y border-accent/10 py-3.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent" /> {t.duration}
                    </span>
                    <span className="w-[1px] bg-accent/25" />
                    <span className="flex items-center gap-1 font-semibold text-accent">
                      Value: {t.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-cream/70 leading-relaxed mb-6 font-light">
                    {t.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-3">Key Benefits</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {t.benefits.map((b, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-xs text-cream/80">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <LuxuryButton href={`/treatments/${t.id}`} variant="accent" className="w-full sm:w-auto">
                      View Ritual Details
                    </LuxuryButton>
                    <LuxuryButton href="/book" variant="outline" className="w-full sm:w-auto">
                      Inquire About This Therapy
                    </LuxuryButton>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </section>


      {/* SECTION 5: HEALTH CONDITIONS GRID */}
      <section className="py-24 bg-[#071F16] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="Clinical Efficacy"
            title="Sovereign Relief for Chronic Imbalances"
            description="We resolve deeply entrenched pathologies from the root by addressing systemic toxicity (Ama) and neurological exhaustion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONDITIONS.map((c) => (
              <GlassCard key={c.id} className="flex flex-col h-full bg-[#0D3B2A]/30">
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 border border-accent/15">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent" />
                </div>

                <h3 className="font-serif text-xl text-cream font-medium mb-2 group-hover:text-accent transition-colors">
                  {c.name}
                </h3>
                <p className="text-[11px] text-accent/80 italic tracking-wider uppercase mb-3">{c.tagline}</p>
                
                <p className="text-xs text-cream/70 leading-relaxed mb-6 font-light line-clamp-3">
                  {c.description}
                </p>

                <div className="mt-auto pt-4 border-t border-accent/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase text-cream/50 tracking-wider">
                    {c.recommendedTherapies.length} Therapies Advised
                  </span>
                  <Link href={`/conditions/${c.id}`} className="text-xs font-semibold text-accent group-hover:underline flex items-center gap-1">
                    Read Approach <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <LuxuryButton href="/conditions" variant="outline">
              Browse All Conditions Treated
            </LuxuryButton>
          </div>

        </div>
      </section>


      {/* SECTION 6: THE TREATMENT JOURNEY (Sacred Timeline) */}
      <section className="py-24 bg-[#051811] relative border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="The Path to Restoration"
            title="The Metaphysical Purification Journey"
            description="True Panchakarma is an organized pharmaceutical dance that progresses through three distinct, highly monitored physiological phases."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Horizontal timeline track for large viewports */}
            <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] bg-accent/20 z-0" />

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-lg mb-6 border border-accent/30 shadow-xl">
                1
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-2">Phase One</span>
              <h3 className="font-serif text-xl text-cream font-medium mb-3">Purvakarma (Deep Softening)</h3>
              <p className="text-xs text-cream/60 leading-relaxed max-w-xs font-light">
                We saturate your cells internally with medicated herbal lipophiles (Snehapana) and loose tissues with steam (Swedana) to melt stubborn fat-soluble toxins.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary text-accent flex items-center justify-center font-bold text-lg mb-6 border border-accent/50 shadow-xl">
                2
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-2">Phase Two</span>
              <h3 className="font-serif text-xl text-cream font-medium mb-3">Pradhanakarma (Expulsion)</h3>
              <p className="text-xs text-cream/60 leading-relaxed max-w-xs font-light">
                Once toxins are centralized, we execute the precision-timed evacuation rituals (Vamana, Virechana, or Basti) based strictly on your energetic stability.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#0D3B2A] text-cream border border-accent/30 flex items-center justify-center font-bold text-lg mb-6 shadow-xl">
                3
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-2">Phase Three</span>
              <h3 className="font-serif text-xl text-cream font-medium mb-3">Paschatkarma (Rebuilding)</h3>
              <p className="text-xs text-cream/60 leading-relaxed max-w-xs font-light">
                We gently restoke your renewed digestive fire (Agni) through specialized diet ladders and prescribe custom adaptogens for deep cellular anti-aging (Rasayana).
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 7: LUXURY RETREAT PACKAGES */}
      <section id="packages-section" className="py-24 bg-[#071F16] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="Inclusive Immersions"
            title="Handcrafted Sanctuary Packages"
            description="Our clinical immersions are fully comprehensive, covering premium accommodation, personalized physician consultation, bespoke cuisine, and all therapies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                id={pkg.id}
                className="bg-primary/20 border border-accent/15 rounded-2xl p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-2xl transition-all duration-300 relative group"
              >
                {/* Decorative border highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold">
                      {pkg.duration} Stay
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.1em] text-cream/40 font-semibold">
                      Luxury All-Inclusive
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-cream font-light mb-2">{pkg.name}</h3>
                  <p className="text-[11px] text-cream/60 leading-relaxed mb-6 font-light">{pkg.tagline}</p>
                  
                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-accent/10">
                    <span className="text-xs text-accent uppercase font-bold">Rate</span>
                    <div className="font-serif text-2xl text-cream mt-0.5">{pkg.price}</div>
                  </div>

                  {/* Highlights list */}
                  <ul className="flex flex-col gap-3 text-[11px] text-cream/80 mb-8 font-light">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span><strong>Lodging:</strong> {pkg.stay}</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span><strong>Dining:</strong> {pkg.meals}</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span><strong>Doctor:</strong> {pkg.consultation}</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span><strong>Treatments:</strong> {pkg.treatments}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <LuxuryButton href={`/book?package=${pkg.id}`} variant="accent" className="w-full">
                    Book Immersion
                  </LuxuryButton>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 8: DOCTOR PROFILE BANNER */}
      <section className="py-24 bg-[#09251C] border-y border-accent/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="The Custodians"
            title="Pristine Clinical Leadership"
            description="Our Senior Physicians hold standard university BAMS, MD degrees and combine ancestral lineage with deep modern functional research."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTORS.map((doc) => (
              <GlassCard key={doc.id} className="flex flex-col bg-[#071F16]/50">
                <div className="relative aspect-4/5 rounded-xl overflow-hidden mb-6 border border-accent/15">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top filter saturate-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F16] via-transparent to-transparent opacity-80" />
                </div>

                <h3 className="font-serif text-2xl text-cream font-medium">{doc.name}</h3>
                <p className="text-[11px] text-accent tracking-[0.2em] uppercase mt-1 font-semibold">{doc.title}</p>
                <p className="text-xs text-cream/40 italic mt-0.5">{doc.experience}</p>
                
                <p className="text-xs text-cream/70 leading-relaxed font-light my-5">
                  {doc.bio}
                </p>

                {/* Awards */}
                <div className="mt-auto pt-4 border-t border-accent/10">
                  <span className="text-[10px] uppercase tracking-wider text-accent font-semibold block mb-2">Decorations</span>
                  <ul className="flex flex-col gap-1.5 text-[10px] text-cream/60">
                    {doc.awards.map((aw, idx) => (
                      <li key={idx} className="flex gap-1.5 items-start">
                        <Award className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                        <span>{aw}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <LuxuryButton href={`/book?doctor=${doc.id}`} variant="outline" className="w-full">
                    Book Consultation
                  </LuxuryButton>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 9: PINTEREST GALLERY MASONRY */}
      <section className="py-24 bg-[#071F16] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="The Sanctum"
            title="A Visual Invitation to Quietude"
            description="Browse real images of our luxury suites, brass therapies, open-air therapy chambers, and lush forest architecture."
          />

          {/* Handcrafted responsive masonry columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="break-inside-avoid relative rounded-xl overflow-hidden border border-accent/15 group">
              <img
                src="https://images.pexels.com/photos/36774486/pexels-photo-36774486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400"
                alt="Luxury Mountain Retreat Exterior"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-serif text-cream text-sm italic">Sunset over the Himalayan Infinity Pool</p>
              </div>
            </div>

            <div className="break-inside-avoid relative rounded-xl overflow-hidden border border-accent/15 group">
              <img
                src="https://images.pexels.com/photos/6187852/pexels-photo-6187852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
                alt="Ayurvedic oil pouring bowl"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-serif text-cream text-sm italic">The Ancient Shirodhara Copper Vessel</p>
              </div>
            </div>

            <div className="break-inside-avoid relative rounded-xl overflow-hidden border border-accent/15 group">
              <img
                src="https://images.pexels.com/photos/6629614/pexels-photo-6629614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=400"
                alt="Massage Oil Pouring Therapy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-serif text-cream text-sm italic">Pouring medicated, slow-cooked herbal lipids</p>
              </div>
            </div>

            <div className="break-inside-avoid relative rounded-xl overflow-hidden border border-accent/15 group">
              <img
                src="https://images.pexels.com/photos/6629613/pexels-photo-6629613.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=450&w=400"
                alt="Lush forest resort balcony"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-serif text-cream text-sm italic">Forest View Suite Private Balcony</p>
              </div>
            </div>

            <div className="break-inside-avoid relative rounded-xl overflow-hidden border border-accent/15 group">
              <img
                src="https://images.pexels.com/photos/6187653/pexels-photo-6187653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=550&w=400"
                alt="Massage treatment room"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-serif text-cream text-sm italic">Therapeutic four-hand synchronized strokes</p>
              </div>
            </div>

            <div className="break-inside-avoid relative rounded-xl overflow-hidden border border-accent/15 group">
              <img
                src="https://images.pexels.com/photos/36676879/pexels-photo-36676879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
                alt="Sunset view over valley"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-serif text-cream text-sm italic">Meditation Sanctuary at Twilight</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <LuxuryButton href="/gallery" variant="outline">
              Open Full Media Gallery
            </LuxuryButton>
          </div>

        </div>
      </section>


      {/* SECTION 10: TESTIMONIALS & REVIEWS SLIDER / REAL-TIME SUBMISSION */}
      <section className="py-24 bg-[#09251C] border-y border-accent/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="Verified Guest Chronicles"
            title="Stories of Transformed Radiance"
            description="Read verified experiences from leaders, creators, and guests who underwent cellular realignment at our sanctuary."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Reviews display list */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.slice(0, 4).map((rev, index) => (
                  <GlassCard key={rev.id || index} className="bg-primary/20 flex flex-col justify-between h-full">
                    <div>
                      {/* Gold Stars */}
                      <div className="flex gap-1 mb-4 text-accent">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>

                      <p className="text-xs sm:text-sm text-cream/80 italic leading-relaxed mb-6 font-light">
                        “{rev.text}”
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-accent/10 mt-auto">
                      <div>
                        <h4 className="text-xs text-cream font-semibold">{rev.name}</h4>
                        <p className="text-[10px] text-cream/40">{rev.location}</p>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-accent font-bold px-2 py-0.5 rounded border border-accent/20 bg-primary/20">
                        {rev.treatment}
                      </span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Testimonial Submission Form */}
            <div className="lg:col-span-4 bg-primary/30 rounded-2xl p-6 border border-accent/20">
              <h3 className="font-serif text-lg text-cream mb-2 font-medium">Record Your Experience</h3>
              <p className="text-[11px] text-cream/60 mb-5 leading-relaxed">
                If you are a returned guest, add your clinical feedback to our community journal register.
              </p>

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full bg-[#071F16]/50 border border-accent/20 rounded-lg p-2 text-xs text-cream placeholder-cream/35 focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1">Location</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Paris, France"
                      value={reviewForm.location}
                      onChange={(e) => setReviewForm({ ...reviewForm, location: e.target.value })}
                      className="w-full bg-[#071F16]/50 border border-accent/20 rounded-lg p-2 text-xs text-cream placeholder-cream/35 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1">Rating</label>
                    <select
                      value={reviewForm.rating}
                      onChange={(e) => setReviewForm({ ...reviewForm, rating: Number(e.target.value) })}
                      className="w-full bg-[#071F16]/50 border border-accent/20 rounded-lg p-2 text-xs text-accent focus:outline-none focus:border-accent"
                    >
                      <option value={5}>5 Stars (Elite)</option>
                      <option value={4}>4 Stars (Very Good)</option>
                      <option value={3}>3 Stars (Good)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1">Therapy Undertaken</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 14-Day Kayakalpa"
                    value={reviewForm.treatment}
                    onChange={(e) => setReviewForm({ ...reviewForm, treatment: e.target.value })}
                    className="w-full bg-[#071F16]/50 border border-accent/20 rounded-lg p-2 text-xs text-cream placeholder-cream/35 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1">Your Narrative</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe the hospitality, physicians, treatments, and physical results."
                    value={reviewForm.text}
                    onChange={(e) => setReviewForm({ ...reviewForm, text: e.target.value })}
                    className="w-full bg-[#071F16]/50 border border-accent/20 rounded-lg p-2 text-xs text-cream placeholder-cream/35 focus:outline-none focus:border-accent"
                  />
                </div>

                <LuxuryButton
                  type="submit"
                  disabled={submittingReview}
                  variant="accent"
                  className="w-full !py-2.5"
                  showIcon={false}
                >
                  {submittingReview ? "Archiving..." : "Register Testimonial"}
                </LuxuryButton>

                {reviewStatus && (
                  <p className="text-[11px] text-center text-accent bg-primary/20 p-2 rounded border border-accent/10 mt-3">
                    {reviewStatus}
                  </p>
                )}
              </form>
            </div>

          </div>

          <div className="text-center">
            <LuxuryButton href="/testimonials" variant="outline">
              Read All Verified Testimonials
            </LuxuryButton>
          </div>

        </div>
      </section>


      {/* SECTION 11: FAQs (REAL TIME SEARCH AND CATS) */}
      <section className="py-24 bg-[#071F16] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="Answers from our Vaidyas"
            title="Deconstruct the Cleansing Process"
            description="Explore common questions on preparation, diet constraints, accommodation, cost, and medical safety."
          />

          {/* Interactive Search & Category Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
              <input
                type="text"
                placeholder="Search specific questions or keywords..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full bg-[#0D3B2A]/30 border border-accent/20 focus:border-accent rounded-xl pl-10 pr-4 py-3 text-xs text-cream placeholder-cream/40 focus:outline-none transition-all"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {["All", "General", "Treatments", "Duration", "Cost"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFaqCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all ${
                    selectedFaqCategory === cat
                      ? "bg-accent text-primary"
                      : "bg-[#0D3B2A]/20 hover:bg-primary/40 text-cream/70 border border-accent/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="bg-primary/20 border border-accent/15 rounded-xl p-5 md:p-6">
                  <div className="flex gap-3 justify-between items-start">
                    <span className="text-[9px] uppercase tracking-widest text-accent font-bold bg-[#071F16] px-2 py-0.5 rounded border border-accent/10">
                      {faq.category}
                    </span>
                    <span className="text-[11px] text-cream/40 font-light">Verified Answer</span>
                  </div>
                  <h4 className="font-serif text-lg text-cream mt-3 mb-2 font-medium">
                    {faq.question}
                  </h4>
                  <p className="text-xs text-cream/70 leading-relaxed font-light mt-1">
                    {faq.answer}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-12 glass-card rounded-xl">
                <HelpCircle className="w-8 h-8 text-accent/50 mx-auto mb-3" />
                <p className="text-xs text-cream/50">No answers match your specific criteria. Try typing 'Basti', 'ghee', or 'stay'.</p>
              </div>
            )}
          </div>

          <div className="text-center mt-10">
            <LuxuryButton href="/faq" variant="outline">
              Open Full FAQ Center
            </LuxuryButton>
          </div>

        </div>
      </section>


      {/* SECTION 12: LUXURY JOURNAL & BLOG BRAGS */}
      <section className="py-24 bg-[#051811] relative border-t border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            subtitle="The Soma Journal"
            title="Scholarly Insights on Longevity & Agni"
            description="We author serious medical-philosophical journals on cellular reverse-aging, gut microbiology, and Vedic astrology rhythms."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((blog) => (
              <GlassCard key={blog.slug} className="bg-primary/20 flex flex-col justify-between h-full group">
                <div>
                  <div className="relative h-56 rounded-xl overflow-hidden mb-6 border border-accent/15">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#071F16]/95 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] uppercase tracking-wider text-accent font-bold border border-accent/25">
                      {blog.category}
                    </div>
                  </div>

                  <span className="text-[10px] text-cream/40 block mb-2">{blog.date} • {blog.readTime}</span>
                  <h3 className="font-serif text-xl text-cream font-medium leading-snug mb-3 group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-cream/65 leading-relaxed font-light mb-6">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-accent/10 flex items-center justify-between mt-auto">
                  <span className="text-[10px] text-accent font-light">By {blog.author}</span>
                  <Link href={`/blog/${blog.slug}`} className="text-xs font-semibold text-accent hover:underline flex items-center gap-0.5">
                    Read Essay &rarr;
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <LuxuryButton href="/blog" variant="outline">
              Open Curated Journals
            </LuxuryButton>
          </div>

        </div>
      </section>


      {/* SECTION 13: INSTAGRAM LIFE & AMBIENCE (AWWW-STYLISH CARDS) */}
      <section className="py-24 bg-[#071F16] relative border-t border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">Live Atmosphere</span>
              <h2 className="font-serif text-3xl md:text-5xl text-cream font-light tracking-wide">
                Sanctuary Moments @SomaAnanda
              </h2>
            </div>
            <LuxuryButton href="https://instagram.com" variant="outline" showIcon={false} className="!py-2.5">
              <Camera className="w-4 h-4 text-accent mr-1.5" /> Follow Our Rhythm
            </LuxuryButton>
          </div>

          {/* IG Layout Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="relative group rounded-xl overflow-hidden border border-accent/15 aspect-square">
              <img
                src="https://images.pexels.com/photos/6629614/pexels-photo-6629614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
                alt="Instagram herbal boiling pot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-50"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-3">
                <Camera className="w-5 h-5 text-accent mb-2" />
                <p className="text-[10px] uppercase text-cream tracking-wider font-light leading-snug">Boiling Medicated Lipophiles with 14 Himalayan Roots</p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden border border-accent/15 aspect-square">
              <img
                src="https://images.pexels.com/photos/6187852/pexels-photo-6187852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
                alt="Instagram bronze bowl massage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-50"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-3">
                <Camera className="w-5 h-5 text-accent mb-2" />
                <p className="text-[10px] uppercase text-cream tracking-wider font-light leading-snug">The steady warmth of Shirodhara drapes the pre-frontal lobe</p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden border border-accent/15 aspect-square">
              <img
                src="https://images.pexels.com/photos/36774486/pexels-photo-36774486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
                alt="Instagram infinity pool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-50"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-3">
                <Camera className="w-5 h-5 text-accent mb-2" />
                <p className="text-[10px] uppercase text-cream tracking-wider font-light leading-snug">Prana sunrise breathing at our Himalayan high overlook</p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden border border-accent/15 aspect-square">
              <img
                src="https://images.pexels.com/photos/6187423/pexels-photo-6187423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
                alt="Instagram herbal oils"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-50"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-3">
                <Camera className="w-5 h-5 text-accent mb-2" />
                <p className="text-[10px] uppercase text-cream tracking-wider font-light leading-snug">Authentic Marma stimulation releases heavy emotional armor</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 14: INTERACTIVE CONTACT & MAP SECTION */}
      <section className="py-24 bg-[#051811] relative border-t border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Details & Times Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3 block">
                Direct Channels
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-cream font-light leading-snug mb-6">
                Connect with the Sanctuary Concierge
              </h2>
              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light mb-8">
                Whether you seek answers regarding a severe autoimmune disorder, custom flight transfers, or dietary constraints, our elite wellness desks are ready.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="p-3.5 bg-primary/40 rounded-xl border border-accent/20 text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-accent tracking-widest font-semibold">Immediate Assistance</h4>
                    <p className="text-sm text-cream font-medium mt-1">+91 9999 999 999</p>
                    <p className="text-[10px] text-cream/40">Open 24/7 for luxury booking queries</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3.5 bg-primary/40 rounded-xl border border-accent/20 text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-accent tracking-widest font-semibold">Clinical Registrations</h4>
                    <p className="text-sm text-cream font-medium mt-1">concierge@soma-ananda.com</p>
                    <p className="text-[10px] text-cream/40">Confidential medical dossiers are handled here</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3.5 bg-primary/40 rounded-xl border border-accent/20 text-accent">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-accent tracking-widest font-semibold">Sanctuary Hours</h4>
                    <p className="text-xs text-cream font-medium mt-1">Admissions Daily: 06:00 AM – 22:00 PM</p>
                    <p className="text-xs text-cream/60">Therapy Wings: 07:00 AM – 19:30 PM IST</p>
                  </div>
                </div>
              </div>

              {/* simulated Google Maps Frame */}
              <div className="mt-8 rounded-xl overflow-hidden border border-accent/20 relative aspect-video bg-[#071F16]">
                <div className="absolute inset-0 bg-[#09251C]/45 flex flex-col items-center justify-center p-4 text-center">
                  <MapPin className="w-8 h-8 text-accent animate-bounce mb-2" />
                  <p className="font-serif text-sm text-cream font-medium">Byarghat Sanctuary, Rishikesh</p>
                  <p className="text-[10px] text-cream/50 max-w-xs mt-1">High above the sacred Ganges River, nestled in natural teakwood reserve forests</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-accent underline mt-3 font-semibold hover:text-amber-500"
                  >
                    Get Helicopter Landing Coordinates
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-6 md:p-10 border border-accent/20 bg-primary/20">
                <h3 className="font-serif text-2xl text-cream font-light mb-2">Request Physician Callback</h3>
                <p className="text-xs text-cream/60 mb-8 leading-relaxed font-light">
                  Submit this preliminary form. A senior medical registrar will review your details and phone you to arrange your pulse profile analysis.
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1.5">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sterling H. Dupont"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-[#071F16]/75 border border-accent/25 rounded-lg p-3 text-xs text-cream placeholder-cream/30 focus:outline-none focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1.5">Private Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. dupont@private.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-[#071F16]/75 border border-accent/25 rounded-lg p-3 text-xs text-cream placeholder-cream/30 focus:outline-none focus:border-accent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1.5">Contact Number (with Country Code)</label>
                      <input
                        type="tel"
                        placeholder="e.g. +41 22 730 0111"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-[#071F16]/75 border border-accent/25 rounded-lg p-3 text-xs text-cream placeholder-cream/30 focus:outline-none focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1.5">Primary Health Focus</label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full bg-[#071F16]/75 border border-accent/25 rounded-lg p-3 text-xs text-accent focus:outline-none focus:border-accent transition-all"
                      >
                        <option value="Severe Joint Pain / Arthritis">Severe Joint Pain & Arthritis</option>
                        <option value="Chronic Stress / Insomnia">Chronic Stress & Sleep Deprivation</option>
                        <option value="Endocrine / PCOS Recovery">Endocrine & Hormonal PCOS</option>
                        <option value="Metabolic Reset / Diabetes">Metabolic Diabetes Recovery</option>
                        <option value="General Cellular Detoxification">General Panchakarma Cellular Detox</option>
                        <option value="Custom Luxury Corporate Immersion">Custom Corporate Healing Immersions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-accent tracking-widest font-semibold block mb-1.5">Medical History Summary or Specific Questions</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline any pre-existing health conditions, previous hospitalizations, and treatment objectives."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-[#071F16]/75 border border-accent/25 rounded-lg p-3 text-xs text-cream placeholder-cream/30 focus:outline-none focus:border-accent transition-all"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-cream/40 leading-snug">
                    <UserCheck className="w-4 h-4 text-accent shrink-0" />
                    <span>Your medical history is fully encrypted and stored locally. We strictly adhere to HIPAA and Ayush standards of absolute client confidentiality.</span>
                  </div>

                  <LuxuryButton
                    type="submit"
                    disabled={sendingInquiry}
                    variant="accent"
                    className="w-full"
                    showIcon={false}
                  >
                    {sendingInquiry ? "Cataloging Dossier..." : "Transmit Private Dossier"}
                  </LuxuryButton>

                  {contactStatus && (
                    <div className={`p-4 rounded-lg border text-xs text-center font-medium mt-4 ${
                      contactStatus.success
                        ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/20"
                        : "bg-rose-950/40 text-rose-400 border-rose-500/20"
                    }`}>
                      {contactStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
