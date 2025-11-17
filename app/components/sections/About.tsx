import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-slate-50 py-28 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 md:grid-cols-2 md:gap-24 lg:px-8">
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src="/about.webp"
            alt="Rauf Dent kliniği"
            className="h-full w-full rounded-3xl object-cover shadow-[0_40px_90px_rgba(15,23,42,0.12)]"
            loading="lazy"
          />
        </div>
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">
            Kliniğimize Hoş Geldiniz
          </p>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl tracking-tight text-[#1f2937] md:text-4xl">
            Modern kliniğimizde kişiye özel tedavi planları
            </h2>
            <span className="accent-line" />
          </div>
          <p className="text-lg leading-relaxed text-slate-600">
            Kızılay&apos;da yer alan Rauf Dent, ileri teknoloji cihazlar ve deneyimli ekip ile her hastaya sade, anlaşılır
            ve güven veren bir tedavi deneyimi sunar.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-base text-slate-600">
            <li>Her tedavi öncesi ayrıntılı muayene ve dijital planlama</li>
            <li>Uzman hekimlerle implant, estetik ve ortodonti çözümleri</li>
            <li>Konforlu klinik ortamı ve şeffaf süreç yönetimi</li>
          </ul>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-7 py-3.5 font-semibold text-white transition hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
          >
            Haritada Göster
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
