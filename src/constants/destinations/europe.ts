import { Destination } from "@/types/destination";

export const europe: Destination = {
  title: "Europe",
  description: "Discover luxury stays across historic European destinations",
  listings: [
    {
      title: "Santorini Villa",
      location: "Greece",
      price: "From €299/night",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      discount: "25% OFF",
      rating: 4.9,
    },
    {
      title: "Swiss Alps Chalet",
      location: "Switzerland",
      price: "From €349/night",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      discount: "20% OFF",
      rating: 4.8,
    },
    {
      title: "Paris Apartment",
      location: "France",
      price: "From €199/night",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      discount: "30% OFF",
      rating: 4.7,
    },
  ],
};