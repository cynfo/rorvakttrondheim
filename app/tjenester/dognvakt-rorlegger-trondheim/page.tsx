import { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { plumbingSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Døgnvakt Rørlegger Trondheim | Åpent 24/7',
  description: 'Vår døgnvakt for rørlegger i Trondheim svarer 24/7. Uansett tidspunkt rykker vi ut for akutt rørservice, vannlekkasjer og rørbrudd.',
};

export default function DognvaktPage() {
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
            Døgnvakt Rørlegger <br className="hidden sm:block" /> i Trondheim
          </>
        }
        subtitle="Vi sover ikke før rørbruddet er fikset."
        description="Når krisen er et faktum midt på natten, i helgen eller på en helligdag, trenger du en lokalkjent rørlegger med ekte døgnvakt. Vi er alltid våkne og klare."
      />
      <TrustBar />
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-display font-bold text-brand-950 mb-6">Alltid på vakt for Trondheim</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Mange byråer reklamerer med døgnvakt, men tar ikke telefonen kl. 03:00 på en søndag. Hos Rørvakt Trondheim er døgnvakt kjernevirksomheten vår. Vi forstår at en ubehandlet lekkasje kan koste hundretusenvis av kroner og ødelegge hjemmet ditt. Derfor svarer vi alltid.
          </p>
          <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 my-8">
            <h3 className="text-xl font-bold text-brand-900 mb-3">Våre vakt-tjenester inkluderer:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Akutt utrykning til alle bydeler (Tiller, Byåsen, Heimdal, Ranheim, Strindheim).</li>
              <li>Stopp av akutte lekkasjer og frostsprengte rør.</li>
              <li>Tining av frosne vannrør i vinterhalvåret.</li>
              <li>Beredskap på julaften, påske og andre kritiske helligdager.</li>
            </ul>
          </div>
        </div>
      </div>
      <FAQ />
      <FinalCTA />
    </>
  );
}
