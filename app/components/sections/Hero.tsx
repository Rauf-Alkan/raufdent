import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-white py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#384B70]">
            Rauf Dent · Güvenilir Diş Kliniği
          </p>
          <h1 className="font-heading text-3xl tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
            Ankara Kızılay&apos;da modern, konforlu diş hekimliği
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
            Uzman ekibimiz gülüşünüzü sağlık, estetik ve konfor dengesiyle yeniden tasarlar; tüm süreci şeffaf, sakin ve
            güven veren adımlarla yönetir.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <Link
              href="#fast-appointment"
              className="rounded-full border border-[#384B70] bg-[#384B70] px-8 py-3.5 text-base font-semibold text-white shadow-[0_20px_45px_rgba(56,75,112,0.25)] transition-all duration-300 hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
            >
              Randevu Al
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-[#D7C3A3] px-8 py-3.5 text-base font-semibold text-[#384B70] transition-all duration-300 hover:bg-[#F8F4EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
            >
              Bize Ulaşın
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-[#D7C3A3]"
              >
                <path
                  fillRule="evenodd"
                  d="M9.693 2.54a.75.75 0 0 1 .614 0l6.5 3A.75.75 0 0 1 17 6.21v3.79c0 4.93-2.956 7.833-7.195 9.38a.75.75 0 0 1-.61 0C4.956 17.833 2 14.93 2 10V6.21a.75.75 0 0 1 .193-.67zM9 15v1.433c-3.156-1.232-5-3.493-5-6.894V6.789l5 2.308zm2 1.433V15h5v-5.461c0 3.401-1.844 5.662-5 6.894M16 10V6.789L11 4.48v4.617z"
                  clipRule="evenodd"
                />
              </svg>
              Kızılay / Ankara · Hafta içi 09:00–20:00
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 text-slate-600">
              ⭐ 4.9 / 5 · 180+ yorum
            </span>
          </div>
        </div>

        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10" />
          <img
            src="/hero.webp"
            alt="Modern diş kliniği"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
