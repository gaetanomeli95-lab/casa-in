"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { brand, heroSlides } from "@/lib/data";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((current) => (current + 1) % heroSlides.length), []);

  useEffect(() => {
    const timer = window.setInterval(next, 6500);
    return () => window.clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[720px] h-[100svh] w-full overflow-hidden bg-ink text-white" aria-label={brand.name}>
      <div className="absolute inset-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={heroSlides[index].src}
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: [0.22, 0.61, 0.36, 1] }}
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

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.88)_0%,rgba(5,5,5,.63)_32%,rgba(5,5,5,.18)_67%,rgba(5,5,5,.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.68)_0%,transparent_38%,rgba(0,0,0,.12)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[7px] bg-casaRed" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1460px] flex-col justify-center px-6 pb-28 pt-32 sm:px-8 lg:px-10 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.23em] text-white/78"
        >
          <span className="h-2 w-2 bg-casaRed" />
          Showroom · {brand.city}, {brand.province}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="max-w-[1030px] font-serif text-[clamp(52px,7vw,116px)] leading-[0.88] tracking-[-0.045em]"
        >
          La tua casa.
          <br />
          <span className="text-white/72">Progettata</span>{" "}
          <em className="not-italic text-[#f3b7b8]">intorno a te.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mt-9 grid max-w-[790px] gap-7 border-l border-white/22 pl-5 md:grid-cols-[1fr_auto] md:items-end md:gap-10 md:pl-7"
        >
          <p className="max-w-[610px] text-[15px] leading-[1.75] text-white/70 lg:text-[17px]">
            Cucine, camere e living pensati per creare ambienti coerenti, belli da vedere e facili da vivere. Dal primo disegno alla scelta finale, insieme.
          </p>
          <span className="hidden text-right text-[8px] font-extrabold uppercase leading-[1.8] tracking-[0.2em] text-white/38 md:block">
            Arredo
            <br />
            Progetto
            <br />
            Casa
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#ambienti"
            className="inline-flex h-14 min-w-[210px] items-center justify-between bg-casaRed px-6 text-[9px] font-extrabold uppercase tracking-[0.17em] text-white transition-colors hover:bg-casaRedDark"
          >
            Scopri gli ambienti <span className="text-base">↗</span>
          </a>
          <a
            href="#progettazione"
            className="inline-flex h-14 min-w-[226px] items-center justify-between border border-white/32 bg-black/10 px-6 text-[9px] font-extrabold uppercase tracking-[0.17em] text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-ink"
          >
            Come progettiamo <span>→</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-6 z-20 flex items-center gap-3 sm:left-8 lg:left-10 xl:left-14">
        {heroSlides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(slideIndex)}
            aria-label={`Vai all'immagine ${slideIndex + 1}`}
            aria-current={slideIndex === index}
            className="group flex items-center gap-2"
          >
            <span className={`h-px transition-all duration-300 ${slideIndex === index ? "w-10 bg-white" : "w-5 bg-white/35 group-hover:bg-white/70"}`} />
            <span className={`text-[9px] font-bold tabular-nums ${slideIndex === index ? "text-white" : "text-white/38"}`}>
              0{slideIndex + 1}
            </span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-4 sm:flex sm:right-8 lg:right-10 xl:right-14">
        <span className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-white/40">Casa IN / Carini</span>
        <button
          type="button"
          onClick={next}
          aria-label="Immagine successiva"
          className="grid h-12 w-12 place-items-center border border-white/25 text-lg text-white transition-all hover:border-white hover:bg-white hover:text-ink"
        >
          →
        </button>
      </div>
    </section>
  );
}
