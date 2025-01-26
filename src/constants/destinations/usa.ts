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
      title: "The St. Regis Aspen Resort",
      location: "Aspen",
      price: "From $1,877/night",
      image: "/lovable-uploads/5d6b3d37-409e-46d8-880d-df95d68430e6.png",
      discount: "Luxury Stay",
      rating: 4.6,
      bookingLink: "https://booking.digitravels.io/url/84fb4bc3-c0fa-4171-9952-7940bf41010f?isPermanentLink=true"
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
      title: "Manhattan Penthouse",
      location: "New York",
      price: "From €499/night",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      discount: "20% OFF",
      rating: 4.7,
    },
  ],
};