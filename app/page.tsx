import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import RecentWork from "@/components/RecentWork";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";
import { plumbingSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plumbingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Hero 
        title={
          <>
            Akutt rørleggervakt <br className="hidden sm:block lg:block" /> i Trondheim.
          </>
        }
        subtitle="Vannlekkasje eller tett avløp? Vi rykker ut 24/7."
        description="Ikke vent til skaden blir verre. Vår lokale rørlegger rykker ut umiddelbart over hele Trondheim og omegn – enten du har lekkasje, tett rør eller problemer med varmtvannsberederen."
      />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <RecentWork />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
