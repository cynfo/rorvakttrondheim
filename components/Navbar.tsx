"use client";

import { Phone, Droplet, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 text-white p-1.5 sm:p-2 rounded-xl shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
              <Droplet className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
            </div>
            <span className="text-xl sm:text-2xl font-display font-bold tracking-tight text-brand-950">
              Rørvakt<span className="text-brand-500">Trondheim</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav aria-label="Hovedmeny" className="hidden md:flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-6 mr-4 text-sm font-medium text-gray-600">
              <Link href="/tjenester" className="hover:text-brand-600 transition-colors">Tjenester</Link>
              <Link href="/om-oss" className="hover:text-brand-600 transition-colors">Om oss</Link>
              <Link href="/kontakt" className="hover:text-brand-600 transition-colors">Kontakt</Link>
            </div>
            <div className="text-right border-l pl-6 border-gray-200">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Døgnåpen vakttelefon</p>
              <a href="tel:+4792828262" aria-label="Ring vår rørleggervakt" className="text-2xl font-display font-extrabold text-brand-950 hover:text-accent-600 transition-colors">
                92 82 82 62
              </a>
            </div>
            <a href="tel:+4792828262" aria-label="Ring oss" className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-accent-600/30">
              <Phone className="w-5 h-5" />
              Ring Oss
            </a>
          </nav>
          
          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <a href="tel:+4792828262" aria-label="Ring oss akutt" className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-2 rounded-lg shadow-md shadow-accent-600/30 animate-pulse-ring">
              <Phone className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu"
              className="p-2 text-brand-950 bg-gray-50 rounded-lg border border-gray-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-40">
          <nav className="flex flex-col px-4 pt-2 pb-6 gap-4">
            <Link href="/tjenester" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-brand-950 py-3 border-b border-gray-50">Tjenester</Link>
            <Link href="/om-oss" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-brand-950 py-3 border-b border-gray-50">Om oss</Link>
            <Link href="/kontakt" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-brand-950 py-3 border-b border-gray-50">Kontakt</Link>
            
            <div className="mt-4 p-4 bg-brand-50 rounded-xl flex flex-col items-center text-center">
              <p className="text-xs text-brand-600 font-bold uppercase tracking-wider mb-2">Trenger du hjelp nå?</p>
              <a href="tel:+4792828262" className="text-2xl font-display font-extrabold text-brand-950 mb-3">
                92 82 82 62
              </a>
              <a href="tel:+4792828262" className="w-full bg-accent-600 text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2">
                <Phone className="w-5 h-5" />
                Ring Vakttelefon
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
