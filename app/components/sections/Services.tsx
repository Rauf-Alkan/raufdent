const services = [
  {
    title: "İmplant Tedavisi",
    description: "Eksik dişlerinizi doğal görünümde ve fonksiyonel implant çözümleriyle tamamlıyoruz.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  },
  {
    title: "Diş Beyazlatma",
    description: "Ofis tipi veya ev tipi profesyonel yöntemlerle daha beyaz ve estetik bir gülüş.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
  },
  {
    title: "Ortodonti",
    description: "Geleneksel diş telleri veya şeffaf plaklarla (telsiz) çapraşıklıkları düzeltiyoruz.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Gülüş Tasarımı",
    description: "Lamina, zirkonyum ve bonding uygulamalarıyla gülüşünüzü dijital olarak tasarlıyoruz.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  },
  {
    title: "Kanal Tedavisi",
    description: "Enfekte olmuş dişleri modern tekniklerle tedavi ederek ağrıyı kalıcı olarak gideriyoruz.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Pedodonti",
    description: "Çocukların diş sağlığını koruyucu ve tedavi edici uygulamalarla güvence altına alıyoruz.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#EEF3FF] to-white py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#384B70]">
            Tedavilerimiz
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Tüm Diş İhtiyaçlarınız İçin<br/> Tek Adres
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Estetikten fonksiyona kadar tüm ağız ve diş sağlığı ihtiyaçlarınıza özel çözümlerle yaklaşarak, modern teknolojiler eşliğinde üst düzey bir tedavi deneyimi sunuyoruz.
          </p>
        </div>

        {/* Kartlar Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
            >
              {/* İkon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3EBDF] text-[#384B70] group-hover:bg-[#384B70] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-slate-900 font-heading">{service.title}</h3>
              <p className="mb-6 text-base leading-relaxed text-slate-600">
                {service.description}
              </p>
              
              {/* Dekoratif Ok */}
              <div className="mt-auto flex items-center text-sm font-semibold text-[#384B70] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                Detaylı Bilgi <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
