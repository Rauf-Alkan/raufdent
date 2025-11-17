const services = [
  {
    icon: "🦷",
    title: "İmplant Tedavisi",
    description:
      "Eksik dişlerinizi doğal görünümde ve fonksiyonel implant çözümleriyle tamamlıyoruz.",
  },
  {
    icon: "✨",
    title: "Diş Beyazlatma (Bleaching)",
    description:
      "Ofis tipi veya ev tipi profesyonel yöntemlerle daha beyaz ve estetik bir gülüş sunuyoruz.",
  },
  {
    icon: "🪥",
    title: "Ortodonti (Diş Teli / Şeffaf Plak)",
    description: "Geleneksel diş telleri veya görünmez plaklarla çapraşıklıkları düzeltiyoruz.",
  },
  {
    icon: "💎",
    title: "Estetik Diş Hekimliği (Gülüş Tasarımı)",
    description: "Lamina, zirkonyum ve bonding uygulamalarıyla gülüşünüzü yeniden tasarlıyoruz.",
  },
  {
    icon: "🩺",
    title: "Kanal Tedavisi (Endodonti)",
    description:
      "Enfekte olmuş dişleri modern tekniklerle tedavi ederek ağrıyı kalıcı olarak gideriyoruz.",
  },
  {
    icon: "🌿",
    title: "Diş Eti Hastalıkları (Periodontoloji)",
    description: "Diş eti kanaması, çekilmesi ve iltihabı gibi sorunları etkin şekilde tedavi ediyoruz.",
  },
  {
    icon: "👶",
    title: "Çocuk Diş Hekimliği (Pedodonti)",
    description:
      "Süt ve kalıcı dişlerin sağlığını koruyucu ve tedavi edici uygulamalarla güvence altına alıyoruz.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">
            Güncel Diş Hekimliği Çözümleri
          </p>
          <div className="mb-16 space-y-4">
            <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
            Tüm Diş İhtiyaçlarınız İçin Tek Adres
            </h2>
            <div className="mx-auto accent-line" />
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
            Estetikten fonksiyona kadar tüm ağız ve diş sağlığı ihtiyaçlarınıza özel çözümlerle yaklaşarak,
            modern teknolojiler eşliğinde üst düzey bir tedavi deneyimi sunuyoruz.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex transform flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] md:p-9 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <span
                aria-hidden="true"
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-2xl"
              >
                {service.icon}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mb-4 text-base leading-relaxed text-slate-600">{service.description}</p>
              <p className="mt-auto text-sm text-slate-500">
                Daha fazla bilgi için{" "}
                <span className="font-semibold text-slate-900">klinik ekibimizle iletişime geçin.</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
