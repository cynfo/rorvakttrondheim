import Image from "next/image";
import { Phone, CheckCircle2 } from "lucide-react";

interface HeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: string;
}

export default function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <section className="relative bg-brand-950 text-white pt-10 pb-16 sm:pt-32 sm:pb-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Rørlegger rykker ut akutt i Trondheim" 
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 sm:opacity-40 mix-blend-luminosity filter blur-[2px] scale-105 object-center"
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 sm:via-brand-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/50 to-brand-950/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent-600/20 text-accent-400 font-bold text-xs sm:text-sm mb-6 sm:mb-8 border border-accent-600/30 backdrop-blur-md mx-auto lg:mx-0">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-accent-500"></span>
              </span>
              PÅ VAKT I TRONDHEIM NÅ
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight text-white drop-shadow-md">
              {title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600 block mt-1 sm:mt-2 text-3xl sm:text-4xl lg:text-5xl">
                {subtitle}
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-brand-100 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col gap-4 mb-8 sm:mb-10 max-w-sm mx-auto lg:mx-0">
              <a href="tel:+4792828262" aria-label="Ring 92 82 82 62 for rørleggervakt" className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-extrabold text-xl sm:text-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl shadow-accent-600/40 animate-pulse-ring">
                <Phone className="w-7 h-7" strokeWidth={2.5} />
                Ring 92 82 82 62
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-sm font-medium text-brand-200 justify-center lg:justify-start">
              <div className="flex items-center justify-center gap-2">
                <div className="bg-brand-500/20 p-1 sm:p-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-brand-400" />
                </div>
                Rask utrykning
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 bg-brand-700 rounded-full"></div>
              <div className="flex items-center justify-center gap-2">
                <div className="bg-brand-500/20 p-1 sm:p-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-brand-400" />
                </div>
                Lokal rørlegger
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 bg-brand-700 rounded-full"></div>
              <div className="flex items-center justify-center gap-2 mt-2 sm:mt-0">
                <div className="bg-brand-500/20 p-1 sm:p-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-brand-400" />
                </div>
                Døgnåpen vakt
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Glassmorphism Trust Box */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl relative z-10 text-left animate-float">
              <div className="absolute -top-4 -right-4 bg-accent-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                <Phone className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h2 className="font-display text-2xl font-bold mb-6 text-white pb-4 border-b border-white/10">Klar til utrykning i Trondheim:</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl text-accent-400 shrink-0 border border-white/5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">På plass innen 60 min</h3>
                    <p className="text-brand-100 text-sm mt-1">Vi rykker ut fra vår base sentralt for å redde boligen din fra vannskader.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl text-accent-400 shrink-0 border border-white/5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Fastpris-garanti mulig</h3>
                    <p className="text-brand-100 text-sm mt-1">Vi er åpne om pris og takster, så du slipper overraskelser på regningen.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full z-0 pointer-events-none scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
