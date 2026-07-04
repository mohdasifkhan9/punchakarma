"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import LuxuryButton from "@/components/LuxuryButton";
import { Phone, Mail, Clock, MapPin, ShieldAlert, Award, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Consultation Inquiry",
    message: ""
  });
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ success: false, message: "Please compile Name, Email, and message." });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ success: true, message: data.message });
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "General Consultation Inquiry",
          message: ""
        });
      } else {
        setStatus({ success: false, message: data.error || "An error occurred." });
      }
    } catch (err) {
      setStatus({ success: false, message: "Network connection failure. Please call us." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          subtitle="Sanctuary Correspondence"
          title="Direct Channels to Absolute Serenity"
          description="Whether you seek detailed flight logistics, private helicopter transfers, medical insurance documentation, or a customized clinical consultation, our registrars stand ready."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Details Left */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-bold block mb-3">Retreat Coordinates</span>
              <h3 className="font-serif text-3xl text-cream font-light mb-4">Soma & Ananda Sanctuary</h3>
              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light mb-6">
                Located high above the Ganges River basin within natural teakwood forests, our physical location was selected for its clean atmospheric ionization and low biological noise levels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-primary/20 border border-accent/10 p-5 rounded-xl">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-accent font-bold">Physical Sanctuary</h4>
                  <p className="text-xs text-cream/80 leading-relaxed mt-1">
                    The Himalayan Retreat, Byarghat, Rishikesh, Uttarakhand 249304, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-primary/20 border border-accent/10 p-5 rounded-xl">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-accent font-bold">Confidential Hotlines</h4>
                  <p className="text-xs text-cream/80 leading-relaxed mt-1 font-medium">
                    Private Registrar: +91 9999 999 999
                  </p>
                  <p className="text-[10px] text-cream/40 mt-0.5">Available for international booking queries 24/7</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-primary/20 border border-accent/10 p-5 rounded-xl">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-accent font-bold">Medical Logs Registrar</h4>
                  <p className="text-xs text-cream/80 mt-1">
                    concierge@soma-ananda.com
                  </p>
                  <p className="text-[10px] text-cream/40 mt-0.5">Please send encrypted pathology records directly here</p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#09251C] p-6 rounded-2xl border border-accent/15">
              <span className="text-[10px] uppercase text-accent tracking-widest font-bold block mb-3">Sanctuary Hours</span>
              <ul className="text-xs text-cream/70 space-y-2">
                <li className="flex justify-between">
                  <span>Guest Admissions:</span>
                  <span className="text-cream font-medium">Daily: 06:00 – 22:00 IST</span>
                </li>
                <li className="flex justify-between border-t border-accent/10 pt-2">
                  <span>Therapy Wings:</span>
                  <span className="text-cream font-medium">Daily: 07:00 – 19:30 IST</span>
                </li>
                <li className="flex justify-between border-t border-accent/10 pt-2">
                  <span>Vaidya Consultations:</span>
                  <span className="text-cream font-medium">Daily: 08:30 – 18:00 IST</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7 bg-primary/20 border border-accent/20 rounded-2xl p-6 md:p-10 shadow-xl">
            <h3 className="font-serif text-2xl text-cream font-light mb-2">Request Physician Callback</h3>
            <p className="text-xs text-cream/60 leading-relaxed mb-8 font-light">
              Submit this encrypted form. A medical registrar will log your details in our system and arrange a diagnostic call within 3 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase text-accent tracking-widest font-bold block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#071F16]/80 border border-accent/25 rounded-lg p-3 text-xs text-cream focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase text-accent tracking-widest font-bold block mb-1.5">Private Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@vance.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#071F16]/80 border border-accent/25 rounded-lg p-3 text-xs text-cream focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase text-accent tracking-widest font-bold block mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. +44 20 7946 0958"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#071F16]/80 border border-accent/25 rounded-lg p-3 text-xs text-cream focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase text-accent tracking-widest font-bold block mb-1.5">Subject Focus</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-[#071F16]/80 border border-accent/25 rounded-lg p-3 text-xs text-accent focus:outline-none focus:border-accent"
                  >
                    <option value="General Consultation Inquiry">General Consultation Inquiry</option>
                    <option value="Severe Joint Pain / Arthritis">Severe Joint Pain & Arthritis</option>
                    <option value="PCOS / Hormonal Balancing">PCOS & Hormonal Recovery</option>
                    <option value="Himalayan Suite Bookings">Himalayan Suite Bookings</option>
                    <option value="Press & Corporate Immersions">Press & Corporate Immersions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase text-accent tracking-widest font-bold block mb-1.5">Brief Medical Profile or Narrative</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Detail any primary complaints, chronic diagnoses, or previous therapies attempted. Your record is fully confidential."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#071F16]/80 border border-accent/25 rounded-lg p-3 text-xs text-cream focus:outline-none focus:border-accent"
                />
              </div>

              <div className="flex gap-2 items-center text-[10px] text-cream/40 leading-snug">
                <ShieldAlert className="w-4 h-4 text-accent shrink-0" />
                <span>Your private communication is encrypted. We adhere fully to HIPAA, NABH, and AYUSH hospital class standards of medical confidentiality.</span>
              </div>

              <LuxuryButton type="submit" disabled={loading} variant="accent" className="w-full">
                {loading ? "Cataloging Dossier..." : "Transmit Encrypted Inquiry"}
              </LuxuryButton>

              {status && (
                <div className={`p-4 rounded-lg border text-xs text-center font-medium ${
                  status.success
                    ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/20"
                    : "bg-rose-950/40 text-rose-400 border-rose-500/20"
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
