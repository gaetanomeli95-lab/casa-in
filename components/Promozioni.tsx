"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { promo, brand } from "@/lib/data";

export default function Promozioni() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modal]);

  const whatsappOffer = `${brand.whatsappHref}?text=${encodeURIComponent(
    "Ciao Casa IN, vorrei ricevere informazioni sulle offerte disponibili in showroom."
  )}`;

  return (
    <section id="promozioni" ref={ref} className="bg-paper py-28 lg:py-36">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_0.82fr] gap-16 lg:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-[10px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-3 mb-8"
            >
              <span className="text-casaRed">04</span> {promo.title}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="font-serif text-[clamp(42px,5.5vw,82px)] leading-[0.97] tracking-tight"
            >
              {promo.headline}
              <br />
              <em className="not-italic text-stone-500">{promo.subline}</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.16 }}
              className="mt-8 max-w-[660px] text-[15px] leading-[1.8] text-stone-600"
            >
              {promo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={whatsappOffer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 h-14 px-7 bg-ink text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-casaRed transition-colors"
              >
                {promo.cta} <span className="text-base">↗</span>
              </a>
              <button
                type="button"
                onClick={() => setModal(true)}
                className="inline-flex items-center justify-center gap-3 h-14 px-7 border border-stone-400 text-[10px] font-extrabold uppercase tracking-widest hover:border-ink transition-colors"
              >
                Guarda la promo attuale
              </button>
            </motion.div>

            <div className="mt-12 grid sm:grid-cols-3 gap-0 border-t border-stone-300 text-stone-600">
              {["Composizioni", "Novità", "Occasioni showroom"].map((item, i) => (
                <div key={item} className="py-5 sm:pr-5 border-b sm:border-b-0 sm:border-r last:border-r-0 border-stone-300">
                  <span className="block text-[9px] text-casaRed font-extrabold tracking-[0.15em] mb-2">0{i + 1}</span>
                  <span className="text-sm font-semibold text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 38 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2 }}
            onClick={() => setModal(true)}
            className="relative group w-full max-w-[520px] mx-auto lg:mr-0 text-left"
            aria-label="Apri locandina promozionale"
          >
            <div className="absolute -inset-4 border border-stone-300 translate-x-4 translate-y-4 pointer-events-none" />
            <Image
              src={promo.image}
              alt="Locandina promozionale Casa IN Arredamenti"
              width={520}
              height={720}
              className="relative w-full h-auto shadow-xl transition-transform duration-500 group-hover:-translate-y-1"
            />
            <span className="absolute left-4 right-4 bottom-4 bg-ink/92 text-white px-5 py-4 flex justify-between text-[9px] font-extrabold uppercase tracking-[0.14em]">
              Apri locandina <b>↗</b>
            </span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/92 grid place-items-center p-5 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Locandina promozionale Casa IN"
            onMouseDown={(e) => {
              if (e.currentTarget === e.target) setModal(false);
            }}
          >
            <button
              type="button"
              onClick={() => setModal(false)}
              aria-label="Chiudi locandina"
              className="absolute top-5 right-5 md:top-7 md:right-8 w-11 h-11 border border-white/25 text-white text-2xl grid place-items-center hover:bg-white hover:text-ink transition-colors"
            >
              ×
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-[720px] max-h-[90vh]"
            >
              <Image
                src={promo.image}
                alt="Locandina promozionale Casa IN Arredamenti"
                width={720}
                height={1000}
                className="max-w-full max-h-[88vh] w-auto h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
