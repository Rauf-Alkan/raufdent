"use client";

import { useRef, useState, type TouchEvent } from "react";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    comment:
      "İmplant tedavisi için çok endişeliydim ama Dr. Rauf Bey süreci o kadar profesyonel yönetti ki hiç ağrı hissetmedim. Sonuçtan çok memnunum.",
    role: "İmplant Tedavisi",
    initials: "AY",
  },
  {
    name: "Zeynep Demir",
    comment:
      "Kanal tedavisi korkumu yendiğim yer. Tüm ekip çok ilgili, klinik tertemiz. Kızılay'da böyle modern bir yer olması harika.",
    role: "Kanal Tedavisi",
    initials: "ZD",
  },
  {
    name: "Murat Can",
    comment:
      "Çocuğumun diş hekimi korkusu burada tamamen sona erdi. Pedodonti uzmanı harikaydı, ilgileri için teşekkürler.",
    role: "Çocuk Diş Hekimliği",
    initials: "MC",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (deltaX > threshold) {
      handleNext();
    } else if (deltaX < -threshold) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="testimonials" className="bg-[#FAFAFA] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#384B70]">
            Hasta Deneyimleri
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mutlu Gülüşler, Mutlu Hastalar
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Kliniğimize güvenen yüzlerce hastamızın deneyimlerini keşfedin. Modern yaklaşımlarımızla her ziyarette konfor ve güven sunuyoruz.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="block sm:hidden">
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100">
              <div className="mb-6">
                <svg
                  className="h-10 w-10 text-[#D7C3A3] opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>

              <p className="mb-8 text-base leading-relaxed text-slate-600 italic">
                &quot;{testimonials[currentIndex].comment}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-[#384B70] font-bold text-lg">
                  {testimonials[currentIndex].initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#D7C3A3]">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-x-0.5 hover:shadow-md"
                aria-label="Önceki yorum"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2 w-2 rounded-full transition ${
                      idx === currentIndex ? "bg-[#384B70]" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:translate-x-0.5 hover:shadow-md"
                aria-label="Sonraki yorum"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop/grid */}
        <div className="hidden sm:grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(56,75,112,0.15)]"
            >
              {/* Tırnak İkonu */}
              <div className="mb-6">
                 <svg className="h-10 w-10 text-[#D7C3A3] opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
              </div>

              <p className="mb-8 text-base leading-relaxed text-slate-600 italic">
                &quot;{testimonial.comment}&quot;
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EBDF] text-[#384B70] font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#D7C3A3]">{testimonial.role}</p>
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
