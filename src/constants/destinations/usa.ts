import { Destination } from "@/types/destination";

export const usa: Destination = {
  title: "United States",
  description: "Experience luxury across America's most stunning locations",
  listings: [
    {
      title: "Smyth Tribeca",
      location: "New York",
      price: "From $367/night",
      image: "/lovable-uploads/48ce484b-ff59-42b7-afd9-ebe7a0f2734b.png",
      discount: "Special Rate",
      rating: 4.4,
      bookingLink: "https://booking.digitravels.io/url/a551a976-382c-4049-9334-b08575557a86?isPermanentLink=true"
    },
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
