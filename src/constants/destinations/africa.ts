import { Destination } from "@/types/destination";

export const africa: Destination = {
  title: "Africa",
  description: "Discover luxury amid breathtaking landscapes",
  listings: [
    {
      title: "SeVi Boutique Hotel",
      location: "Tanzania",
      price: "From €222,87/night",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f",
      discount: "save up to 60$/night",
      rating: 4.4,
      bookingLink: "https://booking.digitravels.io/url/eb01dfd6-cf84-4458-b090-f12c60f4c835?isPermanentLink=true"
    },
    {
      title: "Atlas Mountains Lodge",
      location: "Morocco",
      price: "From €159/night",
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6",
      discount: "25% OFF",
      rating: 4.7,
    },
    {
      title: "Cape Town Penthouse",
      location: "South Africa",
      price: "From €179/night",
      image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743",
      discount: "20% OFF",
      rating: 4.9,
    },
  ],
};
