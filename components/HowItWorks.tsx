export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-950 mb-4 sm:mb-6">
            Rask hjelp i 3 enkle steg
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            Når krisen er et faktum, trenger du en lokalkjent rørlegger som handler fremfor byråkrati.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 relative">
          {/* Modern Line connecting steps (desktop only) */}
          <div className="hidden md:block absolute top-10 lg:top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-brand-100 via-brand-500 to-brand-100 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border-4 border-brand-100 text-brand-600 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-display font-black mb-6 sm:mb-8 shadow-xl shadow-brand-900/5 group-hover:scale-110 group-hover:border-brand-500 group-hover:bg-brand-50 transition-all duration-300 transform rotate-3 group-hover:rotate-0">
              1
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Du ringer vår vakttelefon</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              Forklar problemet kort. Vi gir deg umiddelbare råd (som å stenge hovedkranen) mens vi setter oss i bilen.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-brand-600 border-4 border-white text-white rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-display font-black mb-6 sm:mb-8 shadow-2xl shadow-brand-600/30 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300 transform -rotate-3 group-hover:rotate-0">
              2
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Vi rykker ut i Trondheim</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              Vår rørlegger er på vei. Vi har spesialtilpassede biler pakket med nødvendig utstyr for alle akutte rør-hendelser.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border-4 border-brand-100 text-brand-600 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-display font-black mb-6 sm:mb-8 shadow-xl shadow-brand-900/5 group-hover:scale-110 group-hover:border-brand-500 group-hover:bg-brand-50 transition-all duration-300 transform rotate-3 group-hover:rotate-0">
              3
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Problemet løses trygt</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              Vi stopper vannlekkasjen, fjerner proppen i avløpet og sikrer at skadeomfanget minimeres med solid fagkunnskap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
