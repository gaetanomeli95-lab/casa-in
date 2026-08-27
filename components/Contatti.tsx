"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { brand } from "@/lib/data";

export default function Contatti() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const room = String(form.get("room") || "Da definire");
    const budget = String(form.get("budget") || "Da definire");
    const project = String(form.get("project") || "").trim();

    const message = [
      "Ciao Casa IN, vorrei informazioni per un progetto d'arredo.",
      "",
      `Nome: ${name}`,
      `Telefono: ${phone}`,
      `Ambiente: ${room}`,
      `Budget indicativo: ${budget}`,
      project ? `Idea / richiesta: ${project}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("Sto aprendo WhatsApp con la tua richiesta già compilata…");
    window.open(`${brand.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    window.setTimeout(() => setStatus(""), 3500);
  };

  const fieldClass =
    "w-full border-0 border-b border-stone-300 bg-transparent px-0 py-4 text-sm text-ink outline-none transition-colors placeholder:text-stone-400 focus:border-casaRed";

  return (
    <section id="contatti" ref={ref} className="bg-[#ece8e0]">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:px-12 xl:px-16 lg:py-36">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.22em]"
          >
            <span className="text-casaRed">06</span> PARLIAMONE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="font-serif text-[clamp(44px,5.4vw,82px)] leading-[0.96] tracking-[-0.035em]"
          >
            Il prossimo ambiente
            <br />
            <em className="not-italic text-stone-500">può iniziare da qui.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-8 max-w-[520px] text-[15px] leading-[1.8] text-stone-600"
          >
            Raccontaci cosa vuoi arredare. Prepariamo il messaggio e ti portiamo direttamente su WhatsApp, senza registrazioni e senza moduli che finiscono nel vuoto.
          </motion.p>

          <div className="mt-10 border-t border-stone-300 pt-6 text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">
            Risposta diretta dallo showroom · {brand.city}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.22 }}
          onSubmit={onSubmit}
          className="grid gap-x-8 gap-y-5 sm:grid-cols-2"
        >
          <label className="flex flex-col">
            <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-stone-500">Nome e cognome</span>
            <input name="name" required type="text" autoComplete="name" placeholder="Il tuo nome" className={fieldClass} />
          </label>
          <label className="flex flex-col">
            <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-stone-500">Telefono</span>
            <input name="phone" required type="tel" autoComplete="tel" placeholder="+39 ..." className={fieldClass} />
          </label>
          <label className="flex flex-col">
            <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-stone-500">Ambiente</span>
            <select name="room" className={fieldClass} defaultValue="Cucina">
              <option>Cucina</option>
              <option>Camera da letto</option>
              <option>Cameretta</option>
              <option>Living / Divano</option>
              <option>Parete attrezzata</option>
              <option>Casa completa</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-stone-500">Budget indicativo</span>
            <select name="budget" className={fieldClass} defaultValue="Da definire">
              <option>Da definire</option>
              <option>Fino a €3.000</option>
              <option>€3.000 – €6.000</option>
              <option>€6.000 – €10.000</option>
              <option>Oltre €10.000</option>
            </select>
          </label>
          <label className="col-span-full flex flex-col">
            <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-stone-500">Il tuo progetto</span>
            <textarea name="project" rows={4} placeholder="Raccontaci cosa hai in mente..." className={`${fieldClass} resize-y`} />
          </label>

          <div className="col-span-full mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-[11px] leading-relaxed text-stone-500">
              Inviando la richiesta si aprirà WhatsApp con il messaggio già compilato: potrai controllarlo prima di inviarlo.
            </p>
            <button
              type="submit"
              className="inline-flex h-14 min-w-[230px] items-center justify-between bg-casaRed px-6 text-[9px] font-extrabold uppercase tracking-[0.17em] text-white transition-colors hover:bg-casaRedDark"
            >
              Inizia il progetto <span className="text-base">↗</span>
            </button>
          </div>
        </motion.form>
      </div>

      {status && (
        <div role="status" aria-live="polite" className="fixed bottom-7 left-1/2 z-[180] -translate-x-1/2 bg-ink px-6 py-4 text-center text-xs text-white shadow-2xl">
          {status}
        </div>
      )}
    </section>
  );
}
