"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(true);

  // Optional: Hide CTA when scrolling near footer to prevent overlap, but for emergency plumbing, keeping it always visible is often better for CRO. We'll keep it always visible for now.

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-white/90 backdrop-blur-xl border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] z-[60] md:hidden flex justify-center pb-6 sm:pb-8 pt-3 sm:pt-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <a 
        href="tel:+4792828262" 
        aria-label="Ring vår rørleggervakt nå" 
        className="w-full max-w-sm bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-extrabold text-lg sm:text-xl flex items-center justify-center gap-2 shadow-xl shadow-accent-600/30 animate-pulse-ring active:scale-95 transition-transform border border-accent-400/30"
        onClick={() => {
          // Placeholder for click tracking
          // if (typeof window !== 'undefined' && window.gtag) {
          //   window.gtag('event', 'click_mobile_cta', { event_category: 'contact' });
          // }
        }}
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
        RING NÅ - 92 82 82 62
      </a>
    </div>
  );
}
