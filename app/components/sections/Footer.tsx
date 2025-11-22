"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Footer = () => {
  const searchParams = useSearchParams();
  const clinicName = searchParams.get("name") || "Rauf Dent";
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Kolon: Logo & Açıklama */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <Image 
                 src="/logo.png" 
                 alt={clinicName}
                 width={40} 
                 height={40} 
                 className="brightness-0 invert object-contain" 
               />
               <span className="font-heading text-2xl font-bold tracking-tight">{clinicName}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Ankara Kızılay&apos;da modern diş hekimliği ve kişiye özel tedavilerle sağlıklı, estetik gülüşler sunuyoruz. Hasta memnuniyeti ve konforu önceliğimizdir.
            </p>
            {/* Sosyal Medya İkonları (Örnek) */}
            <div className="flex gap-4 pt-2">
               {/* Instagram */}
               <a href="#" className="text-slate-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.938c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg></a>
            </div>
          </div>

          {/* 2. Kolon: Hızlı Linkler */}
          <div>
            <h3 className="mb-6 font-bold text-lg text-white border-b border-slate-700 pb-2 inline-block">Hızlı Erişim</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#hero" className="hover:text-[#D7C3A3] transition-colors flex items-center gap-2"><span className="text-[10px]">›</span> Ana Sayfa</Link></li>
              <li><Link href="#about" className="hover:text-[#D7C3A3] transition-colors flex items-center gap-2"><span className="text-[10px]">›</span> Hakkımızda</Link></li>
              <li><Link href="#services" className="hover:text-[#D7C3A3] transition-colors flex items-center gap-2"><span className="text-[10px]">›</span> Tedaviler</Link></li>
              <li><Link href="#contact" className="hover:text-[#D7C3A3] transition-colors flex items-center gap-2"><span className="text-[10px]">›</span> İletişim</Link></li>
            </ul>
          </div>

          {/* 3. Kolon: İletişim */}
          <div>
            <h3 className="mb-6 font-bold text-lg text-white border-b border-slate-700 pb-2 inline-block">İletişim</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3 items-start">
                <span className="text-[#D7C3A3] mt-0.5">📍</span>
                <span>Atatürk Bulvarı No:123<br/>Kızılay, Çankaya / Ankara</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-[#D7C3A3]">📞</span>
                <a href="tel:+905555555555" className="hover:text-white transition font-medium">+90 555 555 55 55</a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-[#D7C3A3]">✉️</span>
                <a href="mailto:info@raufalkandis.com" className="hover:text-white transition">info@raufalkandis.com</a>
              </li>
            </ul>
          </div>

          {/* 4. Kolon: Çalışma Saatleri */}
          <div>
            <h3 className="mb-6 font-bold text-lg text-white border-b border-slate-700 pb-2 inline-block">Çalışma Saatleri</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Hafta İçi</span>
                <span className="text-white font-medium">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Cumartesi</span>
                <span className="text-white font-medium">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span>Pazar</span>
                <span className="text-[#D7C3A3] font-medium">Kapalı</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Telif */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 {clinicName} Klinik. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-slate-300 transition">Gizlilik Politikası</a>
             <a href="#" className="hover:text-slate-300 transition">KVKK Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;