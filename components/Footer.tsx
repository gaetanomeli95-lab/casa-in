import Image from "next/image";
import { brand } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white px-6 lg:px-10 py-16 lg:py-20">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 items-end">
          <div>
            <Image
              src="/casain-logo.png"
              alt={brand.name}
              width={210}
              height={120}
              className="w-40 md:w-48 h-auto object-contain"
            />
            <p className="mt-7 text-sm leading-[1.8] text-white/50 max-w-sm">
              Arredamento e progettazione per costruire ambienti coerenti, funzionali e davvero tuoi.
            </p>
          </div>

          <div className="lg:text-right">
            <div className="font-serif text-[clamp(38px,5vw,76px)] leading-[0.98] tracking-tight">
              La casa che immagini.
              <br />
              <em className="not-italic text-[#ef9da0]">Inizia da qui.</em>
            </div>
            <a
              href="#contatti"
              className="inline-flex items-center gap-4 mt-8 text-[10px] font-extrabold uppercase tracking-[0.16em] border-b border-white/30 pb-2 hover:text-casaRed hover:border-casaRed transition-colors"
            >
              Parliamo del tuo progetto <span>↗</span>
            </a>
          </div>
        </div>

        <div className="h-px bg-white/10 my-12 lg:my-16" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <span className="block text-[8px] font-extrabold tracking-[0.15em] text-[#ff7e82] mb-3">SHOWROOM</span>
            <p className="text-white/60 leading-relaxed">{brand.address}<br />{brand.cap} {brand.city} ({brand.province})</p>
          </div>
          <div>
            <span className="block text-[8px] font-extrabold tracking-[0.15em] text-[#ff7e82] mb-3">TELEFONO</span>
            <a href={`tel:${brand.phone1Href}`} className="block text-white/70 hover:text-white">{brand.phone1}</a>
            <a href={`tel:${brand.phone2Href}`} className="block mt-1 text-white/70 hover:text-white">{brand.phone2}</a>
          </div>
          <div>
            <span className="block text-[8px] font-extrabold tracking-[0.15em] text-[#ff7e82] mb-3">EMAIL</span>
            <a href={`mailto:${brand.email}`} className="text-white/70 hover:text-white break-all">{brand.email}</a>
          </div>
          <div>
            <span className="block text-[8px] font-extrabold tracking-[0.15em] text-[#ff7e82] mb-3">AZIONI</span>
            <a href={brand.whatsappHref} target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-white">WhatsApp ↗</a>
            <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="block mt-1 text-white/70 hover:text-white">Indicazioni ↗</a>
          </div>
        </div>

        <div className="h-px bg-white/10 my-10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[8px] font-bold tracking-[0.14em] text-white/35">
          <span>© 2026 {brand.name.toUpperCase()}</span>
          <span>CARINI · PALERMO · SICILIA</span>
          <span>CONCEPT WEB DESIGN · GAETANO MELI</span>
        </div>
      </div>
    </footer>
  );
}
