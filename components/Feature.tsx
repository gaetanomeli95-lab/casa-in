"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function Feature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="grid lg:grid-cols-[1.18fr_0.82fr] min-h-[720px] bg-[#181818] text-white overflow-hidden">
      <div className="relative h-[460px] lg:h-auto overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.75 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-01.png"
            alt="Progetto cucina Casa IN"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
        <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 border border-white/20 bg-black/20 backdrop-blur-sm px-4 py-3 text-[9px] font-bold tracking-[0.16em]">
          DETTAGLI CHE CAMBIANO L&apos;INSIEME
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="relative flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-20 lg:py-24"
      >
        <div className="absolute top-12 right-10 text-[120px] lg:text-[160px] font-serif italic text-white/[0.035] leading-none pointer-events-none select-none">
          IN
        </div>
        <span className="text-[9px] tracking-[0.2em] text-[#ff8a8d] font-extrabold">
          CASA IN / CARINI
        </span>
        <blockquote className="font-serif text-[clamp(38px,4.2vw,68px)] leading-[1.03] tracking-tight mt-8 mb-4 max-w-xl">
          “L&apos;arredo giusto non riempie uno spazio. <em className="not-italic text-[#eeb4b6]">Lo rende tuo.</em>”
        </blockquote>
        <div className="w-16 h-[2px] bg-casaRed my-7" />
        <p className="text-[13px] md:text-[14px] leading-[1.8] text-white/58 max-w-md">
          Il risultato non nasce da un singolo mobile, ma da proporzioni, materiali e scelte che funzionano insieme. È qui che un ambiente smette di essere semplicemente arredato.
        </p>
        <a
          href="#progettazione"
          className="inline-flex items-center gap-4 mt-9 w-fit text-[10px] font-extrabold uppercase tracking-[0.15em] border-b border-white/30 pb-2 hover:text-casaRed hover:border-casaRed transition-colors"
        >
          Scopri il nostro metodo <span>→</span>
        </a>
      </motion.div>
    </section>
  );
}
