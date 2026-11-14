export const plumbingSchema = {
  "@context": "https://schema.org",
  "@type": "PlumbingService",
  "name": "Rørvakt Trondheim",
  "legalName": "CH Rørleggervakten Trondheim AS",
  "taxID": "937305451",
  "email": "chris@247rv.no",
  "image": "https://www.rorvakttrondheim.no/hero-bg.webp",
  "url": "https://www.rorvakttrondheim.no",
  "telephone": "+4792828262",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Trondheim",
    "addressRegion": "Trøndelag",
    "postalCode": "7026",
    "addressCountry": "NO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 63.4305,
    "longitude": 10.3951
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": [
    "Trondheim",
    "Byåsen",
    "Heimdal",
    "Tiller",
    "Strindheim",
    "Ranheim",
    "Malvik",
    "Melhus"
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Hvor raskt kan en rørlegger i Trondheim komme ved akutt vannlekkasje?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Vi har utrykning fra vår base sentralt i Trondheim, og er normalt på plass hos deg innen 30-60 minutter ved en akutt vannlekkasje, avhengig av hvor du befinner deg og trafikkbildet."
    }
  },{
    "@type": "Question",
    "name": "Har dere en døgnåpen rørleggervakt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ja, vi har en ekte døgnvakt for rørlegger-tjenester. Vi svarer telefonen 24 timer i døgnet, også på julaften, midt på natten og i helger. Vannlekkasjer tar ikke fri, og det gjør ikke vi heller."
    }
  },{
    "@type": "Question",
    "name": "Hva koster en akutt utrykning for en rørlegger i Trondheim?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Prisen for vaktutrykning varierer ut fra tidspunkt (dag, natt, helg, helligdag). Når du ringer vår rørleggervakt opplyser vi alltid tydelig om gjeldende takster for oppmøte og timepris før vi rykker ut."
    }
  },{
    "@type": "Question",
    "name": "Hvilke områder dekker deres rørservice?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Vår akutte rørservice dekker hele Trondheim kommune (inkludert Byåsen, Tiller, Heimdal, Ranheim, Strindheim), samt nærliggende områder som Malvik og Melhus."
    }
  }]
};
