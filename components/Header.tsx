"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { brand, navigation } from "@/lib/data";

const primaryNav = ["Ambienti", "Progettazione", "Promozioni", "Showroom", "Contatti"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-white/10 h-18"
          : "bg-transparent border-white/20 h-24"
      }`}
    >
      <div className="max-w-[1340px] mx-auto h-full px-6 lg:px-10 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center h-16 w-36 lg:w-44 shrink-0">
          <Image
            src="/casain-logo.png"
            alt={brand.name}
            width={160}
            height={90}
            className="w-full h-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[11px] font-bold tracking-wide text-white/80">
          {primaryNav.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-casaRed transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            href="#contatti"
            className="inline-flex items-center gap-3 border-l border-white/25 pl-6 text-white text-[11px] font-extrabold uppercase tracking-widest hover:text-casaRed transition-colors"
          >
            Prenota progettazione
            <span className="text-casaRed">↗</span>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
        >
          <span
            className={`absolute w-6 h-px bg-current transition-transform duration-300 ${
              open ? "rotate-45 top-1/2" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute w-6 h-px bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute w-6 h-px bg-current transition-transform duration-300 ${
              open ? "-rotate-45 top-1/2" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-18 bg-ink z-40 px-6 py-10">
          <nav className="flex flex-col gap-6 text-white text-2xl font-serif">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href === "/" ? "/" : `#${item.href.replace("/", "")}`}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-4 hover:text-casaRed transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contatti"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center justify-center w-full h-14 bg-casaRed text-white text-xs font-extrabold uppercase tracking-widest"
          >
            Prenota progettazione
          </Link>
        </div>
      )}
    </header>
  );
}
