"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { brand } from "@/lib/data";

export default function Showroom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showroom" ref={ref} className="bg-ink text-white overflow-hidden">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] min-h-[780px]">
        <div className="relative h-[470px] lg:h-auto overflow-hidden">
          <motion.div
            initial={{ scale: 1.06, opacity: 0.75 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/showroom-wide.jpg"
              alt="Showroom Casa IN Arredamenti a Carini"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/25" />
          <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 bg-black/45 backdrop-blur-sm border border-white/15 px-5 py-4 max-w-[300px]">
            <span className="text-[8px] font-extrabold tracking-[0.16em] text-[#ff8b8e]">SHOWROOM REALE</span>
            <p className="font-serif text-xl leading-snug mt-1">Vieni a vedere materiali, proporzioni e composizioni dal vivo.</p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center px-8 lg:px-14 xl:px-20 py-20 lg:py-24">
          <div className="absolute top-12 right-10 text-[130px] font-serif italic text-white/[0.035] leading-none select-none pointer-events-none">IN</div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/65 flex items-center gap-3 mb-8"
          >
            <span className="text-casaRed">05</span> SHOWROOM
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="font-serif text-[clamp(42px,5.4vw,80px)] leading-[0.97] tracking-tight text-white"
          >
            Vieni a vederla.
            <br />
            <em className="not-italic text-[#eeb4b6]">Prima di sceglierla.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-8 max-w-[540px] text-[15px] leading-[1.8] text-white/58"
          >
            A {brand.city} puoi confrontare finiture, aprire ante, provare proporzioni e parlare del tuo progetto con una persona, non con un catalogo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-10 border-t border-white/15"
          >
            <div className="grid grid-cols-[95px_1fr] md:grid-cols-[110px_1fr] gap-5 py-5 border-b border-white/15">
              <span className="text-[8px] font-extrabold tracking-[0.15em] text-[#ff7e82]">INDIRIZZO</span>
              <strong className="text-sm font-semibold leading-snug">
                {brand.address}<br />{brand.cap} {brand.city} ({brand.province})
              </strong>
            </div>
            <div className="grid grid-cols-[95px_1fr] md:grid-cols-[110px_1fr] gap-5 py-5 border-b border-white/15">
              <span className="text-[8px] font-extrabold tracking-[0.15em] text-[#ff7e82]">TELEFONO</span>
              <strong className="text-sm font-semibold leading-snug">
                <a href={`tel:${brand.phone1Href}`} className="hover:text-casaRed transition-colors">{brand.phone1}</a><br />
                <a href={`tel:${brand.phone2Href}`} className="hover:text-casaRed transition-colors">{brand.phone2}</a>
              </strong>
            </div>
            <div className="grid grid-cols-[95px_1fr] md:grid-cols-[110px_1fr] gap-5 py-5 border-b border-white/15">
              <span className="text-[8px] font-extrabold tracking-[0.15em] text-[#ff7e82]">EMAIL</span>
              <strong className="text-sm font-semibold leading-snug break-all">
                <a href={`mailto:${brand.email}`} className="hover:text-casaRed transition-colors">{brand.email}</a>
              </strong>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 h-14 px-7 bg-casaRed text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-casaRedDark transition-colors"
            >
              Scrivici su WhatsApp <span className="text-base">↗</span>
            </a>
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 h-14 px-7 border border-white/30 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors"
            >
              Indicazioni
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
