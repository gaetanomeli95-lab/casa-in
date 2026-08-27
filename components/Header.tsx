"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeNavigation, brand } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "h-[74px] border-white/10 bg-[#0c0c0c]/94 shadow-[0_12px_40px_rgba(0,0,0,.18)] backdrop-blur-xl"
          : "h-[96px] border-white/10 bg-gradient-to-b from-black/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1460px] items-center justify-between gap-6 px-5 sm:px-7 lg:px-10 xl:px-14">
        <Link href="/" aria-label={brand.name} className="relative z-50 flex w-[138px] shrink-0 items-center lg:w-[164px]">
          <Image
            src="/casain-logo.png"
            alt={brand.name}
            width={190}
            height={110}
            className="h-auto w-full object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Navigazione principale">
          {homeNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/78 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-casaRed transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={`tel:${brand.phone1Href}`}
            className="text-[10px] font-bold tracking-[0.08em] text-white/55 transition-colors hover:text-white"
          >
            {brand.phone1}
          </a>
          <Link
            href="#contatti"
            className="inline-flex h-11 items-center justify-center border border-white/30 px-5 text-[9px] font-extrabold uppercase tracking-[0.17em] text-white transition-all hover:border-casaRed hover:bg-casaRed"
          >
            Prenota progettazione
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          className="relative z-50 grid h-11 w-11 place-items-center text-white xl:hidden"
        >
          <span className={`absolute h-px w-7 bg-current transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"}`} />
          <span className={`absolute h-px w-7 bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute h-px w-7 bg-current transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"}`} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#0b0b0b] px-6 pb-8 pt-[116px] transition-all duration-500 xl:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-xl flex-col">
          <p className="mb-6 text-[9px] font-extrabold uppercase tracking-[0.22em] text-white/35">
            Casa IN · Carini
          </p>
          <nav className="flex flex-col border-t border-white/10" aria-label="Navigazione mobile">
            {homeNavigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-5 font-serif text-[clamp(28px,8vw,44px)] leading-none text-white"
              >
                <span>{item.label}</span>
                <span className="font-sans text-[9px] font-bold tracking-[0.18em] text-casaRed">
                  0{index + 1}
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
