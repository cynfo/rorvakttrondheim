import { Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-brand-950 py-16 sm:py-32 text-center px-4 relative overflow-hidden border-t-4 border-brand-600">
      {/* Modern abstract background */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-600/20 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 bg-brand-900/50 sm:bg-white/5 backdrop-blur-xl border border-white/5 sm:border-white/10 p-6 sm:p-16 rounded-[2rem] sm:rounded-3xl shadow-none sm:shadow-2xl">
        <h2 className="font-display text-3xl sm:text-6xl font-extrabold mb-4 sm:mb-8 text-white">
          Trenger du rørlegger akkurat nå?
        </h2>
        <p className="text-base sm:text-xl text-brand-200 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Vi står klare til å rykke ut i Trondheim. Ikke la problemet bli verre mens du venter på at morgendagen skal starte.
        </p>
        <a href="tel:+4792828262" className="w-full sm:w-auto inline-flex bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 sm:px-10 py-5 sm:py-6 rounded-2xl font-extrabold text-xl sm:text-3xl items-center justify-center gap-3 sm:gap-4 transition-transform hover:scale-105 shadow-2xl shadow-accent-600/40">
          <Phone className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
          Ring 92 82 82 62
        </a>
        <p className="mt-6 sm:mt-8 text-xs sm:text-sm font-medium text-brand-300 uppercase tracking-widest">
          Åpent 24/7 • Rask utrykning i Trondheim
        </p>
      </div>
    </section>
  );
}
