const whatsappUrl = "https://wa.me/905455555050?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white pb-24 pt-24 md:pb-36 md:pt-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="flex flex-col">
          <div className="mb-10 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#384B70]">İletişim</p>
            <div className="space-y-4">
              <h2 className="font-heading text-3xl tracking-tight text-slate-900">Kızılay&apos;daki kliniğimizi ziyaret edin</h2>
              <span className="accent-line" />
            </div>
            <p className="text-base text-slate-600">
              Telefon, WhatsApp veya konumumuz üzerinden bize kolayca ulaşabilirsiniz. Hafta içi 09:00–20:00 arası hızlı
              dönüş yapıyoruz.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 inline-flex items-center gap-2 text-lg font-medium tracking-tight text-slate-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.539 2.258a.75.75 0 0 0-1.078 0c-.732.758-1.889 1.79-3.156 2.608C4.99 5.67 3.618 6.25 2.25 6.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 .75.75c1.368 0 2.74.58 4.055 1.384 1.267.819 2.424 1.85 3.156 2.608a.75.75 0 0 0 1.078 0c.732-.758 1.889-1.79 3.156-2.608 1.315-.805 2.687-1.384 4.055-1.384a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75c-1.368 0-2.74-.58-4.055-1.384-1.267-.819-2.424-1.85-3.156-2.608M10 4.18c.694.625 1.651 1.38 2.676 2.032.947.609 1.984 1.096 3.074 1.35v5.876a9.87 9.87 0 0 0-3.074 1.35A17.05 17.05 0 0 0 10 16.82a17.05 17.05 0 0 0-2.676-2.032A9.87 9.87 0 0 0 4.25 13.44V7.562c1.09-.255 2.127-.741 3.074-1.35A17.05 17.05 0 0 0 10 4.18"
                    clipRule="evenodd"
                  />
                </svg>
                Kızılay&apos;daki Kliniğimiz
              </h3>
              <p className="whitespace-pre-line text-slate-600">
                Atatürk Bulvarı, No: 123, Kat: 4, Daire: 10{"\n"}Kızılay, Çankaya/Ankara, 06420
              </p>
            </div>

            <div className="grid gap-6 text-sm text-slate-600 sm:grid-cols-2">
              <div>
                <h3 className="mb-1 text-base font-semibold text-slate-900">Telefon</h3>
                <p className="whitespace-pre-line">
                  +90 555 555 55 55{"\n"}+90 850 850 00 00
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold text-slate-900">Email</h3>
                <p className="whitespace-pre-line">
                  info@raufalkandis.com{"\n"}randevu@raufalkandis.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full rounded-3xl shadow-[0_30px_70px_rgba(15,23,42,0.12)]">
            <iframe
              title="Rauf Alkan Diş Kliniği Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.452211571933!2d32.852980676336005!3d39.920915483507386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f836b4cd7b7%3A0xbc8a761c0a0ce873!2sAtat%C3%BCrk%20Bulvar%C4%B1%2C%20K%C4%B1z%C4%B1lay%2C%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1714944912345!5m2!1str!2str"
              width="100%"
              height="320"
              className="h-64 w-full rounded-3xl md:h-80 lg:h-96"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="self-stretch rounded-[32px] border border-slate-100 bg-white/95 p-8 shadow-[0_45px_110px_rgba(15,23,42,0.12)] md:mt-10">
          <h3 className="font-heading text-3xl tracking-tight text-slate-900">
            Randevu Alın <br />
            Uzman ekibimiz dakikalar içinde size dönüş yapar.
          </h3>
          <p className="mt-3 text-base text-slate-600">
            Talebinizi ilettikten sonra ihtiyaçlarınıza göre sizi arar ve en uygun zamanı birlikte planlarız.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
            <span className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2">
              Hafta içi 09:00–20:00
            </span>
            <span className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2">
              Ortalama dönüş süresi: 30 dk
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#fast-appointment"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#384B70] bg-[#384B70] px-6 py-3 text-sm font-semibold text-white transition hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
            >
              Randevu Talep Formunu Aç
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#D7C3A3] px-6 py-3 text-sm font-semibold text-[#384B70] transition hover:bg-[#F8F4EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7C3A3]"
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
