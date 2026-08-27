"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { steps } from "@/lib/data";

export default function Progettazione() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="progettazione" ref={ref} className="bg-[#ebe6de] py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-14 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[10px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-3 mb-8"
            >
              <span className="text-casaRed">03</span> PROGETTAZIONE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="font-serif text-[clamp(42px,5.2vw,78px)] leading-[0.97] tracking-tight"
            >
              La differenza sta
              <br />
              <em className="not-italic text-stone-500">nel progetto.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-[540px] text-[15px] leading-[1.8] text-stone-600"
            >
              Prima di scegliere finiture e modelli, partiamo da come vuoi vivere lo spazio. Misure, esigenze, stile e budget diventano un progetto concreto, leggibile e realizzabile.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.22 }}
              href="#contatti"
              className="inline-flex items-center gap-4 mt-9 text-[10px] font-extrabold uppercase tracking-[0.16em] border-b border-stone-500 pb-2 hover:text-casaRed hover:border-casaRed transition-colors"
            >
              Prenota un incontro <span>↗</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.28 }}
              className="relative mt-12 h-[340px] md:h-[430px] overflow-hidden"
            >
              <Image
                src="/hero-casain-03.webp"
                alt="Immagine editoriale Casa IN ispirata allo showroom di Carini"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5 bg-white/94 px-5 py-4 max-w-[280px] shadow-[0_10px_35px_rgba(0,0,0,.12)]">
                <span className="text-[8px] font-extrabold tracking-[0.16em] text-casaRed">PROGETTO CASA IN</span>
                <p className="font-serif text-lg leading-snug mt-1">Spazi, materiali e proporzioni pensati per funzionare insieme.</p>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-stone-300">
            {steps.map((step, i) => (
              <motion.article
                key={step.no}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.12 + i * 0.1 }}
                className="group grid grid-cols-[64px_1fr] md:grid-cols-[84px_1fr_auto] gap-5 md:gap-8 py-8 md:py-10 border-b border-stone-300 items-start"
              >
                <span className="text-[10px] text-casaRed font-bold tracking-[0.16em] pt-2">
                  {step.no}
                </span>
                <div>
                  <h3 className="font-serif text-[30px] md:text-[36px] leading-tight mb-3 group-hover:text-casaRed transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] leading-[1.7] text-stone-600 max-w-xl">
                    {step.text}
                  </p>
                </div>
                <span className="hidden md:grid w-10 h-10 border border-stone-400 place-items-center text-sm text-stone-500 group-hover:bg-ink group-hover:text-white group-hover:border-ink transition-colors">
                  {i + 1}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
