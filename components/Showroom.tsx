"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { brand } from "@/lib/data";

export default function Showroom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showroom" ref={ref} className="grid lg:grid-cols-[1.2fr_0.8fr] min-h-[760px] bg-ink text-white">
      <div className="relative h-[430px] lg:h-auto overflow-hidden">
        <Image
          src="/showroom-wide.jpg"
          alt="Showroom Casa IN Arredamenti"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/70 flex items-center gap-3 mb-8"
        >
          <span className="text-casaRed">05</span> SHOWROOM
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[clamp(40px,5.5vw,82px)] leading-[0.98] tracking-tight text-white"
        >
          Vieni a vederla.
          <br />
          <em className="not-italic text-[#e9b8b8]">Prima di immaginarla.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-[520px] text-[15px] leading-[1.75] text-white/60"
        >
          Ti aspettiamo a {brand.city} per vedere le composizioni, confrontare materiali e iniziare il tuo progetto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 border-t border-white/15"
        >
          <div className="grid grid-cols-[110px_1fr] gap-5 py-5 border-b border-white/15">
            <span className="text-[8px] font-extrabold tracking-[0.15em] text-[#ff7073]">INDIRIZZO</span>
            <strong className="text-sm font-semibold leading-snug">
              {brand.address}
              <br />
              {brand.cap} {brand.city} ({brand.province})
            </strong>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-5 py-5 border-b border-white/15">
            <span className="text-[8px] font-extrabold tracking-[0.15em] text-[#ff7073]">TELEFONO</span>
            <strong className="text-sm font-semibold leading-snug">
              <a href={`tel:${brand.phone1Href}`} className="hover:text-casaRed transition-colors">
                {brand.phone1}
              </a>
              <br />
              <a href={`tel:${brand.phone2Href}`} className="hover:text-casaRed transition-colors">
                {brand.phone2}
              </a>
            </strong>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-5 py-5 border-b border-white/15">
            <span className="text-[8px] font-extrabold tracking-[0.15em] text-[#ff7073]">EMAIL</span>
            <strong className="text-sm font-semibold leading-snug break-words">
              <a href={`mailto:${brand.email}`} className="hover:text-casaRed transition-colors">
                {brand.email}
              </a>
            </strong>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={brand.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 h-14 px-7 bg-casaRed text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-casaRedDark transition-colors"
          >
            WhatsApp <span className="text-base">↗</span>
          </a>
          <a
            href={brand.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 h-14 px-7 border border-white/35 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors"
          >
            Indicazioni
          </a>
        </motion.div>
      </div>
    </section>
  );
}
