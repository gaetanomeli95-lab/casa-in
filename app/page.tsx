import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Ambienti from "@/components/Ambienti";
import Progettazione from "@/components/Progettazione";
import Feature from "@/components/Feature";
import Promozioni from "@/components/Promozioni";
import Showroom from "@/components/Showroom";
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Ambienti />
        <Progettazione />
        <Feature />
        <Promozioni />
        <Showroom />
        <Contatti />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
