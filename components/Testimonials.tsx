import Image from "next/image";
import { Star, PhoneCall, CheckCircle2, Clock } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-32 bg-brand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          
          {/* Image/Testimonial Side */}
          <div className="order-2 lg:order-1 relative h-64 sm:h-full sm:min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-900">
              <Image 
                src="/hero-bg.png" 
                alt="Trygg rørlegger som inspiserer rør" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-60 mix-blend-overlay" 
              />
            </div>
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 bg-gradient-to-t from-brand-950 via-brand-900/60 to-transparent text-white">
              <div className="flex text-yellow-400 mb-3 sm:mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                ))}
              </div>
              <p className="text-base sm:text-2xl font-light italic text-brand-100 mb-4 sm:mb-6 leading-relaxed">
                "Røret under vasken sprakk kl 03. Rørvakt Trondheim var på Byåsen 25 min senere. Fantastisk lokal service!"
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center font-bold text-lg sm:text-xl text-white border border-white/30">
                  M
                </div>
                <div>
                  <p className="font-bold text-white text-base sm:text-lg">Martin K.</p>
                  <p className="text-xs sm:text-sm text-brand-300">Byåsen, Trondheim</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-8 text-brand-950">
              Din lokale rørlegger i Trondheim og omegn
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed font-light">
              Når vannet fosser ut på gulvet midt på natten, trenger du noen som faktisk tar telefonen. Som din lokale rørleggervakt dekker vi hele Trondheim – fra Byåsen og Heimdal til Tiller, Strindheim og Ranheim. Vi er bygget på tilgjengelighet, kompetanse og ekstrem punktlighet.
            </p>
            
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start gap-4 sm:gap-5 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-brand-100 text-brand-600 rounded-xl p-2.5 sm:p-3 shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-950">Døgnåpen vakttelefon</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 leading-relaxed font-light">
                    Vår rørlegger-vakttelefon er bemannet 24 timer i døgnet, 365 dager i året. Du snakker direkte med fagfolk, ikke en telefonsvarer.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 sm:gap-5 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-brand-100 text-brand-600 rounded-xl p-2.5 sm:p-3 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-950">Ingen skjulte kostnader</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 leading-relaxed font-light">
                    Vi er åpne om pris. Du får alltid vite gjeldende vakt-tariffer før vi rykker ut, så du vet hva hjelpen koster.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 sm:gap-5 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-brand-100 text-brand-600 rounded-xl p-2.5 sm:p-3 shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-950">Solid fagkompetanse</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 leading-relaxed font-light">
                    Som din lokale rørlegger utbedrer vi feilen etter strenge norske standarder for å sikre hjemmet ditt for fremtiden.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
