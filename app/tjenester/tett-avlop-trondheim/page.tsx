import { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import { plumbingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Tett Avløp Trondheim | Vi åpner rørene',
  description: 'Tett toalett eller sluk i Trondheim? Vår døgnvakt har spesialverktøy for å åpne tette rør, avløp og sluk raskt og effektivt.',
};

export default function TettAvlopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plumbingSchema) }}
      />
      <Hero 
        title={
          <>
            Tett avløp eller <br className="hidden sm:block" /> toalett i Trondheim?
          </>
        }
        subtitle="Vi åpner rør og sluk effektivt."
        description="Vann som ikke renner unna eller et toalett som renner over er et mareritt. Vi har utstyret som løser proppen i avløpet ditt på flekken."
      />
      <TrustBar />
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-display font-bold text-brand-950 mb-6">Effektiv tømming og rens av tette rør</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Et tett avløp i Trondheim kan oppstå brått på grunn av oppsamlet fett, matrester eller fremmedlegemer i rørene. Ofte sitter proppen så langt nede at plumbo eller vanlige avløpsåpnere ikke fungerer – og kan til og med gjøre vondt verre ved å forsteine seg i røret.
          </p>
          <h3 className="text-xl font-bold text-brand-900 mt-8 mb-4">Slik hjelper vi deg</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-8">
            <li><strong>Tett toalett:</strong> Vi demonterer og bruker spesialutstyr for å fjerne blokkeringer skånsomt.</li>
            <li><strong>Tett sluk og vask:</strong> Vi renser vannlås og bruker stakedon/høytrykk for å åpne faste propper.</li>
            <li><strong>Forebyggende:</strong> Vi sikrer at avløpet har god gjennomstrømming for å unngå at problemet kommer tilbake uken etter.</li>
          </ul>
        </div>
      </div>
      <FinalCTA />
    </>
  );
}
