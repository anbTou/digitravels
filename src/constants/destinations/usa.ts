import { Destination } from "@/types/destination";

export const usa: Destination = {
  title: "United States",
  description: "Experience luxury across America's most stunning locations",
  listings: [
    {
      title: "Hawaii Beach Resort",
      location: "Hawaii",
      price: "From €399/night",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      discount: "25% OFF",
      rating: 4.9,
    },
    {
      title: "Aspen Ski Lodge",
      location: "Colorado",
      price: "From €449/night",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      discount: "30% OFF",
      rating: 4.8,
    },
    {
      title: "Manhattan Penthouse",
      location: "New York",
      price: "From €499/night",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      discount: "20% OFF",
      rating: 4.7,
    },
  ],
};