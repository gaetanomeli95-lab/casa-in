export const brand = {
  name: "Casa IN Arredamenti",
  shortName: "Casa IN",
  tagline: "La tua casa. Progettata intorno a te.",
  city: "Carini",
  province: "Palermo",
  region: "Sicilia",
  address: "Strada Statale 113 Est, Km 281.900",
  cap: "90044",
  phone1: "091 734 3148",
  phone1Href: "+390917343148",
  phone2: "393 685 2656",
  phone2Href: "+393936852656",
  email: "casainarredamenti26@gmail.com",
  whatsapp: "393936852656",
  whatsappHref: "https://wa.me/393936852656",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Casa+IN+Arredamenti+Carini+SS+113+Km+281.900",
};

export const homeNavigation = [
  { label: "Ambienti", href: "#ambienti" },
  { label: "Progettazione", href: "#progettazione" },
  { label: "Promozioni", href: "#promozioni" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contatti", href: "#contatti" },
];

export const fullNavigation = [
  { label: "Home", href: "/" },
  { label: "Cucine", href: "/cucine" },
  { label: "Camere", href: "/camere" },
  { label: "Camerette", href: "/camerette" },
  { label: "Living", href: "/living" },
  { label: "Promozioni", href: "/promozioni" },
  { label: "Progettazione", href: "/progettazione" },
  { label: "Showroom", href: "/showroom" },
  { label: "Contatti", href: "/contatti" },
];

export const heroSlides = [
  {
    src: "/hero-01.png",
    alt: "Cucina contemporanea Casa IN con tavolo e accenti rossi",
  },
  {
    src: "/hero-02.png",
    alt: "Open space Casa IN ispirato allo showroom di Carini",
  },
  {
    src: "/hero-03.png",
    alt: "Cucina Casa IN contemporanea in tonalità neutre",
  },
];

export const rooms = [
  {
    id: "cucine",
    no: "01",
    kicker: "IL CUORE DELLA CASA",
    title: "Cucine",
    description: "Composizioni moderne, funzionali e progettate sul tuo spazio.",
    image: "/hero-03.png",
    large: true,
  },
  {
    id: "camere",
    no: "02",
    kicker: "RIPOSO & DESIGN",
    title: "Camere",
    description: "La zona notte come spazio di quiete, progettata per accogliere e organizzare.",
    image: "/cat-bedroom.jpg",
    dark: true,
  },
  {
    id: "camerette",
    no: "03",
    kicker: "SPAZI CHE CRESCONO",
    title: "Camerette",
    description: "Soluzioni intelligenti per organizzare, studiare e vivere ogni centimetro.",
    image: "/cat-kitchen2.jpg",
    dark: true,
  },
  {
    id: "living",
    no: "04",
    kicker: "COMFORT QUOTIDIANO",
    title: "Living & divani",
    description: "Divani, composizioni e soluzioni living per il comfort di tutti i giorni.",
    image: "/showroom-kitchen.jpg",
  },
  {
    id: "complementi",
    no: "05",
    kicker: "IL DETTAGLIO CHE COMPLETA",
    title: "Pareti attrezzate & complementi",
    description: "Il dettaglio che completa l'ambiente e gli dà carattere.",
    image: "/cat-complement.jpg",
    wide: true,
  },
];

export const steps = [
  { no: "01", title: "Ascolto", text: "Misure, esigenze, stile e budget: partiamo dalla tua realtà." },
  { no: "02", title: "Progetto", text: "Costruiamo una proposta d'arredo coerente e funzionale." },
  { no: "03", title: "Scelta", text: "Materiali, finiture, colori e dettagli vengono definiti insieme." },
  { no: "04", title: "La tua Casa IN", text: "Il progetto diventa uno spazio reale, pronto da vivere." },
];

export type Promotion = {
  id: string;
  name: string;
  category: string;
  image: string;
  originalPrice?: string;
  promoPrice?: string;
  features?: string[];
  cta?: string;
  badge?: string;
  expires?: string;
};

export const promotions: Promotion[] = [
  {
    id: "promo-001",
    name: "Locandina promozionale",
    category: "Offerte in corso",
    image: "/promo-original.jpg",
    cta: "Chiedi le offerte disponibili",
    badge: "IN EVIDENZA",
  },
];
