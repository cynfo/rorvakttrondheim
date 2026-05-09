import { Clock, Zap, MapPin, ShieldCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-10 sm:mb-0">
      <div className="bg-white rounded-2xl shadow-xl shadow-brand-900/5 border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
          
          <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6 pt-4 sm:pt-0 first:pt-0 first:border-0 border-t sm:border-0 border-gray-100">
            <div className="bg-brand-50 p-2.5 sm:p-3 rounded-2xl text-brand-600 shrink-0">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 font-display text-sm sm:text-base">Døgnvakt Rørlegger</p>
              <p className="text-xs text-gray-500">Svarer hele døgnet 24/7</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6 pt-4 sm:pt-0 border-t sm:border-0 border-gray-100">
            <div className="bg-brand-50 p-2.5 sm:p-3 rounded-2xl text-brand-600 shrink-0">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 font-display text-sm sm:text-base">Rask utrykning</p>
              <p className="text-xs text-gray-500">Prioriterer akutte kriser</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6 pt-4 lg:pt-0 border-t lg:border-0 border-gray-100">
            <div className="bg-brand-50 p-2.5 sm:p-3 rounded-2xl text-brand-600 shrink-0">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 font-display text-sm sm:text-base">Lokalkjent i Trondheim</p>
              <p className="text-xs text-gray-500">Kjenner alle bydeler</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-6 pt-4 lg:pt-0 border-t lg:border-0 border-gray-100">
            <div className="bg-brand-50 p-2.5 sm:p-3 rounded-2xl text-brand-600 shrink-0">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 font-display text-sm sm:text-base">Trygg Rørservice</p>
              <p className="text-xs text-gray-500">Autorisert Rørlegger</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
