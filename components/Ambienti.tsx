"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { rooms } from "@/lib/data";

export default function Ambienti() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ambienti" ref={ref} className="bg-ink text-white py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/65 flex items-center gap-3 mb-8"
        >
          <span className="text-casaRed">02</span> AMBIENTI
        </motion.div>

        <div className="grid lg:grid-cols-[1.25fr_0.55fr] gap-10 lg:gap-24 items-end pb-16 lg:pb-20">
          <h2 className="font-serif text-[clamp(44px,5.8vw,86px)] leading-[0.95] tracking-tight text-white">
            Ogni stanza ha
            <br />
            <em className="not-italic text-[#efb0b2]">il suo carattere.</em>
          </h2>
          <p className="text-sm leading-[1.8] text-white/55 max-w-md">
            Cucina, zona notte, living e complementi: non una somma di mobili, ma un progetto che tiene insieme tutta la casa.
          </p>
        </div>
      </div>

      <div className="px-2 lg:px-3">
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(330px,auto)] gap-2 lg:gap-3">
          {rooms.map((room, i) => {
            const span = room.large
              ? "md:col-span-7 md:row-span-2 min-h-[620px]"
              : room.wide
                ? "md:col-span-12 min-h-[420px]"
                : "md:col-span-5 min-h-[390px]";

            return (
              <motion.a
                key={room.id}
                href="#contatti"
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className={`relative group overflow-hidden ${span}`}
                aria-label={`${room.title} — richiedi informazioni`}
              >
                {room.image ? (
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.05]"
                    sizes={room.wide ? "100vw" : "(max-width: 768px) 100vw, 58vw"}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#151515]" />
                )}

                <div className={`absolute inset-0 ${room.dark ? "bg-[#151515]" : "bg-gradient-to-t from-black/85 via-black/15 to-black/5"}`} />

                {room.dark && (
                  <div className="absolute inset-0 grid place-items-center overflow-hidden">
                    <span className="font-serif italic text-[180px] md:text-[250px] text-casaRed leading-none tracking-tighter opacity-95 transition-transform duration-700 group-hover:scale-105">
                      IN
                    </span>
                  </div>
                )}

                <div className="absolute inset-5 md:inset-7 border border-white/10 pointer-events-none" />
                <span className="absolute top-6 right-6 md:top-8 md:right-8 text-[10px] font-bold tracking-[0.15em] text-white/65">
                  {room.no}
                </span>

                <div className="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 md:bottom-8 z-10">
                  <span className="text-[9px] font-extrabold tracking-[0.17em] text-[#ff8f92]">
                    {room.kicker}
                  </span>
                  <div className="flex items-end justify-between gap-4 mt-2">
                    <div>
                      <h3 className="font-serif text-[42px] md:text-[54px] leading-[0.95] tracking-tight">
                        {room.title}
                      </h3>
                      {room.description && (
                        <p className="max-w-lg text-xs md:text-sm leading-relaxed text-white/68 mt-3">
                          {room.description}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 w-11 h-11 border border-white/25 grid place-items-center text-lg transition-all duration-300 group-hover:bg-white group-hover:text-ink group-hover:border-white">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1340px] mx-auto px-6 lg:px-10 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-white/55">
        <p className="text-sm">Hai già in mente una stanza da trasformare?</p>
        <a href="#contatti" className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white border-b border-white/35 pb-2 hover:text-casaRed hover:border-casaRed transition-colors">
          Raccontaci il tuo progetto →
        </a>
      </div>
    </section>
  );
}
