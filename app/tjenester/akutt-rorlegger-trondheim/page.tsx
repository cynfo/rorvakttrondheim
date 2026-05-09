import { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import { plumbingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Akutt Rørlegger Trondheim | Rask Utrykning',
  description: 'Trenger du en akutt rørlegger i Trondheim nå? Vi har vaktbiler pakket og klare for å rykke ut til vannlekkasjer, rørbrudd og tette avløp. Ring oss 24/7!',
};

export default function AkuttRorleggerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plumbingSchema) }}
      />
      <Hero 
        title={
          <>
            Akutt rørlegger i <br className="hidden sm:block" /> Trondheim.
          </>
        }
        subtitle="På plass når du trenger det som mest."
        description="Vannskader og rørbrudd kan ikke vente. Vår akutte rørleggervakt dekker hele Trondheim med umiddelbar utrykning for å begrense skadene på boligen din."
      />
      <TrustBar />
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-display font-bold text-brand-950 mb-6">Hva innebærer vår akutte rørservice?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Når du ringer vår vakttelefon for en akutt rørlegger i Trondheim, får du umiddelbart snakke med fagfolk som vet hva som må gjøres. Enten det er et sprukket rør midt på natten eller et toalett som renner over, har vi kompetansen og utstyret klart i bilen.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Vi rykker ut fra vår base sentralt i Trondheim, og er vanligvis fremme hos deg på rekordtid. Vi dekker områder som Byåsen, Tiller, Ranheim, Heimdal og Strindheim.
          </p>
        </div>
      </div>
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
