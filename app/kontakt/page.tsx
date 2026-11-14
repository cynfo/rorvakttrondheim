import { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: 'Kontakt | Døgnåpen Rørleggervakt Trondheim',
  description: 'Kontakt oss for akutt rørleggerhjelp i Trondheim. Vi har døgnåpen vakttelefon 92828262 og rykker ut umiddelbart ved vannlekkasje og tette avløp.',
  alternates: { canonical: '/kontakt' },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand-950 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6">
            Kontakt Oss
          </h1>
          <p className="text-lg md:text-xl text-brand-200 font-light max-w-2xl mx-auto">
            Trenger du hjelp nå? Ikke send e-post hvis det haster. Ring vår vakttelefon.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Urgent Contact */}
            <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100 shadow-sm text-center">
              <div className="bg-accent-100 text-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-display font-bold text-brand-950 mb-3">Akutt Behov?</h2>
              <p className="text-gray-600 mb-8">Vi har rørleggere på vakt 24/7. Svarer normalt innen få sekunder.</p>
              <a href="tel:+4792828262" className="inline-flex w-full justify-center items-center gap-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-accent-600/20">
                <Phone className="w-6 h-6" />
                92 82 82 62
              </a>
            </div>

            {/* Non-Urgent Contact */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
              <h2 className="text-2xl font-display font-bold text-brand-950 mb-6">Andre henvendelser</h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-gray-600">
                  <div className="bg-gray-50 p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Send oss en e-post</p>
                    <a href="mailto:chris@247rv.no" className="text-lg font-bold text-brand-900 hover:text-accent-600 transition-colors">chris@247rv.no</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-gray-600">
                  <div className="bg-gray-50 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Serviceområde</p>
                    <p className="text-lg font-bold text-brand-900">Trondheim & Omegn</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
