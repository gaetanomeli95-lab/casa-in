"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { promo } from "@/lib/data";

export default function Promozioni() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [modal, setModal] = useState(false);

  return (
    <section id="promozioni" ref={ref} className="max-w-[1340px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
      <div className="grid lg:grid-cols-[1fr_430px] gap-16 lg:gap-24 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-3 mb-8"
          >
            <span className="text-casaRed">04</span> {promo.title}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[clamp(40px,5.5vw,82px)] leading-[0.98] tracking-tight"
          >
            {promo.headline}
            <br />
            <em className="not-italic text-stone-500">{promo.subline}</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-[670px] text-[15px] leading-[1.8] text-stone-600"
          >
            {promo.description}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            href="#contatti"
            className="mt-10 inline-flex items-center gap-3 h-14 px-7 bg-ink text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-casaRed transition-colors"
          >
            {promo.cta} <span className="text-base">↗</span>
          </motion.a>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          onClick={() => setModal(true)}
          className="relative group w-full max-w-md mx-auto lg:mx-0 rotate-1 hover:rotate-0 transition-transform duration-300"
          aria-label="Apri locandina promozionale"
        >
          <Image
            src={promo.image}
            alt="Locandina promozionale Casa IN Arredamenti"
            width={430}
            height={600}
            className="w-full h-auto shadow-2xl"
          />
          <span className="absolute left-4 right-4 bottom-4 bg-ink/90 text-white px-5 py-4 flex justify-between text-[9px] font-extrabold uppercase tracking-[0.14em]">
            Apri locandina <b>↗</b>
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(false)}
            className="fixed inset-0 z-[200] bg-black/90 grid place-items-center p-6"
            aria-hidden={!modal}
          >
            <button
              onClick={() => setModal(false)}
              aria-label="Chiudi"
              className="absolute top-6 right-8 text-white text-4xl"
            >
              ×
            </button>
            <Image
              src={promo.image}
              alt="Locandina promozionale Casa IN Arredamenti"
              width={680}
              height={960}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
