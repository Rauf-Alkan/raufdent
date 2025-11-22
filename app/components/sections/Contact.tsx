const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-[#F7F1E6] pb-24 pt-10 md:pb-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* SOL: İletişim Bilgileri */}
          <div className="space-y-10 flex flex-col justify-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#384B70]">
                Bize Ulaşın
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
                Kızılay'daki Kliniğimize Bekliyoruz
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Kahvemizi içmek ve ücretsiz ön muayene olmak için kliniğimizi ziyaret edebilirsiniz. Merkezi konumumuzla ulaşım çok kolay.
              </p>
            </div>

            <div className="space-y-6">
              {/* Adres Kartı */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F3EBDF] text-[#384B70]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Adres</h3>
                  <p className="mt-1 text-base leading-relaxed text-slate-600">
                    Atatürk Bulvarı, No: 123, Kat: 4, Daire: 10<br />
                    Kızılay, Çankaya / Ankara
                  </p>
                  <a href="https://maps.google.com" target="_blank" className="mt-2 inline-block text-sm font-semibold text-[#384B70] hover:underline">Yol Tarifi Al →</a>
                </div>
              </div>

              {/* Telefon Kartı */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F3EBDF] text-[#384B70]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Telefon & WhatsApp</h3>
                  <p className="mt-1 text-base leading-relaxed text-slate-600">
                    Randevu ve bilgi için bize ulaşın.
                  </p>
                  <a href="tel:+905555555555" className="mt-1 block text-lg font-bold text-slate-900 hover:text-[#384B70] transition">
                    +90 555 555 55 55
                  </a>
                </div>
              </div>

              {/* Mail Kartı */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F3EBDF] text-[#384B70]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">E-posta</h3>
                  <a href="mailto:info@raufdent.com" className="mt-1 block text-base font-medium text-slate-600 hover:text-[#384B70] transition">
                    info@raufdent.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ: Harita (BÜYÜK VE FERAH) */}
          <div className="relative h-full min-h-[450px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200 ring-1 ring-slate-900/5">
            <iframe
              title="Rauf Alkan Diş Kliniği Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.577874524567!2d32.85315631527226!3d39.91666297942661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9bf74f%3A0x259033034e2399c6!2sK%C4%B1z%C4%B1lay%2C%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1629890000000!5m2!1str!2str" // Buraya kendi Google Maps Embed kodunu koymalısın
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition duration-700"
            />
            
            {/* Harita Üzeri Küçük Bilgi Kutusu (Opsiyonel Şıklık) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-2xl border border-slate-100 shadow-lg flex justify-between items-center">
               <div>
                  <p className="text-xs font-bold uppercase text-slate-400">Çalışma Saatleri</p>
                  <p className="text-sm font-semibold text-slate-900">Pzt - Cmt: 09:00 - 20:00</p>
               </div>
               <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
