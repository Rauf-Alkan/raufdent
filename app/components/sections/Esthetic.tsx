import Image from "next/image";

const Esthetic = () => {
  return (
    <section
      id="esthetic"
      className="relative bg-gradient-to-r from-[#F9F2E8] via-white to-[#EEF4FF] py-28 md:py-36 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-24 lg:px-8 items-center">
        
        {/* SOL: Metin */}
        <div className="order-2 space-y-8 md:order-1">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#384B70]">
              Estetik Yaklaşım
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl leading-tight">
              Doğallık, Sanatla<br /> Buluşuyor
            </h2>
            {/* Dekoratif Çizgi */}
            <div className="mt-6 w-20 h-1.5 bg-[#D7C3A3] rounded-full" />
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Gülüş tasarımı süreçlerimizde yapaylıktan uzak, yüz hatlarınıza en uygun formu arıyoruz. Dijital teknolojiyi sanatsal bir bakış açısıyla harmanlayarak, size en çok yakışan gülüşü tasarlıyoruz.
          </p>
          
          <div className="flex items-center gap-4 pt-2">
             <div className="h-12 w-1 bg-[#384B70] rounded-full" />
             <div>
                <p className="text-lg font-bold text-slate-900">Dr. Rauf Alkan</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">Klinik Kurucusu</p>
             </div>
          </div>
        </div>

        {/* SAĞ: Görsel */}
        <div className="order-1 md:order-2 relative">
          <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-slate-900/5 transform rotate-1 hover:rotate-0 transition-all duration-700">
            <Image
              src="/esthetic.webp" // public klasöründe bu isimde görsel olmalı
              alt="Estetik diş hekimliği"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          
          {/* Dekoratif Arkaplan Çemberi */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200 rounded-full -z-10 opacity-50 dashed-border" />
        </div>

      </div>
    </section>
  );
};

export default Esthetic;
