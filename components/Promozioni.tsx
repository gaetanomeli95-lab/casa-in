"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { promotions, brand } from "@/lib/data";

export default function Promozioni() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="promozioni" ref={ref} className="bg-[#ebe6de] py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="text-[10px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-3 mb-10"
        >
          <span className="text-casaRed">04</span> PROMOZIONI
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-end pb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85 }}
            className="font-serif text-[clamp(40px,5.4vw,82px)] leading-[0.96] tracking-tight"
          >
            Le occasioni
            <br />
            <em className="not-italic text-stone-500">dello showroom.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="text-[15px] leading-[1.8] text-stone-600 max-w-md"
          >
            Una sezione dedicata alle composizioni, alle novità e alle offerte attive. Aggiornata costantemente con prodotti, prezzi e disponibilità reali.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-2 lg:gap-3">
          {promotions.map((promo, i) => (
            <motion.article
              key={promo.id}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: i * 0.1 }}
              className="relative group overflow-hidden bg-white cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                <Image
                  src={promo.image}
                  alt={promo.name}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute top-5 left-5 bg-casaRed px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white">
                {promo.badge}
              </div>

              <div className="p-6 md:p-7">
                <span className="text-[9px] font-extrabold tracking-[0.16em] text-stone-400 uppercase">
                  {promo.category}
                </span>
                <h3 className="font-serif text-[28px] md:text-[32px] leading-tight mt-2 mb-4">
                  {promo.name}
                </h3>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-stone-500 group-hover:text-casaRed transition-colors">
                    {promo.cta} <span className="ml-2">↗</span>
                  </span>
                  <span className="text-[10px] font-bold text-stone-400">Clicca per ingrandire</span>
                </div>
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="relative bg-ink text-white p-8 md:p-12 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <span className="text-[9px] font-extrabold tracking-[0.18em] text-casaRed">DA VEDERE DAL VIVO</span>
              <p className="font-serif text-[28px] md:text-[34px] leading-[1.1] mt-4">
                Le offerte migliori si vedono di persona.
              </p>
              <p className="text-sm leading-[1.7] text-white/55 mt-5 max-w-sm">
                Vieni nello showroom a {brand.city} per scoprire le composizioni in promozione, i materiali disponibili e le condizioni riservate.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-casaRed py-3.5 px-6 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white hover:bg-casaRedDark transition-colors"
              >
                Chiedi le offerte su WhatsApp <span>↗</span>
              </a>
              <a
                href={`tel:${brand.phone1Href}`}
                className="inline-flex items-center justify-center gap-3 border border-white/25 py-3.5 px-6 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-ink transition-colors"
              >
                Chiama lo showroom
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative max-w-[900px] w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Chiudi"
                className="absolute -top-12 right-0 text-white/70 hover:text-white text-[10px] font-extrabold uppercase tracking-[0.15em] flex items-center gap-2"
              >
                Chiudi <span className="text-lg">✕</span>
              </button>
              <Image
                src="/promo-original.jpg"
                alt="Locandina promozionale Casa IN Arredamenti"
                width={900}
                height={1200}
                className="w-full h-auto object-contain"
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
