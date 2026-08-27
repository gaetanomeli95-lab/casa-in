"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { steps } from "@/lib/data";

export default function Progettazione() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="progettazione" ref={ref} className="max-w-[1340px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 lg:gap-24 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-3 mb-8"
          >
            <span className="text-casaRed">03</span> PROGETTAZIONE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[clamp(40px,5.5vw,82px)] leading-[0.98] tracking-tight"
          >
            Prima di scegliere un mobile,
            <br />
            <em className="not-italic text-stone-500">progettiamo un modo di viverlo.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-[560px] text-[15px] leading-[1.8] text-stone-600"
          >
            Ti accompagniamo dalla prima idea alla scelta delle composizioni, con un percorso semplice e concreto.
          </motion.p>
        </div>

        <div className="border-t border-stone-300">
          {steps.map((step, i) => (
            <motion.article
              key={step.no}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className="grid grid-cols-[72px_1fr] gap-6 py-8 border-b border-stone-300"
            >
              <span className="text-[10px] text-casaRed font-bold tracking-[0.12em] pt-1">
                {step.no}
              </span>
              <div>
                <h3 className="font-serif text-[28px] md:text-[30px] leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-stone-600">
                  {step.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
