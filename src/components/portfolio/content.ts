export type Lang = "es" | "en";

export interface CaseStudy {
  name: string;
  tag: string;
  type: string;
  desc: string;
  color: string;
  bg: string;
}

export interface CaseDetail {
  problem: string;
  solution: string;
  features: string[];
}

export interface ExperienceEntry {
  role: string;
  org: string;
  badge: string;
  current?: boolean;
  desc: string;
  chips: string[];
}

export interface StackGroup {
  group: string;
  items: string[];
}

export interface Copy {
  navCases: string;
  navStack: string;
  navExp: string;
  navContact: string;
  status: string;
  heroA: string;
  heroB: string;
  heroSub: string;
  ctaWa: string;
  ctaMail: string;
  services: string[];
  casesTitle: string;
  stackTitle: string;
  expTitle: string;
  ctaKicker: string;
  ctaTitle: string;
  ctaSub: string;
  footer: string;
  seeMore: string;
  dProblem: string;
  dSolution: string;
  dFeatures: string;
  dStack: string;
  dCta: string;
  cases: CaseStudy[];
  exp: ExperienceEntry[];
}

export const WA_LINK = "https://wa.me/573229201019";
export const MAIL_LINK = "mailto:felidev728@gmail.com";
export const GITHUB_URL = "https://github.com/FelipeArredond";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/felipe-arredondo-giraldo-02259521b/";

export const CASE_CHIPS: Record<string, string[]> = {
  "Integra Soluciones": ["Java", "Spring Boot", "Angular", "PostgreSQL"],
  "FreeMove Training": ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
  "Toppro Performance": ["React", "Node.js", "Stripe", "MongoDB"],
  MetaMotor: ["React Native", "Node.js", "MongoDB", "AWS"],
};

export const STACK: StackGroup[] = [
  {
    group: "backend",
    items: [
      "Node.js · Express",
      "Java 17 · Spring Boot 3",
      "Spring WebFlux",
      "Python · Django",
      "REST · GraphQL · gRPC",
    ],
  },
  {
    group: "frontend",
    items: ["React · Next.js", "Angular", "TypeScript", "Tailwind · CSS-in-JS"],
  },
  {
    group: "devops / cloud",
    items: [
      "AWS · CloudFormation",
      "CI/CD pipelines",
      "Docker · Kubernetes",
      "SAST / DAST",
      "IaC",
    ],
  },
  {
    group: "data / ai",
    items: [
      "MongoDB · PostgreSQL",
      "LLM integrations",
      "AI automations",
      "RAG pipelines",
    ],
  },
];

export const DETAILS: Record<Lang, Record<string, CaseDetail>> = {
  es: {
    "Integra Soluciones": {
      problem:
        "Los hospitales del Eje Cafetero radicaban facturas ante las EPS de forma manual: procesos lentos, errores de digitación y glosas que golpeaban directamente la cartera.",
      solution:
        "Construí un software de radicación que centraliza, valida y hace trazable todo el proceso, reduciendo errores y tiempos de radicación.",
      features: [
        "Radicación centralizada de facturas",
        "Validaciones antes de enviar a la EPS",
        "Trazabilidad del estado de cada factura",
        "Reportes para el equipo de cartera",
      ],
    },
    "FreeMove Training": {
      problem:
        "El gimnasio manejaba suscripciones, reservas y pagos por WhatsApp y planillas: cupos duplicados, cobros perdidos y cero visibilidad del negocio.",
      solution:
        "Plataforma web donde los miembros se suscriben, reservan clases y consumen créditos solos; el gimnasio administra todo desde un panel.",
      features: [
        "Suscripciones con renovación",
        "Reserva de clases con cupos en tiempo real",
        "Sistema de créditos de consumo",
        "Panel de administración del gimnasio",
      ],
    },
    "Toppro Performance": {
      problem:
        "Venta de accesorios para motos de competición por redes sociales: catálogo desordenado, pagos manuales y pedidos difíciles de seguir.",
      solution:
        "E-commerce completo con catálogo, checkout y pagos integrados vía Stripe, más gestión de pedidos de punta a punta.",
      features: [
        "Catálogo con variantes de producto",
        "Checkout con Stripe",
        "Gestión y seguimiento de pedidos",
        "Optimizado para móvil",
      ],
    },
    MetaMotor: {
      problem:
        "Los motociclistas no tenían una sola app para mantener su moto, comprar repuestos y conectar con otros riders.",
      solution:
        "App móvil completa: garaje virtual con recordatorios de mantenimiento, e-commerce integrado y comunidad — de cero a las tiendas.",
      features: [
        "Garaje virtual con historial",
        "Recordatorios de mantenimiento",
        "E-commerce integrado",
        "Comunidad y publicaciones",
      ],
    },
  },
  en: {
    "Integra Soluciones": {
      problem:
        "Hospitals in Colombia's Coffee Axis filed insurance invoices manually: slow processes, typing errors and rejections hitting receivables directly.",
      solution:
        "I built filing software that centralizes, validates and tracks the whole process, cutting errors and filing times.",
      features: [
        "Centralized invoice filing",
        "Validations before submitting to insurers",
        "Per-invoice status tracking",
        "Reports for the billing team",
      ],
    },
    "FreeMove Training": {
      problem:
        "The gym ran subscriptions, bookings and payments over WhatsApp and spreadsheets: double-booked slots, missed charges, zero visibility.",
      solution:
        "A web platform where members subscribe, book classes and spend credits on their own; the gym manages everything from one panel.",
      features: [
        "Auto-renewing subscriptions",
        "Class booking with real-time capacity",
        "Consumption-credit system",
        "Gym admin panel",
      ],
    },
    "Toppro Performance": {
      problem:
        "Competition motorcycle accessories sold over social media: messy catalog, manual payments, orders hard to track.",
      solution:
        "A full e-commerce store with catalog, checkout and Stripe payments built in, plus end-to-end order management.",
      features: [
        "Catalog with product variants",
        "Stripe checkout",
        "Order management and tracking",
        "Mobile-optimized",
      ],
    },
    MetaMotor: {
      problem:
        "Riders had no single app to maintain their bike, buy parts and connect with other riders.",
      solution:
        "A full mobile app: virtual garage with maintenance reminders, built-in e-commerce and community — from zero to the app stores.",
      features: [
        "Virtual garage with history",
        "Maintenance reminders",
        "Built-in e-commerce",
        "Community and posts",
      ],
    },
  },
};

