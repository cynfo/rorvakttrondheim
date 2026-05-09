"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Hvor raskt kan en rørlegger i Trondheim komme ved akutt vannlekkasje?",
    answer: "Vi har utrykning fra vår base sentralt i Trondheim, og er normalt på plass hos deg innen 30-60 minutter ved en akutt vannlekkasje, avhengig av hvor du befinner deg og trafikkbildet."
  },
  {
    question: "Har dere en døgnåpen rørleggervakt?",
    answer: "Ja, vi har en ekte døgnvakt for rørlegger-tjenester. Vi svarer telefonen 24 timer i døgnet, også på julaften, midt på natten og i helger. Vannlekkasjer tar ikke fri, og det gjør ikke vi heller."
  },
  {
    question: "Hva koster en akutt utrykning for en rørlegger i Trondheim?",
    answer: "Prisen for vaktutrykning varierer ut fra tidspunkt (dag, natt, helg, helligdag). Når du ringer vår rørleggervakt opplyser vi alltid tydelig om gjeldende takster for oppmøte og timepris før vi rykker ut."
  },
  {
    question: "Hvilke områder dekker deres rørservice?",
    answer: "Vår akutte rørservice dekker hele Trondheim kommune (inkludert Byåsen, Tiller, Heimdal, Ranheim, Strindheim), samt nærliggende områder som Malvik og Melhus."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-950 mb-4 sm:mb-6">
            Ofte stilte spørsmål om akutt rørlegger
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            Her er svar på det folk i Trondheim oftest lurer på i en akuttsituasjon.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-brand-50/50 border border-brand-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                className="w-full px-5 py-5 sm:px-6 sm:py-6 text-left flex justify-between items-center focus:outline-none" 
                aria-expanded={openIndex === index} 
                onClick={() => toggleFaq(index)}
              >
                <span className="font-display font-bold text-brand-950 text-lg sm:text-xl pr-4">
                  {faq.question}
                </span>
                <div className="bg-white p-1.5 sm:p-2 rounded-full shadow-sm border border-brand-100 shrink-0">
                  <ChevronDown className={`text-brand-600 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <div 
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{ maxHeight: openIndex === index ? '500px' : '0' }}
              >
                <div className="bg-white/50 px-5 sm:px-6 pb-6 pt-2 text-gray-600 font-light leading-relaxed text-base sm:text-lg border-t border-brand-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
