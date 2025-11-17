const Footer = () => {
  return (
    <footer className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <img
              src="/logo.png"
              alt="Rauf Alkan Diş Kliniği"
              className="mb-4 h-9 w-auto opacity-95"
            />
            <p className="max-w-md text-sm leading-relaxed text-gray-600">
              Dr. Rauf Alkan Diş Kliniği, modern diş hekimliği uygulamalarını ve hasta memnuniyetini ön planda
              tutarak, size en kaliteli ağız ve diş sağlığı hizmetlerini sunar.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-base font-semibold text-gray-900">Google Reviews</h3>
            <p className="text-sm text-gray-600">⭐ 4.9 / 5 ortalama (180+ yorum)</p>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold text-gray-900">Bize Ulaşın</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3 transition hover:text-[#384B70]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  className="mt-0.5 h-4 w-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 8.5c0 4.418-7 9-7 9s-7-4.582-7-9a7 7 0 1 1 14 0Z"
                  />
                </svg>
                Atatürk Bulvarı No:123 Kızılay / Ankara
              </li>
              <li className="flex items-center gap-3 transition hover:text-[#384B70]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2.5 5.5 7 9.25a4 4 0 0 0 6 0l4.5-3.75"
                  />
                  <rect
                    width="15"
                    height="11"
                    x="2.5"
                    y="4.5"
                    rx="2"
                    strokeWidth="1.5"
                  />
                </svg>
                info@raufalkandis.com
              </li>
              <li className="flex items-center gap-3 transition hover:text-[#384B70]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5 6h2l1.5 7h4L15 6h2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.5 10h3"
                  />
                </svg>
                <a
                  href="tel:+905555555555"
                  className="transition hover:text-[#384B70]"
                >
                  +90 555 555 55 55
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2025 Rauf Alkan Diş Kliniği — Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
