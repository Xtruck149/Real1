import type { MenuCategory } from "./types";

/**
 * MENU — modifiez ce fichier pour mettre la carte à jour.
 * - `price`: montant en FCFA (nombre) ou `null` tant que le prix n'est pas communiqué.
 * - `status`: "demo" pour un plat d'exemple, "confirme" une fois validé par l'établissement.
 * Aucun prix n'est inventé : tous les plats ci-dessous sont des exemples sans prix.
 */
export const menu: MenuCategory[] = [
  {
    id: "entrees",
    name: "Entrées & à partager",
    intro: "Des assiettes à partager pour commencer la soirée.",
    items: [
      { name: "Planche du lounge", description: "Assortiment à partager (exemple de présentation).", price: null, tags: ["À partager"], status: "demo" },
      { name: "Accras & sauce pimentée", description: "Beignets croustillants, sauce maison.", price: null, status: "demo" },
      { name: "Salade fraîcheur", description: "Crudités de saison, vinaigrette aux agrumes.", price: null, tags: ["Végétarien"], status: "demo" },
    ],
  },
  {
    id: "grillades",
    name: "Grillades",
    intro: "Cuissons au feu, accompagnements au choix.",
    items: [
      {
        name: "Côtelettes d'agneau",
        description: "Plat cité dans un avis client public ; recette et accompagnement à confirmer.",
        price: null,
        tags: ["Signature ?"],
        status: "public",
      },
      { name: "Brochettes de bœuf", description: "Marinade aux épices, oignons grillés.", price: null, status: "demo" },
      { name: "Poulet braisé", description: "Servi avec attiéké ou alloco.", price: null, status: "demo" },
      { name: "Poisson braisé du jour", description: "Selon arrivage, sauce tomate-oignon.", price: null, status: "demo" },
    ],
  },
  {
    id: "plats",
    name: "Plats",
    intro: "Cuisine locale et internationale.",
    items: [
      { name: "Burger maison", description: "Pain brioché, steak haché, frites.", price: null, status: "demo" },
      { name: "Pâtes aux fruits de mer", description: "Crevettes, calamars, sauce crémeuse.", price: null, status: "demo" },
      { name: "Kedjenou de poulet", description: "Mijoté traditionnel, riz blanc.", price: null, tags: ["Tradition"], status: "demo" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    intro: "Une touche sucrée pour finir.",
    items: [
      { name: "Fondant au chocolat", description: "Cœur coulant, boule de glace.", price: null, status: "demo" },
      { name: "Salade de fruits frais", description: "Fruits de saison.", price: null, tags: ["Végétarien"], status: "demo" },
    ],
  },
  {
    id: "bar",
    name: "Bar & cocktails",
    intro: "Avec ou sans alcool, à consommer avec modération.",
    items: [
      { name: "Cocktail signature 25/8", description: "Création du bar (exemple).", price: null, status: "demo" },
      { name: "Bissap glacé", description: "Infusion d'hibiscus, menthe fraîche.", price: null, tags: ["Sans alcool"], status: "demo" },
      { name: "Jus de gingembre", description: "Pressé maison.", price: null, tags: ["Sans alcool"], status: "demo" },
    ],
  },
];
