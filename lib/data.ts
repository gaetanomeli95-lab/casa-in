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
  { label: "Showroom", href: "#showroom" },
  { label: "Contatti", href: "#contatti" },
];

export const fullNavigation = [
  { label: "Home", href: "/" },
  { label: "Cucine", href: "/cucine" },
  { label: "Camere", href: "/camere" },
  { label: "Camerette", href: "/camerette" },
  { label: "Living", href: "/living" },
  { label: "Progettazione", href: "/progettazione" },
  { label: "Showroom", href: "/showroom" },
  { label: "Contatti", href: "/contatti" },
];

// Fotografie editoriali approvate: sono il materiale visivo principale del sito.
// Le foto raw/originali del punto vendita non devono sostituirle automaticamente.
export const heroSlides = [
  {
    src: "/hero-01.png",
    alt: "Ambiente Casa IN con cucina contemporanea e accenti rossi",
  },
  {
    src: "/hero-02.png",
    alt: "Ambiente editoriale Casa IN ispirato allo showroom di Carini",
  },
  {
    src: "/hero-03.png",
    alt: "Cucina contemporanea Casa IN in tonalità neutre",
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
    description: "Una zona notte progettata con la stessa attenzione riservata a tutta la casa.",
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
    description: "Spazi da vivere ogni giorno, progettati con equilibrio tra comfort e carattere.",
    image: "/hero-01.png",
  },
  {
    id: "complementi",
    no: "05",
    kicker: "IL DETTAGLIO CHE COMPLETA",
    title: "Pareti attrezzate & complementi",
    description: "Dettagli e composizioni che legano insieme l'ambiente.",
    image: "/hero-02.png",
    wide: true,
  },
];

export const steps = [
  { no: "01", title: "Ascolto", text: "Misure, esigenze, stile e budget: partiamo dalla tua realtà." },
  { no: "02", title: "Progetto", text: "Costruiamo una proposta d'arredo coerente e funzionale." },
  { no: "03", title: "Scelta", text: "Materiali, finiture, colori e dettagli vengono definiti insieme." },
  { no: "04", title: "La tua Casa IN", text: "Il progetto diventa uno spazio reale, pronto da vivere." },
];
