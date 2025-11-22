"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Ekibimiz", href: "#team" },
  { label: "İletişim", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const searchParams = useSearchParams();
  const clinicName = searchParams.get("name") || "Rauf Dent";

  // Scroll algılayıp gölge eklemek için
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* LOGO */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
             {/* Logo sabit kalır, metin değişir */}
             <Image
              src="/logo.png"
              alt={clinicName}
              width={40}
              height={40}
              className="object-contain transition-transform group-hover:scale-110"
             />
          </div>
          <span className={`font-heading text-xl font-bold tracking-tight ${scrolled ? "text-slate-900" : "text-slate-900"}`}>
            {clinicName} {/* DİNAMİK İSİM */}
          </span>
        </Link>

        {/* DESKTOP MENÜ */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-[#384B70] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#384B70] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* SAĞ BUTON (MOBİLDE GİZLİ) */}
        <div className="hidden lg:block">
          <Link
            href="#fast-appointment"
            className="rounded-full bg-[#384B70] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#384B70]/20 transition hover:bg-[#2E3D63] hover:-translate-y-0.5"
          >
            Randevu Al
          </Link>
        </div>

        {/* MOBİL MENÜ BUTONU */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-slate-700 focus:outline-none"
          aria-label="Menüyü Aç"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 w-full bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBİL MENÜ AÇILIR KISIM */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-hidden lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-[#384B70]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#fast-appointment"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full rounded-xl bg-[#384B70] py-3 text-center font-semibold text-white"
          >
            Hemen Randevu Al
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;