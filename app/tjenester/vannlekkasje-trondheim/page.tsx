import { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import { plumbingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Vannlekkasje Trondheim | Akutt Hjelp',
  description: 'Vannlekkasje i Trondheim? Vi rykker ut umiddelbart for å stoppe lekkasjen og forhindre store vannskader. Døgnåpen vakttelefon 92828262.',
  alternates: { canonical: '/tjenester/vannlekkasje-trondheim' },
};

export default function VannlekkasjePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plumbingSchema) }}
      />
      <Hero 
        title={
          <>
            Vannlekkasje i <br className="hidden sm:block" /> Trondheim?
          </>
        }
        subtitle="Steng hovedkranen. Vi er på vei."
        description="Fosser vannet? En uoppdaget eller ubehandlet vannlekkasje kan gi katastrofale skader. Ring oss nå, så rykker vi ut umiddelbart med spesialutstyr."
      />
      <TrustBar />
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-display font-bold text-brand-950 mb-6">Dette må du gjøre ved vannlekkasje</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-600 mb-8 font-light">
            <li><strong>Steng hovedstoppekranen:</strong> Dette er det viktigste du gjør. Finn kranen (ofte i kjeller eller teknisk rom) og steng den helt.</li>
            <li><strong>Ring oss:</strong> Få en av våre rørleggere på vei med en gang. Telefonen vår (92 82 82 62) er alltid bemannet for vannlekkasjer i Trondheim.</li>
            <li><strong>Begrens skaden:</strong> Flytt verdifulle gjenstander bort fra vannet og bruk håndklær eller bøtter for å samle opp det verste mens du venter på oss.</li>
          </ol>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Vår lokale rørleggervakt har lang erfaring med å håndtere frostsprengte rør og akutte vannlekkasjer i Trøndelag. Vi stopper lekkasjen, fjerner den defekte delen, og etablerer en trygg og permanent løsning.
          </p>
        </div>
      </div>
      <FinalCTA />
    </>
  );
}
