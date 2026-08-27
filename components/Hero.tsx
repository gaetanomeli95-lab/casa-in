"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides, brand } from "@/lib/data";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % heroSlides.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink text-white" aria-label={brand.name}>
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[index].src}
              alt={heroSlides[index].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,4,4,.85) 0%, rgba(4,4,4,.55) 34%, rgba(4,4,4,.1) 72%), linear-gradient(0deg, rgba(0,0,0,.55), transparent 44%)",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1340px] mx-auto px-6 lg:px-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-[10px] font-extrabold tracking-[0.22em] mb-6"
        >
          <span className="w-2 h-2 bg-casaRed" />
          {brand.city.toUpperCase()} · {brand.province.toUpperCase()}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-[clamp(48px,7.3vw,112px)] leading-[0.92] tracking-tight max-w-[930px]"
        >
          La tua casa.
          <br />
          <em className="not-italic text-[#f4d8d7]">Progettata intorno a te.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-[620px] text-base lg:text-lg leading-relaxed text-white/75"
        >
          Cucine, living, camere e soluzioni d&apos;arredo progettate insieme a te, nel nostro showroom di {brand.city}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#ambienti"
            className="inline-flex items-center justify-center gap-3 h-14 px-7 bg-casaRed text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-casaRedDark transition-colors"
          >
            Scopri le collezioni <span className="text-base">↗</span>
          </a>
          <a
            href="#showroom"
            className="inline-flex items-center justify-center gap-3 h-14 px-7 bg-white/5 border border-white/40 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors"
          >
            Prenota la tua progettazione
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-6 lg:left-10 z-10 flex items-end gap-4 text-white">
        <span className="font-serif text-2xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="w-12 h-px bg-white/40 mb-3" />
        <span className="text-white/60 text-sm mb-1">
          {String(heroSlides.length).padStart(2, "0")}
        </span>
      </div>

      <button
        onClick={next}
        aria-label="Immagine successiva"
        className="absolute bottom-8 right-6 lg:right-10 z-10 w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-ink transition-colors"
      >
        →
      </button>
    </section>
  );
}
