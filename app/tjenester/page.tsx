import { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: 'Våre Tjenester | Rørlegger Trondheim',
  description: 'Oversikt over rørleggertjenester vi utfører i Trondheim. Vi hjelper med alt fra akutt vannlekkasje og tett avløp til reparasjon av varmtvannsbereder.',
  alternates: { canonical: '/tjenester' },
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-brand-950 pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6">
            Akutte Rørleggertjenester
          </h1>
          <p className="text-lg md:text-xl text-brand-200 font-light max-w-2xl mx-auto">
            Hva trenger du hjelp til akkurat nå? Klikk på tjenesten under for mer informasjon.
          </p>
        </div>
      </div>
      
      <ServicesGrid />
      
      <FinalCTA />
    </>
  );
}
