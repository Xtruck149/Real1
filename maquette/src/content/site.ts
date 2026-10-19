import type { SiteConfig } from "./types";

const CHECKED = "consulté le 19/10/2026";

export const site: SiteConfig = {
  name: "Restaurant-Lounge 25/8",
  shortName: "25/8",
  schemaType: "Restaurant",
  tagline: "Restaurant & lounge à Angré",
  description:
    "Maquette de démonstration pour le Restaurant-Lounge 25/8 à Angré, Abidjan : menu, galerie, réservation de table et organisation d'événements.",
  locality: "Abidjan",
  district: "Cocody Angré",
  keywords: ["restaurant Angré", "lounge Abidjan", "restaurant Cocody", "réservation restaurant Abidjan", "25/8 Angré"],
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/menu", label: "Menu" },
    { href: "/galerie", label: "Galerie" },
    { href: "/evenements", label: "Événements" },
    { href: "/reservation", label: "Réservation" },
    { href: "/contact", label: "Contact" },
  ],
  primaryCta: { href: "/reservation", label: "Réserver une table" },
  contact: {
    address: {
      value: "Cocody Angré, Terminus 81-82, Abidjan",
      status: "public",
      source: `Page Facebook publique « Restaurant-Lounge 25/8 » et annuaire baab.ci, ${CHECKED}`,
    },
    // Two different numbers appear in public listings: none is shown until the owner confirms one.
    phone: { value: "Numéro à confirmer", status: "demo" },
    email: null,
    whatsapp: null,
    whatsappMessage: "Bonjour, je souhaite réserver une table au 25/8.",
    mapsQuery: "Restaurant Lounge 25/8 Angré Terminus 81 Abidjan",
    hours: {
      status: "demo",
      source: `Sources publiques contradictoires : « ouvert 24h/24 » (Facebook) et « 8h – 1h » (baab.ci), ${CHECKED}`,
      rows: [{ days: "Tous les jours", hours: "Horaires à confirmer" }],
    },
  },
  social: [
    {
      network: "Facebook",
      url: "https://www.facebook.com/lounge258/",
      status: "public",
      source: `Résultat de recherche public, ${CHECKED}`,
    },
    {
      network: "Instagram",
      url: "https://www.instagram.com/258restaurantlounge/",
      status: "public",
      source: `Résultat de recherche public, ${CHECKED}`,
    },
  ],
};

/** Words used across the pages: lets one template serve several restaurants. */
export const copy = {
  heroEyebrow: "Restaurant · Lounge · Angré",
  heroTitle: "Dîner, se retrouver, prolonger la soirée.",
  heroText:
    "Une table pour le déjeuner, un dîner entre amis ou une soirée lounge : découvrez la carte, réservez en quelques secondes et organisez vos événements privés.",
  heroLayout: "full" as "full" | "split",
  introTitle: "Une adresse, plusieurs ambiances",
  introText:
    "Cette maquette montre comment le 25/8 pourrait présenter sa cuisine, son espace lounge et ses soirées. Textes et visuels sont des exemples à remplacer par les contenus fournis par l'établissement.",
  highlights: [
    { title: "La table", text: "Cuisine de partage, grillades et plats signatures à découvrir sur la carte." },
    { title: "Le lounge", text: "Un espace pour prolonger la soirée autour de cocktails et de musique." },
    { title: "Les événements", text: "Anniversaires, afterworks, soirées privées : une demande en ligne suffit." },
  ],
  reservationIntro:
    "Indiquez vos préférences : l'équipe vous recontacte pour confirmer la disponibilité. Aucune réservation n'est définitive avant cette confirmation.",
  reservationIncludesEvents: false,
};