export const COPY: Record<Lang, Copy> = {
  es: {
    navCases: "casos",
    navStack: "stack",
    navExp: "experiencia",
    navContact: "contacto",
    status: "disponible para nuevos proyectos",
    heroA: "Construyo el software que tu negocio necesita,",
    heroB: "de la idea a producción.",
    heroSub:
      "Soy Felipe — full-stack + DevOps con 5 años de experiencia en banca y grandes empresas. Ayudo a pequeñas y medianas empresas a lanzar productos reales: apps a la medida, e-commerce y automatizaciones. Sin humo, sin rodeos.",
    ctaWa: "Escríbeme por WhatsApp",
    ctaMail: "Enviar email",
    services: [
      "software a la medida",
      "e-commerce",
      "apps móviles",
      "automatizaciones con IA",
    ],
    casesTitle: "Casos de estudio",
    stackTitle: "Stack técnico",
    expTitle: "Experiencia",
    ctaKicker: "¿tienes un proyecto en mente?",
    ctaTitle: "Hablemos de tu proyecto — sin compromiso.",
    ctaSub:
      "Cuéntame qué necesitas y te digo con honestidad qué construiría, en cuánto tiempo y cuánto costaría. Respondo rápido.",
    footer: "hecho a mano · Metamotor DS",
    seeMore: "ver detalle",
    dProblem: "el problema",
    dSolution: "la solución",
    dFeatures: "funcionalidades",
    dStack: "stack",
    dCta: "Quiero algo así",
    cases: [
      {
        name: "Integra Soluciones",
        tag: "salud",
        type: "software a la medida",
        desc: "Software de radicación de facturación para hospitales del Eje Cafetero. Digitaliza un proceso crítico de cartera: radicar facturas ante las EPS a tiempo y sin errores.",
        color: "#6BA8FF",
        bg: "rgba(107,168,255,0.14)",
      },
      {
        name: "FreeMove Training",
        tag: "fitness",
        type: "plataforma web",
        desc: "Plataforma para gimnasio con suscripciones, reserva de clases y sistema de créditos de consumo. Los miembros gestionan todo solos; el gimnasio deja de operar por WhatsApp.",
        color: "#63E6BE",
        bg: "rgba(99,230,190,0.14)",
      },
      {
        name: "Toppro Performance",
        tag: "e-commerce",
        type: "tienda online",
        desc: "E-commerce de accesorios para motocicletas de competición, con pagos integrados vía Stripe. Catálogo, checkout y gestión de pedidos de punta a punta.",
        color: "#F5B544",
        bg: "rgba(245,181,68,0.14)",
      },
      {
        name: "MetaMotor",
        tag: "app móvil",
        type: "producto completo",
        desc: "App móvil con e-commerce y múltiples funcionalidades: garaje virtual, recordatorios de mantenimiento, comunidad y tienda. Un producto completo, de cero a las tiendas.",
        color: "#8B6AE6",
        bg: "rgba(139,106,230,0.14)",
      },
    ],
    exp: [
      {
        role: "DevOps Engineer",
        org: "Fintech",
        badge: "actual",
        current: true,
        desc: "Diseño pipelines CI/CD, gestiono infraestructura AWS con CloudFormation e integro escaneos de seguridad al proceso de entrega.",
        chips: ["AWS", "CloudFormation", "CI/CD", "IaC"],
      },
      {
        role: "Backend Engineer",
        org: "Bancolombia",
        badge: "anterior",
        desc: "Servicios backend reactivos con Spring WebFlux y Django para uno de los bancos más grandes de Latinoamérica.",
        chips: ["Spring WebFlux", "Django", "Java", "Python"],
      },
      {
        role: "Full-Stack Engineer",
        org: "Postobón",
        badge: "anterior",
        desc: "Features full-stack en una de las empresas de bebidas más grandes de Colombia: Java 17 + Spring Boot 3 en backend, Angular en frontend.",
        chips: ["Java 17", "Spring Boot 3", "Angular", "TypeScript"],
      },
      {
        role: "Frontend Developer",
        org: "Startup",
        badge: "anterior",
        desc: "Desarrollador React dedicado: arquitectura de componentes, manejo de estado y UIs que sobreviven a usuarios reales.",
        chips: ["React", "JavaScript"],
      },
      {
        role: "Backend Engineer",
        org: "Startup US",
        badge: "primer rol",
        desc: "Primer rol profesional: servicios backend en Node.js + Express + MongoDB para una startup americana, en producción.",
        chips: ["Node.js", "Express", "MongoDB"],
      },
    ],
  },
  en: {
    navCases: "work",
    navStack: "stack",
    navExp: "experience",
    navContact: "contact",
    status: "available for new projects",
    heroA: "I build the software your business needs,",
    heroB: "from idea to production.",
    heroSub:
      "I'm Felipe — full-stack + DevOps with 5 years across banking and large enterprises. I help small and medium businesses ship real products: custom apps, e-commerce and automations. No fluff, no runaround.",
    ctaWa: "Message me on WhatsApp",
    ctaMail: "Send email",
    services: ["custom software", "e-commerce", "mobile apps", "AI automations"],
    casesTitle: "Case studies",
    stackTitle: "Tech stack",
    expTitle: "Experience",
    ctaKicker: "got a project in mind?",
    ctaTitle: "Let's talk about your project — no strings attached.",
    ctaSub:
      "Tell me what you need and I'll tell you honestly what I'd build, how long it takes and what it costs. I reply fast.",
    footer: "handcrafted · Metamotor DS",
    seeMore: "view details",
    dProblem: "the problem",
    dSolution: "the solution",
    dFeatures: "features",
    dStack: "stack",
    dCta: "I want something like this",
    cases: [
      {
        name: "Integra Soluciones",
        tag: "health",
        type: "custom software",
        desc: "Invoice filing software for hospitals in Colombia's Coffee Axis. Digitizes a critical billing process: filing claims with insurers on time and error-free.",
        color: "#6BA8FF",
        bg: "rgba(107,168,255,0.14)",
      },
      {
        name: "FreeMove Training",
        tag: "fitness",
        type: "web platform",
        desc: "Gym platform with subscriptions, class bookings and a consumption-credit system. Members self-serve; the gym stops running its business over WhatsApp.",
        color: "#63E6BE",
        bg: "rgba(99,230,190,0.14)",
      },
      {
        name: "Toppro Performance",
        tag: "e-commerce",
        type: "online store",
        desc: "E-commerce store for competition motorcycle accessories with Stripe payments built in. Catalog, checkout and order management end to end.",
        color: "#F5B544",
        bg: "rgba(245,181,68,0.14)",
      },
      {
        name: "MetaMotor",
        tag: "mobile app",
        type: "full product",
        desc: "Mobile app with e-commerce and multiple features: virtual garage, maintenance reminders, community and store. A full product, from zero to the app stores.",
        color: "#8B6AE6",
        bg: "rgba(139,106,230,0.14)",
      },
    ],
    exp: [
      {
        role: "DevOps Engineer",
        org: "Fintech",
        badge: "current",
        current: true,
        desc: "Designing CI/CD pipelines, managing AWS infrastructure with CloudFormation, and wiring security scans into the delivery process.",
        chips: ["AWS", "CloudFormation", "CI/CD", "IaC"],
      },
      {
        role: "Backend Engineer",
        org: "Bancolombia",
        badge: "previous",
        desc: "Reactive backend services with Spring WebFlux and Django for one of the largest banks in Latin America.",
        chips: ["Spring WebFlux", "Django", "Java", "Python"],
      },
      {
        role: "Full-Stack Engineer",
        org: "Postobón",
        badge: "previous",
        desc: "Full-stack features at one of Colombia's largest beverage companies: Java 17 + Spring Boot 3 backend, Angular frontend.",
        chips: ["Java 17", "Spring Boot 3", "Angular", "TypeScript"],
      },
      {
        role: "Frontend Developer",
        org: "Startup",
        badge: "previous",
        desc: "Dedicated React developer: component architecture, state management, and UIs that survive real users.",
        chips: ["React", "JavaScript"],
      },
      {
        role: "Backend Engineer",
        org: "US Startup",
        badge: "first role",
        desc: "First professional role: backend services on Node.js + Express + MongoDB for a US startup, shipped to production.",
        chips: ["Node.js", "Express", "MongoDB"],
      },
    ],
  },
};
