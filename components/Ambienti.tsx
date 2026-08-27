"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { rooms } from "@/lib/data";

export default function Ambienti() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ambienti" ref={ref} className="bg-ink text-white py-28 lg:py-36">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-white/70 flex items-center gap-3 mb-8"
        >
          <span className="text-casaRed">02</span> AMBIENTI
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.55fr] gap-12 lg:gap-24 items-end pb-16">
          <h2 className="font-serif text-[clamp(40px,5.5vw,82px)] leading-[0.98] tracking-tight text-white">
            Una casa completa.
            <br />
            <em className="not-italic text-[#e9b8b8]">Un unico stile.</em>
          </h2>
          <p className="text-sm leading-relaxed text-white/55">
            Dalla cucina alla zona notte, Casa IN raccoglie soluzioni pensate per dialogare tra loro e creare una casa riconoscibile, personale, tua.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
        {rooms.map((room, i) => (
          <motion.a
            key={room.id}
            href="#contatti"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`relative group overflow-hidden min-h-[420px] md:min-h-[520px] ${
              room.large ? "md:row-span-2" : ""
            } ${room.wide ? "md:col-span-2" : ""}`}
          >
            {room.image ? (
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.045]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-ink2" />
            )}
            <div
              className={`absolute inset-0 ${
                room.dark ? "bg-[#1a1a1a]" : "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              }`}
            />
            {room.dark && (
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-[140px] md:text-[190px] text-casaRed opacity-95 leading-none tracking-tighter">
                IN
              </span>
            )}

            <div className="absolute inset-5 md:inset-8 border border-white/10 pointer-events-none" />
            <span className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full border border-white/35 grid place-items-center text-[10px] font-bold">
              {room.no}
            </span>

            <div className="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 md:bottom-8 z-10">
              <span className="text-[9px] font-extrabold tracking-[0.17em] text-[#ff8487]">
                {room.kicker}
              </span>
              <h3 className="font-serif text-[42px] md:text-[50px] leading-none tracking-tight mt-2 mb-2">
                {room.title}
              </h3>
              {room.description && (
                <p className="max-w-md text-xs md:text-sm leading-relaxed text-white/70">
                  {room.description}
                </p>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
