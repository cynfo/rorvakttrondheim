import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rorvakttrondheim.no'),
  title: {
    template: '%s | Rørvakt Trondheim',
    default: 'Akutt Rørlegger Trondheim - Døgnåpen Rørleggervakt 24/7',
  },
  description: 'Trenger du rørlegger akutt i Trondheim? Vi rykker ut 24/7 for vannlekkasje, tett avløp og vvs-kriser. Lokal rørleggervakt, rask responstid. Ring 92 82 82 62!',
  keywords: ['rørlegger trondheim', 'akutt rørlegger trondheim', 'rørvakt trondheim', 'døgnvakt rørlegger', 'rørleggervakt trondheim', 'vannlekkasje trondheim', 'tett avløp trondheim'],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://rorvakttrondheim.no',
    siteName: 'Rørvakt Trondheim',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Rørvakt Trondheim - Akutt Rørlegger',
      },
    ],
  },
  alternates: {
    canonical: 'https://rorvakttrondheim.no',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18148191016"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18148191016');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-gray-50 text-gray-900 font-sans pb-28 md:pb-0 selection:bg-brand-500 selection:text-white flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
