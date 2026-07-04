import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Soma & Ananda | Luxury Panchakarma & Ayurveda Sanctuary",
  description: "Experience Aman-grade luxury clinical Panchakarma & Ayurveda. Rooted in the sacred valleys of Rishikesh and the ancient lineages of Kerala. Restore your body, mind, and soul.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-luxury-dark text-cream antialiased min-h-screen flex flex-col font-sans">
        <ScrollProgressBar />
        <Loader />
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-24">
          {children}
        </main>

        {/* WhatsApp & Call floats */}
        <WhatsAppFloating />

        {/* Luxury Footer */}
        <Footer />
      </body>
    </html>
  );
}
