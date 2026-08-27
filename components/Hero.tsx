"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { brand, heroSlides } from "@/lib/data";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((c) => (c + 1) % heroSlides.length), []);

  useEffect(() => {
    const t = window.setInterval(next, 7000);
    return () => window.clearInterval(t);
  }, [next]);

  return (
    <section
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink text-white"
      aria-label={brand.name}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={heroSlides[index].src}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[index].src}
              alt={heroSlides[index].alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,4,4,.82)_0%,rgba(4,4,4,.52)_32%,rgba(4,4,4,.12)_66%,rgba(4,4,4,.02)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.5)_0%,transparent_38%,rgba(0,0,0,.08)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[4px] bg-casaRed" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 pb-24 pt-28 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.24em] text-white/80"
        >
          <span className="h-2 w-2 bg-casaRed" />
          Showroom · {brand.city}, {brand.province}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="max-w-[1000px] font-serif text-[clamp(48px,7.2vw,118px)] leading-[0.86] tracking-[-0.048em] [text-shadow:0_4px_30px_rgba(0,0,0,.32)]"
        >
          La tua casa.
          <br />
          <em className="not-italic text-[#f3b7b8]">Progettata intorno a te.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28 }}
          className="mt-9 max-w-[580px] text-[15px] leading-[1.75] text-white/78 [text-shadow:0_2px_16px_rgba(0,0,0,.3)] lg:text-[17px]"
        >
          Cucine, living, camere e soluzioni d&rsquo;arredo progettate insieme a te, nel nostro showroom di {brand.city}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#ambienti"
            className="inline-flex h-14 items-center justify-center gap-4 bg-casaRed px-8 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white transition-all hover:bg-casaRedDark hover:gap-5"
          >
            Scopri le collezioni <span className="text-base">↗</span>
          </a>
          <a
            href="#contatti"
            className="inline-flex h-14 items-center justify-center gap-4 border border-white/35 bg-white/[0.06] px-8 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-[3px] transition-all hover:border-white hover:bg-white hover:text-ink"
          >
            Prenota la tua progettazione
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-6 z-20 flex items-center gap-3 sm:left-8 lg:left-12 xl:left-16">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Vai all'immagine ${i + 1}`}
            aria-current={i === index}
            className="group flex items-center gap-2"
          >
            <span
              className={`h-px transition-all duration-500 ${
                i === index ? "w-12 bg-white" : "w-6 bg-white/35 group-hover:bg-white/70"
              }`}
            />
            <span
              className={`text-[9px] font-bold tabular-nums transition-colors ${
                i === index ? "text-white" : "text-white/40"
              }`}
            >
              0{i + 1}
            </span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-7 right-6 z-20 hidden items-center gap-4 sm:flex sm:right-8 lg:right-12 xl:right-16">
        <span className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-white/45">
          Casa IN · Carini
        </span>
        <button
          type="button"
          onClick={next}
          aria-label="Immagine successiva"
          className="grid h-11 w-11 place-items-center border border-white/28 text-base text-white transition-all hover:border-white hover:bg-white hover:text-ink"
        >
          →
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 lg:block"
      >
        <span className="text-[8px] font-extrabold uppercase tracking-[0.22em] text-white/30">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
