import Image from "next/image";
import { brand } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white px-6 lg:px-10 py-16 lg:py-20">
      <div className="max-w-[1340px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <Image
            src="/casain-logo.png"
            alt={brand.name}
            width={190}
            height={110}
            className="w-40 h-auto object-contain"
          />
          <div className="font-serif text-[clamp(36px,4.8vw,72px)] leading-[0.98] text-right lg:text-right text-left">
            La casa che immagini.
            <br />
            <em className="not-italic text-[#ef8f91]">Casa IN.</em>
          </div>
        </div>

        <div className="h-px bg-white/10 my-12 lg:my-16" />

        <div className="flex flex-col lg:flex-row justify-between gap-4 text-[8px] font-bold tracking-[0.14em] text-white/40">
          <span>© 2026 {brand.name.toUpperCase()}</span>
          <span>
            {brand.city.toUpperCase()} · {brand.province.toUpperCase()}
          </span>
          <span>Concept web design · Gaetano Meli</span>
        </div>
      </div>
    </footer>
  );
}
