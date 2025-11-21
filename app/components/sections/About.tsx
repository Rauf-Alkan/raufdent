import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Modern Teknoloji",
    description: "Dijital ölçü ve 3D görüntüleme sistemleri.",
    icon: (
      <svg className="w-6 h-6 text-[#384B70]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
    ),
  },
  {
    title: "Uzman Kadro",
    description: "Deneyimli ve sürekli gelişen hekim ekibi.",
    icon: (
      <svg className="w-6 h-6 text-[#384B70]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* GÖRSEL ALANI */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.1)] bg-slate-50 h-[400px] lg:h-[500px] w-full border border-slate-100 group">
               {/* public/about.webp görselini kullanır */}
               <Image 
                 src="/about.webp" 
                 alt="Rauf Dent Klinik" 
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               {/* Görsel Üzeri Rozet */}
               <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur py-3 px-5 rounded-2xl shadow-lg border border-slate-100 text-center">
                  <p className="text-3xl font-heading font-bold text-[#384B70]">15+</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Yıllık Tecrübe</p>
               </div>
            </div>
            {/* Arkaplan Dekoru */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F3EBDF] rounded-full blur-3xl -z-10 opacity-60" />
          </div>

          {/* İÇERİK ALANI */}
          <div className="order-1 lg:order-2">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.35em] text-[#384B70]">
              Hakkımızda
            </span>
            <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Sağlıklı ve Estetik Gülüşler İçin Buradayız
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Ankara Kızılay&apos;da bulunan kliniğimiz, modern diş hekimliğinin tüm imkanlarını kullanarak, estetik ve fonksiyonu bir araya getiren kişiye özel tedavi planları sunmaktadır. Hedefimiz; size sadece bir tedavi değil, konforlu ve güven dolu bir deneyim yaşatmaktır.
            </p>

            {/* Özellik Listesi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3">
                   <div className="w-12 h-12 rounded-xl bg-[#F3EBDF] flex items-center justify-center">
                      {feature.icon}
                   </div>
                   <div>
                      <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{feature.description}</p>
                   </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#384B70] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#384B70]/20 transition hover:bg-[#2E3D63] hover:-translate-y-1"
            >
              Tanışma Randevusu Al
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;