import { Droplet, Waves, Thermometer, Phone } from "lucide-react";
import Link from "next/link";

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-950 mb-4 sm:mb-6 leading-tight">
            Rørservice i Trondheim: <br/><span className="text-brand-600">Hva trenger du hjelp til nå?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            Klikk på problemet ditt for å ringe vår vakttelefon direkte. Vi har alltid bilene pakket og klare for utrykning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Service Card 1 */}
          <Link href="tel:+4792828262" className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 relative z-10">
              <Droplet className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3 relative z-10">Akutt Vannlekkasje</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed relative z-10 flex-grow">
              Steng hovedkranen hvis du kan, og ring oss umiddelbart for å unngå store vannskader i boligen din.
            </p>
            <div className="mt-auto flex items-center gap-2 text-brand-600 font-bold group-hover:text-accent-600 transition-colors relative z-10">
              Ring for hjelp
              <div className="bg-brand-50 group-hover:bg-accent-50 p-2 rounded-full transition-colors">
                <Phone className="w-4 h-4" />
              </div>
            </div>
          </Link>
          
          {/* Service Card 2 */}
          <Link href="tel:+4792828262" className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-gray-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 text-gray-700 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 relative z-10">
              <Waves className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3 relative z-10">Tett Avløp / Toalett</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed relative z-10 flex-grow">
              Har du fått stopp i toalett, vask eller sluk? Vi har spesialutstyret som kreves for å åpne opp raskt og skånsomt.
            </p>
            <div className="mt-auto flex items-center gap-2 text-brand-600 font-bold group-hover:text-accent-600 transition-colors relative z-10">
              Ring for hjelp
              <div className="bg-brand-50 group-hover:bg-accent-50 p-2 rounded-full transition-colors">
                <Phone className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Service Card 3 */}
          <Link href="tel:+4792828262" className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-orange-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 relative z-10">
              <Thermometer className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3 relative z-10">Varmtvannsbereder</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed relative z-10 flex-grow">
              Ingen varmtvann eller drypper det fra berederen? Vi rykker ut for å feilsøke, reparere eller bytte berederen din.
            </p>
            <div className="mt-auto flex items-center gap-2 text-brand-600 font-bold group-hover:text-accent-600 transition-colors relative z-10">
              Ring for hjelp
              <div className="bg-brand-50 group-hover:bg-accent-50 p-2 rounded-full transition-colors">
                <Phone className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* General CTA Card taking 3 columns on large */}
          <Link href="tel:+4792828262" className="lg:col-span-3 bg-gradient-to-br from-brand-900 to-brand-950 rounded-[2rem] p-6 sm:p-12 shadow-2xl hover:shadow-brand-900/40 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group flex flex-col md:flex-row items-center justify-between text-center md:text-left border border-brand-800 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-600 rounded-full mix-blend-screen filter blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
            
            <div className="relative z-10 mb-6 md:mb-0 md:max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 font-bold text-xs mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                ANDRE AKUTTE BEHOV?
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3 sm:mb-4">
                Trenger du en rørlegger med noe annet <span className="text-brand-400">NÅ?</span>
              </h3>
              <p className="text-brand-200 text-sm sm:text-lg">
                Hva enn det gjelder, vi kan stille opp med riktig utstyr og solid rørlegger-kompetanse i hele Trondheim.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <div className="bg-white text-brand-950 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-extrabold text-lg sm:text-xl flex items-center justify-center gap-3 group-hover:bg-accent-600 group-hover:text-white transition-all shadow-xl hover:scale-105">
                <Phone className="w-6 h-6" strokeWidth={2.5} />
                92 82 82 62
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
