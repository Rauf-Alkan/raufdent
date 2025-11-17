const teamMembers = [
  {
    name: "Uzm. Dt. Ali Yılmaz",
    title: "İmplant ve Cerrahi",
    photo: "/doctor1.webp",
    description:
      "İleri implantoloji ve cerrahi alanında 12 yıllık deneyime sahiptir. Doğal görünümlü sonuçlar için kişiye özel planlar oluşturur.",
  },
  {
    name: "Uzm. Dt. Ayşe Demir",
    title: "Estetik Diş Hekimi",
    photo: "/doctor2.webp",
    description:
      "Estetik restorasyonlar ve gülüş tasarımı üzerine çalışır. Dijital planlama ile her hastaya sade ve doğala yakın bir estetik sunar.",
  },
  {
    name: "Uzm. Dt. Emre Akman",
    title: "Ortodonti ve Pedodonti",
    photo: "/doctor3.webp",
    description:
      "Ortodonti ve çocuk diş hekimliği yaklaşımını birleştirir. Hem çocuklarda hem yetişkinlerde konforlu tedavi süreçleri yürütür.",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="bg-white py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">
            Ekibimiz
          </p>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
            Alanında Uzman Hekimlerimiz
            </h2>
            <div className="mx-auto accent-line" />
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600">
            Tecrübeli hekimlerimiz, modern klinik altyapımız ve kişiye özel yaklaşımımızla her hastamızın güvenle
            gülümsemesini sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((doctor) => (
            <div
              key={doctor.name}
              className="flex transform flex-col items-center rounded-2xl border border-slate-100 bg-white/90 p-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.14)] md:p-8"
            >
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="mb-6 h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-[0_10px_30px_rgba(15,23,42,0.15)]"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-slate-900">
                {doctor.name}
              </h3>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">{doctor.title}</p>
              <p className="text-sm leading-relaxed text-slate-600">{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
