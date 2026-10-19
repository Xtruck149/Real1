import type { EventFormat, GalleryImage, Specialty } from "./types";

/**
 * Visuels de démonstration générés (aucune photo de l'établissement n'est utilisée).
 * Remplacez les fichiers de /public/images par les photos fournies et autorisées,
 * puis lancez `python3 scripts/images.py manifest public/images src/content/images.generated.json` pour régénérer
 * les dimensions et les aperçus flous.
 */
export const gallery: GalleryImage[] = [
  { file: "plat-1.webp", alt: "Visuel de démonstration d'une assiette de grillades", caption: "Grillades (visuel de démonstration)", category: "plats" },
  { file: "ambiance-1.webp", alt: "Visuel de démonstration d'une salle tamisée", caption: "Salle du soir (visuel de démonstration)", category: "ambiance" },
  { file: "plat-2.webp", alt: "Visuel de démonstration d'un plat de fruits de mer", caption: "Fruits de mer (visuel de démonstration)", category: "plats" },
  { file: "evenement-1.webp", alt: "Visuel de démonstration d'une table dressée pour une fête", caption: "Soirée privée (visuel de démonstration)", category: "evenements" },
  { file: "ambiance-2.webp", alt: "Visuel de démonstration d'un bar à cocktails", caption: "Le bar (visuel de démonstration)", category: "ambiance" },
  { file: "plat-3.webp", alt: "Visuel de démonstration d'un dessert", caption: "Dessert (visuel de démonstration)", category: "plats" },
  { file: "evenement-2.webp", alt: "Visuel de démonstration d'un afterwork", caption: "Afterwork (visuel de démonstration)", category: "evenements" },
  { file: "ambiance-3.webp", alt: "Visuel de démonstration d'une terrasse de nuit", caption: "Terrasse (visuel de démonstration)", category: "ambiance" },
  { file: "plat-4.webp", alt: "Visuel de démonstration d'un cocktail", caption: "Cocktail (visuel de démonstration)", category: "plats" },
];

export const heroImage = { file: "hero.webp", alt: "Visuel de démonstration d'une ambiance de restaurant-lounge en soirée" };

export const eventFormats: EventFormat[] = [
  { title: "Anniversaires & fêtes", description: "Un espace réservé, une formule repas et boissons, une décoration sur demande.", capacity: { value: "Capacité à confirmer", status: "demo" }, status: "demo" },
  { title: "Afterworks d'équipe", description: "Pour souder une équipe en fin de semaine, avec un menu à partager.", capacity: { value: "Capacité à confirmer", status: "demo" }, status: "demo" },
  { title: "Déjeuners d'affaires", description: "Un cadre calme pour recevoir clients et partenaires.", capacity: { value: "Capacité à confirmer", status: "demo" }, status: "demo" },
  { title: "Soirées privatisées", description: "Privatisation partielle ou totale, à étudier avec l'équipe.", capacity: { value: "Conditions à confirmer", status: "demo" }, status: "demo" },
];

/** Restaurants without a dedicated specialities page leave this empty. */
export const specialties: Specialty[] = [];
