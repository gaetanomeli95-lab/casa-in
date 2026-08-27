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

// Immagini editoriali create appositamente per Casa IN partendo dal vero showroom.
// Le fotografie originali restano materiale di riferimento e non vengono usate come hero.
export const heroSlides = [
  { src: "/hero-casain-01.webp", alt: "Ambiente Casa IN ispirato allo showroom di Carini" },
  { src: "/hero-casain-02.webp", alt: "Cucina contemporanea Casa IN con accenti rossi" },
  { src: "/hero-casain-03.webp", alt: "Open space Casa IN ispirato allo showroom reale" },
];

export const rooms = [
  {
    id: "cucine",
    no: "01",
    kicker: "IL CUORE DELLA CASA",
    title: "Cucine",
    description: "Composizioni moderne, funzionali e progettate sul tuo spazio.",
    image: "/hero-casain-02.webp",
    large: true,
  },
  {
    id: "camere",
    no: "02",
    kicker: "RIPOSO & DESIGN",
    title: "Camere",
    description: "Una sezione pronta ad accogliere le immagini dedicate alla zona notte.",
    dark: true,
  },
  {
    id: "camerette",
    no: "03",
    kicker: "SPAZI CHE CRESCONO",
    title: "Camerette",
    description: "Soluzioni intelligenti per organizzare, studiare e vivere ogni centimetro.",
    dark: true,
  },
  {
    id: "living",
    no: "04",
    kicker: "COMFORT QUOTIDIANO",
    title: "Living & divani",
    image: "/hero-casain-01.webp",
  },
  {
    id: "complementi",
    no: "05",
    kicker: "IL DETTAGLIO CHE COMPLETA",
    title: "Pareti attrezzate & complementi",
    image: "/hero-casain-03.webp",
    wide: true,
  },
];

export const steps = [
  { no: "01", title: "Ascolto", text: "Misure, esigenze, stile e budget: partiamo dalla tua realtà." },
  { no: "02", title: "Progetto", text: "Costruiamo una proposta d'arredo coerente e funzionale." },
  { no: "03", title: "Scelta", text: "Materiali, finiture, colori e dettagli vengono definiti insieme." },
  { no: "04", title: "La tua Casa IN", text: "Il progetto diventa uno spazio reale, pronto da vivere." },
];

export const promo = {
  title: "In evidenza",
  headline: "Le occasioni dello showroom.",
  subline: "Da vedere dal vivo.",
  description:
    "Composizioni, novità e offerte attive: una selezione da scoprire online e poi toccare con mano nel nostro showroom.",
  image: "/promo-original.jpg",
  cta: "Chiedi le offerte disponibili",
};
