import Image from "next/image";

export default function RecentWork() {
  const projects = [
    {
      id: 1,
      src: "/project-varmtvannsbereder.png",
      alt: "Montering av ny varmtvannsbereder i Trondheim",
      title: "Utskifting av Varmtvannsbereder",
      label: "Heimdal"
    },
    {
      id: 2,
      src: "/project-servant.jpg",
      alt: "Nytt røropplegg og montering av servant",
      title: "Montering av servant",
      label: "Byåsen"
    },
    {
      id: 3,
      src: "/project-bad.jpg",
      alt: "Komplett bad og røropplegg",
      title: "Røropplegg baderom",
      label: "Trondheim Sentrum"
    },
    {
      id: 4,
      src: "/project-dusj.jpg",
      alt: "Dusj og baderomsløsning",
      title: "Ny dusjløsning",
      label: "Strindheim"
    }
  ];

  return (
    <section className="py-16 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-950 mb-4 sm:mb-6">
            Nylig utført arbeid i Trondheim
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            Ekte bilder fra ekte jobber. Vi legger stor vekt på at rørarbeidet ikke bare skal være trygt og tett, men også se profesjonelt ut for årevis med problemfri bruk.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 aspect-[4/5]">
              <Image 
                src={project.src} 
                alt={project.alt} 
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
