"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeNavigation, brand } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "h-[72px] bg-ink/95 backdrop-blur-xl border-b border-white/8 shadow-[0_10px_40px_rgba(0,0,0,.16)]"
          : "h-[96px] bg-gradient-to-b from-black/50 to-transparent border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-7 lg:px-12 xl:px-16">
        <Link
          href="/"
          aria-label={brand.name}
          className="relative z-50 flex w-[160px] shrink-0 items-center sm:w-[180px] lg:w-[200px]"
        >
          <Image
            src="/casain-logo.png"
            alt={brand.name}
            width={200}
            height={90}
            className="h-auto w-full object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,.28)]"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-9 xl:flex"
          aria-label="Navigazione principale"
        >
          {homeNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/75 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-casaRed transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={`tel:${brand.phone1Href}`}
            className="text-[10px] font-bold tracking-[0.06em] text-white/50 transition-colors hover:text-white"
          >
            {brand.phone1}
          </a>
          <Link
            href="#contatti"
            className="inline-flex h-11 items-center border border-white/25 px-6 text-[9px] font-extrabold uppercase tracking-[0.17em] text-white transition-all hover:border-casaRed hover:bg-casaRed"
          >
            Prenota progettazione
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          className="relative z-50 grid h-11 w-11 place-items-center text-white xl:hidden"
        >
          <span className={`absolute h-px w-6 bg-current transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"}`} />
          <span className={`absolute h-px w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute h-px w-6 bg-current transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"}`} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] px-6 pb-8 pt-[110px] transition-all duration-500 xl:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-xl flex-col">
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/casain-logo.png"
              alt="Casa IN"
              width={170}
              height={95}
              className="h-14 w-auto object-contain"
            />
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-white/65">
                Casa IN Arredamenti
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                Carini · Palermo
              </p>
            </div>
          </div>

          <nav className="flex flex-col border-t border-white/10" aria-label="Navigazione mobile">
            {homeNavigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-5 font-serif text-[clamp(28px,8vw,44px)] leading-none text-white"
              >
                <span>{item.label}</span>
                <span className="font-sans text-[9px] font-bold tracking-[0.18em] text-casaRed">
                  0{i + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center bg-casaRed px-5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white"
            >
              Scrivici su WhatsApp
            </a>
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center border border-white/20 px-5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white"
            >
              Indicazioni showroom
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
