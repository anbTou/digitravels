import { Continent } from "@/types/destination";

export const southAmerica: Continent = {
  title: "South America",
  sections: {
    beach: {
      title: "Beach Getaways",
      description: "Tropical coastal paradises",
      listings: [
        {
          title: "Copacabana Beachfront",
          location: "Brazil",
          price: "From €199/night",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
          discount: "25% OFF",
          rating: 4.8,
        },
        {
          title: "Punta del Este Resort",
          location: "Uruguay",
          price: "From €179/night",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
          discount: "20% OFF",
          rating: 4.7,
        },
        {
          title: "Máncora Beach Villa",
          location: "Peru",
          price: "From €159/night",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
          discount: "15% OFF",
          rating: 4.6,
        },
      ]
    },
    mountain: {
      title: "Mountain Retreats",
      description: "Andean adventures await",
      listings: [
        {
          title: "Andes Luxury Lodge",
          location: "Peru",
          price: "From €229/night",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
          discount: "30% OFF",
          rating: 4.9,
        },
        {
          title: "Patagonia Vista",
          location: "Argentina",
          price: "From €209/night",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
          discount: "25% OFF",
          rating: 4.8,
        },
        {
          title: "Sacred Valley Retreat",
          location: "Peru",
          price: "From €189/night",
          image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
          discount: "20% OFF",
          rating: 4.7,
        },
      ]
    },
    urban: {
      title: "Urban Experiences",
      description: "Vibrant city adventures",
      listings: [
        {
          title: "Buenos Aires Loft",
          location: "Argentina",
          price: "From €149/night",
          image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
          discount: "20% OFF",
          rating: 4.8,
        },
        {
          title: "Santiago Penthouse",
          location: "Chile",
          price: "From €169/night",
          image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
          discount: "15% OFF",
          rating: 4.7,
        },
        {
          title: "Lima Historic Suite",
          location: "Peru",
          price: "From €139/night",
          image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
          discount: "25% OFF",
          rating: 4.6,
        },
      ]
    }
  }
};