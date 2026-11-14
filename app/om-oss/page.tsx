import { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import RecentWork from "@/components/RecentWork";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: 'Om Oss | Lokal Rørlegger i Trondheim',
  description: 'Vi er din lokale rørlegger i Trondheim. Med døgnvakt og rask responstid hjelper vi deg med vannlekkasjer og tette rør, når som helst på døgnet.',
  alternates: { canonical: '/om-oss' },
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-brand-950 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6">
            Om Rørvakt Trondheim
          </h1>
          <p className="text-lg md:text-xl text-brand-200 font-light max-w-2xl mx-auto">
            Vi er bygget på ett enkelt prinsipp: Når krisen rammer, trenger du noen som faktisk svarer og rykker ut.
          </p>
        </div>
      </div>
      
      <Testimonials />
      
      <section className="py-16 bg-white max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-display font-bold text-brand-950 mb-6">Vår Filosofi</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I Trondheim har været en tendens til å teste rør og avløp, spesielt i vinterhalvåret med frost og store temperatursvingninger. Når rørene sprekker eller avløpet går tett midt på natten, nytter det ikke å vente til klokken 08:00 neste morgen.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Vi etablerte vår døgnvakt med et mål om å alltid være tilgjengelige for Trondheims innbyggere. Med base sentralt i byen, dekker vi Byåsen, Heimdal, Tiller, Ranheim, Strindheim og alle nærliggende områder med kort responstid. Våre biler er alltid fullpakket med det nødvendige utstyret for å håndtere akutte lekkasjer, fjerne propper i avløp og feilsøke varmtvannsberedere.
        </p>
        <h2 className="text-3xl font-display font-bold text-brand-950 mt-10 mb-6">Hvorfor Velge Oss?</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-8">
          <li><strong>Ekte Døgnvakt:</strong> Vi svarer telefonen og rykker ut 24 timer i døgnet, året rundt.</li>
          <li><strong>Lokal Ekspertise:</strong> Vi kjenner Trondheim og vet hvordan byens infrastruktur påvirkes av klimaet.</li>
          <li><strong>Gjennomsiktige Priser:</strong> Vi oppgir vakt-tariffer tydelig over telefonen.</li>
          <li><strong>Fokus på trygghet:</strong> Vår primære jobb er å stoppe skaden og sikre boligen din mot videre ødeleggelser.</li>
        </ul>
      </section>

      <RecentWork />

      <FinalCTA />
    </>
  );
}
