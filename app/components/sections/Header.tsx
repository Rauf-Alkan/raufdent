// components/sections/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Yorumlar", href: "#testimonials" },
  { label: "Bize Ulaşın", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="flex items-center gap-3 text-xl font-semibold text-[#384B70]"
        >
          <Image
            src="/logo.png"
            alt="Rauf Dent"
            width={40}
            height={40}
            className="h-10 w-10 object-contain opacity-95"
            priority
          />
          <span className="font-heading tracking-tight">Rauf Dent</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#384B70]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex flex-col items-center justify-center gap-1 rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-[#D7C3A3] hover:text-[#384B70] lg:hidden"
          aria-label="Menüyü Aç"
          onClick={toggleMenu}
        >
          <span className="block h-0.5 w-5 rounded bg-current" />
          <span className="block h-0.5 w-5 rounded bg-current" />
          <span className="block h-0.5 w-5 rounded bg-current" />
        </button>
      </div>

      <div
        className={`lg:hidden ${menuOpen ? "max-h-64" : "max-h-0"} overflow-hidden border-t border-slate-100 bg-white transition-all duration-300`}
      >
        <nav className="flex flex-col px-4 py-3 text-base text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-[#F3EBDF] hover:text-[#384B70]"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
