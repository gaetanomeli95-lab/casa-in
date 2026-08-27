import { brand } from "@/lib/data";

export default function WhatsApp() {
  return (
    <a
      href={brand.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivi su WhatsApp"
      className="fixed right-5 bottom-5 z-40 bg-white text-ink flex items-center gap-3 pl-2 pr-4 py-2 shadow-2xl hover:shadow-2xl hover:scale-105 transition-transform"
    >
      <span className="w-9 h-9 rounded-full bg-ink text-white grid place-items-center text-[9px] font-extrabold tracking-widest">
        WA
      </span>
      <span className="text-[10px] font-extrabold uppercase tracking-[0.1em] hidden sm:inline">
        Scrivici
      </span>
    </a>
  );
}
