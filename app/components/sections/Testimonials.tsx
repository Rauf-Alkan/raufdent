const testimonials = [
  {
    name: "Ahmet Yılmaz",
    comment:
      "İmplant tedavisi düşündüğümden çok daha konforlu geçti. Dr. Rauf Bey ve ekibine ilgileri için çok teşekkür ederim.",
    role: "İmplant Tedavisi",
    initials: "AY",
  },
  {
    name: "Zeynep Demir",
    comment:
      "Kanal tedavisi sırasında hiçbir ağrı hissetmedim. Tüm ekip çok ilgili ve güler yüzlüydü.",
    role: "Kanal Tedavisi",
    initials: "ZD",
  },
  {
    name: "Murat Can",
    comment:
      "Çocuğumun diş hekimi korkusu burada tamamen sona erdi. Pedodonti uzmanı harikaydı.",
    role: "Çocuk Diş Hekimliği",
    initials: "MC",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-white to-slate-50 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">
            Hasta Yorumları
          </p>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl tracking-tight text-slate-900 md:text-4xl">
            Hastalarımızın Gülüşlerine Değer Katıyoruz
            </h2>
            <div className="mx-auto accent-line" />
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600">
            Kliniğimize güvenen yüzlerce hastamızın deneyimlerini keşfedin. Modern yaklaşımlarımız ve nazik
            iletişimimizle her ziyarette konfor ve güven sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="flex transform flex-col rounded-2xl border border-slate-100 bg-white/80 p-6 text-[15px] shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] md:p-8 animate-fade-up"
              style={{ animationDelay: `${0.12 + index * 0.05}s` }}
            >
              <div className="mb-6 text-4xl text-[#D7C3A3] font-heading">“</div>
              <p className="mb-6 leading-relaxed text-slate-600">{testimonial.comment}</p>
              <div className="mt-auto flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-sm font-semibold uppercase text-[#384B70]">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
