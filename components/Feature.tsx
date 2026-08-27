"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function Feature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="grid lg:grid-cols-[1.25fr_0.75fr] min-h-[720px] bg-[#191919] text-white">
      <div className="relative h-[420px] lg:h-auto overflow-hidden">
        <Image
          src="/hero-01.png"
          alt="Progetto cucina Casa IN"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-20 lg:py-24"
      >
        <span className="text-[9px] tracking-[0.2em] text-[#ff7b7e] font-extrabold">
          CASA IN / CARINI
        </span>
        <blockquote className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.04] tracking-tight mt-8 mb-4">
          &ldquo;L&apos;arredo giusto non riempie uno spazio. Lo rende tuo.&rdquo;
        </blockquote>
        <div className="w-16 h-[2px] bg-casaRed my-6" />
        <p className="text-[13px] leading-[1.75] text-white/60 max-w-md">
          Linee contemporanee, finiture materiche e accenti decisi: una direzione visiva costruita intorno all&apos;identità Casa IN.
        </p>
      </motion.div>
    </section>
  );
}
