"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  HeartPulse,
  Award
} from "lucide-react";
import { TREATMENTS, CONDITIONS, PACKAGES } from "@/data/ayurvedaData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<"treatments" | "conditions" | "packages" | null>(null);
  const pathname = usePathname();

  // Coordinates for the magnetic button effect
  const [btnCoords, setBtnCoords] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(null);
  }, [pathname]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setBtnCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setBtnCoords({ x: 0, y: 0 });
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Doctors", href: "/doctors" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 max-w-[1440px] mx-auto px-4 mt-4 w-full pointer-events-none">
        <div className="bg-white/70 backdrop-blur-[20px] border border-[#E5DFD4] rounded-full shadow-[0_20px_50px_rgba(36,51,43,0.04)] px-8 py-3 w-full pointer-events-auto">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 xl:gap-8">
            
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center select-none group shrink-0">
              <span className="font-serif text-2xl md:text-3xl tracking-wide text-[#24332B] transition-colors duration-300 font-medium">
                Pancha<span className="text-[#C8A96A] italic font-light">Karma</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center justify-center gap-x-6 xl:gap-x-8">
              
              {/* Treatments Mega Menu Link */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen("treatments")}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <button className="relative group flex items-center gap-1 font-sans text-[12px] font-medium tracking-[0.16em] uppercase text-[#24332B] hover:text-[#C8A96A] transition-colors py-2 cursor-pointer">
                  Therapies <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C8A96A] transition-all duration-300 group-hover:w-full" />
                </button>

                {megaMenuOpen === "treatments" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white border border-[#E5DFD4] rounded-2xl p-5 shadow-2xl backdrop-blur-xl animate-fade-in-up mt-2 grid grid-cols-2 gap-4">
                    <div className="col-span-2 border-b border-[#E5DFD4] pb-2 mb-1 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Core Panchakarma Cleanses
                      </span>
                      <Link href="/treatments" className="text-[10px] uppercase text-[#5F6E64] hover:text-[#C8A96A] underline font-medium">
                        View All
                      </Link>
                    </div>
                    {TREATMENTS.map((t) => (
                      <Link
                        key={t.id}
                        href={`/treatments/${t.id}`}
                        className="p-2.5 rounded-xl hover:bg-[#F8F6F1] transition-colors flex flex-col gap-0.5 border border-transparent hover:border-[#E5DFD4]"
                      >
                        <span className="text-xs font-serif text-[#24332B] font-semibold">{t.name}</span>
                        <span className="text-[10px] text-[#C8A96A] italic">{t.sanskrit}</span>
                        <span className="text-[10px] text-[#5F6E64] line-clamp-1">{t.tagline}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Conditions Mega Menu Link */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen("conditions")}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <button className="relative group flex items-center gap-1 font-sans text-[12px] font-medium tracking-[0.16em] uppercase text-[#24332B] hover:text-[#C8A96A] transition-colors py-2 cursor-pointer">
                  Conditions <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C8A96A] transition-all duration-300 group-hover:w-full" />
                </button>

                {megaMenuOpen === "conditions" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white border border-[#E5DFD4] rounded-2xl p-5 shadow-2xl backdrop-blur-xl animate-fade-in-up mt-2 grid grid-cols-2 gap-3">
                    <div className="col-span-2 border-b border-[#E5DFD4] pb-2 mb-1 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] font-semibold flex items-center gap-1.5">
                        <HeartPulse className="w-3.5 h-3.5" /> Chronic Recovery Programs
                      </span>
                      <Link href="/conditions" className="text-[10px] uppercase text-[#5F6E64] hover:text-[#C8A96A] underline font-medium">
                        View All
                      </Link>
                    </div>
                    {CONDITIONS.map((c) => (
                      <Link
                        key={c.id}
                        href={`/conditions/${c.id}`}
                        className="p-2.5 rounded-xl hover:bg-[#F8F6F1] transition-colors flex flex-col gap-0.5 border border-transparent hover:border-[#E5DFD4]"
                      >
                        <span className="text-xs text-[#24332B] font-medium">{c.name}</span>
                        <span className="text-[10px] text-[#5F6E64] line-clamp-1 leading-snug">{c.tagline}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Packages Menu Link */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen("packages")}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <button className="relative group flex items-center gap-1 font-sans text-[12px] font-medium tracking-[0.16em] uppercase text-[#24332B] hover:text-[#C8A96A] transition-colors py-2 cursor-pointer">
                  Packages <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C8A96A] transition-all duration-300 group-hover:w-full" />
                </button>

                {megaMenuOpen === "packages" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] bg-white border border-[#E5DFD4] rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-fade-in-up mt-2 flex flex-col gap-2">
                    <div className="border-b border-[#E5DFD4] pb-2 mb-1 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] font-semibold flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" /> Luxury Packages
                      </span>
                      <Link href="/packages" className="text-[10px] uppercase text-[#5F6E64] hover:text-[#C8A96A] underline font-medium">
                        All Pricing
                      </Link>
                    </div>
                    {PACKAGES.map((p) => (
                      <Link
                        key={p.id}
                        href={`/packages#${p.id}`}
                        className="p-2 rounded-xl hover:bg-[#F8F6F1] transition-colors flex items-center justify-between border border-transparent hover:border-[#E5DFD4]"
                      >
                        <div className="flex flex-col">
                          <span className="text-xs text-[#24332B] font-semibold">{p.name} ({p.duration})</span>
                          <span className="text-[9px] text-[#5F6E64]">{p.tagline}</span>
                        </div>
                        <span className="text-[10px] font-sans font-bold text-[#C8A96A]">{p.price.split(" ")[0]}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Simple Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group font-sans text-[12px] font-medium tracking-[0.16em] uppercase transition-colors py-2 ${
                    pathname === link.href ? "text-[#C8A96A]" : "text-[#24332B] hover:text-[#C8A96A]"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C8A96A] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Exclusive "BOOK RITUAL" CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                ref={btnRef}
                href="/book"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `translate(${btnCoords.x}px, ${btnCoords.y}px)`,
                  transition: btnCoords.x === 0 ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "transform 0.1s ease-out"
                }}
                className="bg-[#2E5E4E] hover:bg-[#24332B] text-white px-6 py-3 rounded-full text-[11px] font-semibold tracking-widest font-sans uppercase transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                Book Ritual
              </Link>
            </div>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#24332B] hover:text-[#C8A96A] focus:outline-none ml-auto"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden flex flex-col pt-28 px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-6 text-center max-w-md mx-auto w-full">
            
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl text-[#24332B]"
            >
              Pancha<span className="text-[#C8A96A] italic font-light">Karma</span>
            </Link>

            <hr className="border-[#E5DFD4] w-24 mx-auto" />

            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase text-[#C8A96A] tracking-[0.2em] font-semibold">Classical Therapies</span>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {TREATMENTS.map((t) => (
                  <Link
                    key={t.id}
                    href={`/treatments/${t.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-[#F8F6F1] border border-[#E5DFD4] text-xs text-[#24332B] font-medium"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase text-[#C8A96A] tracking-[0.2em] font-semibold">Conditions Treated</span>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {CONDITIONS.slice(0, 6).map((c) => (
                  <Link
                    key={c.id}
                    href={`/conditions/${c.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-[#F8F6F1] border border-[#E5DFD4] text-xs text-[#24332B] font-medium"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <hr className="border-[#E5DFD4] w-24 mx-auto" />

            {/* Flat Links */}
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest text-[#24332B] hover:text-[#C8A96A] font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/packages"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest text-[#24332B] hover:text-[#C8A96A] font-medium"
              >
                Packages
              </Link>
            </div>

            <hr className="border-[#E5DFD4] w-24 mx-auto" />

            {/* Action button inside mobile drawer */}
            <div className="flex flex-col gap-3 w-full mt-2">
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#2E5E4E] hover:bg-[#24332B] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-widest font-sans uppercase transition-all duration-300 text-center shadow-md"
              >
                Book Ritual
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
