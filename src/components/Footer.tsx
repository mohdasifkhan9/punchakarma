"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, Shield } from "lucide-react";
import { TREATMENTS, CONDITIONS, PACKAGES } from "@/data/ayurvedaData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage("Thank you. Your email has been added to our private register.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Failed to register. Please check your network.");
    }
  };

  return (
    <footer className="bg-[#04130C] text-[#F8F5EF] border-t border-accent/15 pt-20 pb-8 relative overflow-hidden">
      {/* Editorial Watermark Background */}
      <div className="absolute bottom-0 right-0 translate-y-12 translate-x-12 font-serif text-[10vw] sm:text-[14vw] text-emerald-950/20 pointer-events-none select-none tracking-widest font-bold">
        AYUSH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-accent/10">
          
          {/* Brand Philosophy & Newsletter */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.2em] text-cream">SOMA & ANANDA</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent mt-1">
                Luxury Panchakarma Sanctuary
              </span>
            </div>

            <p className="text-xs text-cream/60 leading-relaxed font-light">
              Crafting premium Vedic health retreats with clinical precision. Inspired by the quiet splendor of the Himalayas and the ancient lineages of Kerala.
            </p>

            {/* Newsletter Register */}
            <div className="flex flex-col gap-3 mt-2">
              <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                Join the Private Register
              </span>
              <p className="text-[11px] text-cream/50">
                Receive curated journals on longevity, bio-individual nutrition, and retreat openings.
              </p>

              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary/20 border border-accent/25 focus:border-accent rounded-lg px-4 py-2.5 text-xs text-cream placeholder-cream/30 focus:outline-none w-full transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-accent hover:bg-amber-500 text-primary p-2.5 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {status === "success" && (
                <p className="text-xs text-emerald-400 font-medium">{message}</p>
              )}
              {status === "error" && (
                <p className="text-xs text-rose-400 font-medium">{message}</p>
              )}
            </div>
          </div>

          {/* Treatments Links */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
              Core Therapies
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-cream/70 font-light">
              {TREATMENTS.map((t) => (
                <li key={t.id}>
                  <Link href={`/treatments/${t.id}`} className="hover:text-accent transition-colors flex items-center gap-1">
                    {t.name} <span className="text-[9px] text-accent/50">({t.sanskrit.split(" ")[0]})</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/treatments" className="hover:text-accent transition-colors font-medium text-accent">
                  Explore All Therapies &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Conditions Links */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
              Conditions Addressed
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-cream/70 font-light">
              {CONDITIONS.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <Link href={`/conditions/${c.id}`} className="hover:text-accent transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/conditions" className="hover:text-accent transition-colors font-medium text-accent">
                  Browse All Conditions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
              Retreat Sanctuary
            </span>
            <ul className="flex flex-col gap-3.5 text-xs text-cream/70 font-light">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  The Himalayan Retreat, Byarghat, Rishikesh, Uttarakhand 249304, India
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 9999 999 999 / +91 135 244 0000</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>concierge@soma-ananda.com</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-accent">Vaidya Consultations</p>
                  <p>Daily: 07:00 AM – 19:00 PM IST</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Meta Section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-cream/40 font-light">
          <p>© {new Date().getFullYear()} Soma & Ananda Wellness Resort Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 items-center">
            <Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <span className="flex items-center gap-1 text-accent/60">
              <Shield className="w-3 h-3" /> AYUSH Certified Premium Hospital Class-A
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
