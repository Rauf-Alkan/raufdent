import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/ui/WhatsAppButton";

// Font tanımları aynı kalsın
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Tüm ağırlıkları ekledik
});

export const metadata: Metadata = {
  title: "Rauf Dent | Modern Diş Kliniği",
  description:
    "Ankara Kızılay'da estetik diş hekimliği, implant ve gülüş tasarımı hizmetleri sunan premium diş kliniği.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth"> {/* Smooth scroll ekledik */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-white text-slate-900`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}