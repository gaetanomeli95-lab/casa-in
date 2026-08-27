"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contatti() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2800);
  };

  return (
    <section id="contatti" ref={ref} className="max-w-[1340px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-3 mb-8"
          >
            <span className="text-casaRed">06</span> PARLIAMONE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[clamp(40px,5.5vw,82px)] leading-[0.98] tracking-tight"
          >
            Il prossimo ambiente
            <br />
            <em className="not-italic text-stone-500">può iniziare da qui.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-[520px] text-[15px] leading-[1.75] text-stone-600"
          >
            Raccontaci cosa vuoi arredare. La richiesta arriverà direttamente allo showroom via email o WhatsApp.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          onSubmit={onSubmit}
          className="grid sm:grid-cols-2 gap-5"
        >
          <label className="flex flex-col gap-2">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.12em]">Nome e cognome</span>
            <input required type="text" placeholder="Il tuo nome" className="w-full border border-stone-400 bg-stone-100 px-4 py-4 text-sm outline-none focus:border-casaRed" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.12em]">Telefono</span>
            <input required type="tel" placeholder="+39 ..." className="w-full border border-stone-400 bg-stone-100 px-4 py-4 text-sm outline-none focus:border-casaRed" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.12em]">Ambiente</span>
            <select className="w-full border border-stone-400 bg-stone-100 px-4 py-4 text-sm outline-none focus:border-casaRed">
              <option>Cucina</option>
              <option>Camera da letto</option>
              <option>Cameretta</option>
              <option>Living / Divano</option>
              <option>Parete attrezzata</option>
              <option>Casa completa</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.12em]">Budget indicativo</span>
            <select className="w-full border border-stone-400 bg-stone-100 px-4 py-4 text-sm outline-none focus:border-casaRed">
              <option>Da definire</option>
              <option>Fino a €3.000</option>
              <option>€3.000 – €6.000</option>
              <option>€6.000 – €10.000</option>
              <option>Oltre €10.000</option>
            </select>
          </label>
          <label className="col-span-full flex flex-col gap-2">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.12em]">Il tuo progetto</span>
            <textarea rows={4} placeholder="Raccontaci cosa hai in mente..." className="w-full border border-stone-400 bg-stone-100 px-4 py-4 text-sm outline-none focus:border-casaRed resize-y" />
          </label>
          <button
            type="submit"
            className="col-span-full h-14 px-7 bg-casaRed text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-casaRedDark transition-colors"
          >
            Richiedi una consulenza
          </button>
        </motion.form>
      </div>

      {showToast && (
        <div className="fixed left-1/2 bottom-7 -translate-x-1/2 bg-ink text-white px-6 py-4 z-[180] text-sm shadow-2xl">
          Anteprima: il modulo verrà collegato nella versione finale.
        </div>
      )}
    </section>
  );
}
