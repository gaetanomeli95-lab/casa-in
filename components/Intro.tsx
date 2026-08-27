"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Intro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 py-28 lg:py-36">
      <div className="text-[10px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-3 mb-10">
        <span className="text-casaRed">01</span> CASA IN
      </div>

      <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-24 items-end">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="font-serif text-[clamp(40px,5.5vw,84px)] leading-[0.96] tracking-tight"
        >
          Non vendiamo semplicemente mobili.
          <br />
          <em className="not-italic text-stone-500">Diamo forma alla casa.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="text-[15px] leading-[1.8] text-stone-600"
        >
          <p>
            Ogni progetto parte da una domanda semplice:{" "}
            <strong className="text-ink">come vuoi vivere i tuoi spazi?</strong>{" "}
            Da lì costruiamo una proposta coerente con il tuo gusto, le tue necessità e il tuo budget.
          </p>
          <a
            href="#progettazione"
            className="inline-flex items-center gap-5 mt-7 pb-2 border-b border-stone-500 text-[10px] font-extrabold uppercase tracking-[0.12em] hover:text-casaRed hover:border-casaRed transition-colors"
          >
            Scopri come lavoriamo <span>→</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.95, delay: 0.3 }}
        className="relative mt-20 h-[420px] lg:h-[560px] overflow-hidden bg-ink"
      >
        <Image
          src="/showroom-wide.jpg"
          alt="Showroom Casa IN Arredamenti a Carini"
          fill
          className="object-cover object-[center_48%] [filter:saturate(.88)_contrast(1.03)]"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 max-w-md bg-ink/92 text-white p-6 md:p-7 backdrop-blur-sm">
          <span className="text-[9px] font-extrabold tracking-[0.18em] text-casaRed">
            SHOWROOM REALE
          </span>
          <p className="font-serif text-lg md:text-xl leading-snug mt-2">
            Un luogo dove vedere le composizioni dal vivo e progettare insieme.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
