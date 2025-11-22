"use client";
import { useSearchParams } from "next/navigation";

import Link from "next/link";


const Hero = () => {
  const searchParams = useSearchParams();
  // URL'de ?name=... varsa onu al, yoksa varsayılan metni kullan
  const clinicName = searchParams.get("name") || "Ankara Kızılay Diş Kliniği";
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#F7EFE3] via-[#FAFAFA] to-[#EEF3FF] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      
      {/* Arkaplan Dekoru (Opsiyonel - Hafiflik katar) */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-b from-[#F3EBDF]/30 to-transparent blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* SOL: İçerik */}
          <div className="animate-fade-up space-y-8 text-center lg:text-left">
            
            {/* Eyebrow (Üst Başlık) */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
                {clinicName}
              </span>
            </div>

            {/* Ana Başlık */}
            <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-[1.15]">
              Gülüşünüzü <span className="text-[#384B70]">Sanatla</span>,<br />
              Sağlığınızı <span className="text-[#384B70]">Bilimle</span> Tasarlıyoruz.
            </h1>

            {/* Açıklama */}
            <p className="text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Modern teknolojiler ve uzman hekim kadromuzla, ağrısız ve estetik diş hekimliği deneyimini keşfedin. Size özel tedavi planıyla hayalinizdeki gülüşe kavuşun.
            </p>

            {/* Butonlar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="#fast-appointment"
                className="rounded-full bg-[#384B70] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_20px_rgba(56,75,112,0.25)] transition hover:bg-[#2E3D63] hover:-translate-y-1"
              >
                Randevu Oluştur
              </Link>
              <Link
                href="#services"
                className="rounded-full bg-white border border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
              >
                Tedavileri İncele
              </Link>
            </div>

            {/* Alt Bilgi (Social Proof) */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D7C3A3]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span>4.9/5 Google Puanı</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <div>15+ Yıllık Tecrübe</div>
            </div>
          </div>

          {/* SAĞ: Görsel */}
          <div className="relative order-first lg:order-last animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/3] lg:aspect-square w-full overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-2xl ring-1 ring-slate-900/5">
               {/* public/hero.webp dosyasının olduğundan emin ol */}
               <img 
                 src="/hero.webp" 
                 alt="Rauf Dent Klinik" 
                 className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
               />
               
               {/* Görsel Üzeri Dekoratif Kart (Opsiyonel - Premium His) */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-4 rounded-2xl border border-white/50 shadow-lg hidden sm:block">
                  <p className="text-sm font-heading font-semibold text-[#384B70]">Konforlu Tedavi Deneyimi</p>
                  <p className="text-xs text-slate-500 mt-1">Son teknoloji ekipmanlarla ağrısız süreç.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
