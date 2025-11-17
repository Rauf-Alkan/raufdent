const Esthetic = () => {
  return (
    <section
      id="esthetic"
      className="bg-gradient-to-b from-white to-slate-50 py-28 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 md:grid-cols-2 md:gap-24 lg:px-8">
        <div className="order-2 space-y-6 md:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">
            Estetik ve Fonksiyonel Diş Hekimliği
          </p>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
              Gülüşünüz İçin Bilim ve Sanatı Bir Araya Getiriyoruz
            </h2>
            <span className="accent-line" />
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Kliniğimizde her hastanın gülüşünü kişiye özel olarak planlıyor, estetik beklentileri ve fonksiyonel
            ihtiyaçları bir araya getirerek kapsamlı bir tedavi yaklaşımı sunuyoruz. Dijital görüntüleme
            sistemleri, modern ölçü teknikleri ve ileri tedavi yöntemleriyle süreçleri daha hızlı ve daha konforlu
            hale getiriyoruz.
          </p>
          <div>
            <p className="text-xl font-semibold text-[#384B70]">Dr. Rauf Alkan</p>
            <p className="text-slate-500">Diş Hekimi &amp; Klinik Sorumlusu</p>
          </div>
        </div>
        <div className="order-1 md:order-2 animate-fade-up">
          <img
            src="/esthetic.webp"
            alt="Estetik diş hekimliği"
            className="h-full w-full rounded-3xl object-cover shadow-[0_35px_90px_rgba(15,23,42,0.15)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Esthetic;
