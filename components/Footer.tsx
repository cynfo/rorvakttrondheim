import { Phone, Mail, MapPin, Droplet } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-gray-400 py-12 sm:py-20 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-12 sm:mb-16 text-center md:text-left">
          
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-white mb-4 sm:mb-6">
              <div className="bg-brand-600 text-white p-2 rounded-xl">
                <Droplet className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                Rørvakt<span className="text-brand-500">Trondheim</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-light text-brand-200">
              Din lokale, pålitelige rørleggervakt i Trondheim. Vi rykker ut for akutte vannlekkasjer, frostspreng og tette rør døgnet rundt, alle dager i året.
            </p>
          </div>
          
          <nav aria-label="Kontaktinformasjon" className="md:col-span-4">
            <h3 className="text-white font-display font-bold mb-4 sm:mb-6 uppercase tracking-wider text-sm">Kontakt Oss</h3>
            <ul className="space-y-4 text-sm font-light text-brand-200">
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-brand-600 transition-colors">
                  <Phone className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors" />
                </div>
                <a href="tel:+4792828262" className="hover:text-white transition-colors text-lg font-medium">92 82 82 62</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-brand-600 transition-colors">
                  <Mail className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:chris@247rv.no" className="hover:text-white transition-colors">chris@247rv.no</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <div className="bg-white/5 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-brand-400" />
                </div>
                <span>Trondheim & Omegn</span>
              </li>
            </ul>
          </nav>
          
          <nav aria-label="Tjenester meny" className="md:col-span-3">
            <h3 className="text-white font-display font-bold mb-4 sm:mb-6 uppercase tracking-wider text-sm">Akutte Tjenester</h3>
            <ul className="space-y-3 text-sm font-light text-brand-200">
              <li>
                <Link href="/tjenester/vannlekkasje-trondheim" className="hover:text-brand-400 hover:pl-2 transition-all flex items-center justify-center md:justify-start gap-2">
                  <div className="w-1 h-1 bg-brand-600 rounded-full"></div> Vannlekkasje
                </Link>
              </li>
              <li>
                <Link href="/tjenester/tett-avlop-trondheim" className="hover:text-brand-400 hover:pl-2 transition-all flex items-center justify-center md:justify-start gap-2">
                  <div className="w-1 h-1 bg-brand-600 rounded-full"></div> Tett avløp & toalett
                </Link>
              </li>
              <li>
                <Link href="/tjenester/akutt-rorlegger-trondheim" className="hover:text-brand-400 hover:pl-2 transition-all flex items-center justify-center md:justify-start gap-2">
                  <div className="w-1 h-1 bg-brand-600 rounded-full"></div> Sprukne rør (Frost)
                </Link>
              </li>
              <li>
                <Link href="/tjenester/dognvakt-rorlegger-trondheim" className="hover:text-brand-400 hover:pl-2 transition-all flex items-center justify-center md:justify-start gap-2">
                  <div className="w-1 h-1 bg-brand-600 rounded-full"></div> Døgnvakt Rørlegger
                </Link>
              </li>
            </ul>
          </nav>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm text-center flex flex-col items-center justify-center gap-2 sm:gap-4 font-light text-brand-400">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>&copy; {new Date().getFullYear()} CH Rørleggervakten Trondheim AS · Org.nr. 937 305 451</p>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-brand-700"></div>
            <div className="flex gap-4">
              <Link href="/om-oss" className="hover:text-white transition-colors">Om oss</Link>
              <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
            </div>
          </div>
          <p className="mt-2 sm:mt-0 text-brand-300">
            Laget av <a href="https://scalemedia.no" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-brand-400 transition-colors">Scale Media AS</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
