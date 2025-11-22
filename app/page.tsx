import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FastAppointment from "@/components/sections/FastAppointment";
import Esthetic from "@/components/sections/Esthetic";
import FourFeatures from "@/components/sections/FourFeatures";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// BU SATIR HATAYI ÇÖZER:
// Sayfanın statik değil, dinamik (istek anında çalışan) olduğunu belirtir.
export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FourFeatures />
        <About />
        <Services />
        <Esthetic />
        <Team />
        <Testimonials />
        <FastAppointment />
        <Contact />
        <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200" />
        <Footer />
      </main>
    </>
  );
};

export default Home;