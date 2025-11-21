import Image from "next/image";

const teamMembers = [
  {
    name: "Uzm. Dt. Ali Yılmaz",
    title: "İmplant ve Cerrahi",
    photo: "/doctor1.webp",
    description: "İleri implantoloji ve cerrahi alanında 12 yıllık deneyim.",
  },
  {
    name: "Uzm. Dt. Ayşe Demir",
    title: "Estetik Diş Hekimi",
    photo: "/doctor2.webp",
    description: "Gülüş tasarımı ve estetik restorasyon uzmanı.",
  },
  {
    name: "Uzm. Dt. Emre Akman",
    title: "Ortodonti",
    photo: "/doctor3.webp",
    description: "Şeffaf plak ve modern ortodonti tedavileri.",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#384B70]">
            Hekim Kadromuz
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Alanında Uzman Hekimler
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((doctor) => (
            <div
              key={doctor.name}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6 h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-slate-200">
                 {/* Görsel efekti: Siyah beyazdan renkliye geçiş */}
                 <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                 />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#384B70]">{doctor.title}</p>
              <p className="max-w-xs text-sm leading-relaxed text-slate-500">{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;