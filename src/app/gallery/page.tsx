"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import LuxuryButton from "@/components/LuxuryButton";
import { Camera, ZoomIn, Eye, Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const items = [
    {
      category: "rooms",
      image: "https://images.pexels.com/photos/36774486/pexels-photo-36774486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
      caption: "Forest View Suite Private Balcony"
    },
    {
      category: "treatments",
      image: "https://images.pexels.com/photos/6187852/pexels-photo-6187852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
      caption: "Authentic Copper Shirodhara Stream"
    },
    {
      category: "clinic",
      image: "https://images.pexels.com/photos/6629614/pexels-photo-6629614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
      caption: "Boiling Herbal Oils in Copper Vessels"
    },
    {
      category: "rooms",
      image: "https://images.pexels.com/photos/36676879/pexels-photo-36676879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
      caption: "Mountain Sanctuary Suite Interior"
    },
    {
      category: "treatments",
      image: "https://images.pexels.com/photos/6187653/pexels-photo-6187653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
      caption: "Four-Hand Synchronous Abhyanga Strokes"
    },
    {
      category: "clinic",
      image: "https://images.pexels.com/photos/6187423/pexels-photo-6187423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
      caption: "The Botanical Pharmacy Preparation Center"
    }
  ];

  const filteredItems = activeFilter === "all" ? items : items.filter(it => it.category === activeFilter);

  return (
    <div className="bg-[#071F16] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <SectionTitle
          subtitle="Our Sanctuary Ambience"
          title="A Visual Invitation to Pristine Healing"
          description="A visual walk through our rooms, our original medical equipment, and the breathtaking scenery of our mountain resort. Rest assured, reality exceeds our digital photographs."
        />

        {/* Filter categories */}
        <div className="flex justify-center gap-3 mb-12">
          {["all", "rooms", "treatments", "clinic"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-accent text-primary"
                  : "bg-primary/20 hover:bg-primary/40 text-cream/70 border border-accent/15"
              }`}
            >
              {cat === "all" ? "Open Archives" : cat}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-accent/15 group shadow-xl bg-primary/20"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04130C]/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] text-accent uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1">
                  <ImageIcon className="w-3.5 h-3.5" /> Sanctuary {item.category}
                </span>
                <p className="font-serif text-lg text-cream italic leading-tight">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video preview section */}
        <div className="mt-24 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-accent/20 relative aspect-video bg-[#04130C]">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.pexels.com/photos/36774486/pexels-photo-36774486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1280"
            alt="Video Preview over Ganges"
            className="absolute inset-0 w-full h-full object-cover filter saturate-50 blur-[1px]"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-accent hover:bg-amber-500 text-primary flex items-center justify-center cursor-pointer shadow-2xl transition-all duration-300 transform hover:scale-110 mb-4 border border-accent/40">
              <Camera className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-cream font-light">Play ambient soundscape preview</h3>
            <p className="text-xs text-cream/60 max-w-xs mt-1">Hear the sounds of singing birds, river currents, and Sanskrit fire prayers.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
