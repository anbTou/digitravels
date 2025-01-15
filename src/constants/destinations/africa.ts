import { Continent } from "@/types/destination";

export const africa: Continent = {
  title: "Africa",
  sections: {
    beach: {
      title: "Beach Getaways",
      description: "Tropical paradise escapes",
      listings: [
        {
          title: "Zanzibar Resort",
          location: "Tanzania",
          price: "From €199/night",
          image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f",
          discount: "30% OFF",
          rating: 4.8,
        },
        {
          title: "Seychelles Villa",
          location: "Seychelles",
          price: "From €289/night",
          image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
          discount: "25% OFF",
          rating: 4.9,
        },
        {
          title: "Mauritius Beachfront",
          location: "Mauritius",
          price: "From €249/night",
          image: "https://images.unsplash.com/photo-1511316695145-4992006ffddb",
          discount: "20% OFF",
          rating: 4.7,
        },
      ]
    },
    mountain: {
      title: "Mountain Retreats",
      description: "Scenic mountain escapes",
      listings: [
        {
          title: "Atlas Mountains Lodge",
          location: "Morocco",
          price: "From €159/night",
          image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6",
          discount: "25% OFF",
          rating: 4.7,
        },
        {
          title: "Kilimanjaro View",
          location: "Tanzania",
          price: "From €179/night",
          image: "https://images.unsplash.com/photo-1621414050941-8f3ce3051a3b",
          discount: "20% OFF",
          rating: 4.8,
        },
        {
          title: "Simien Lodge",
          location: "Ethiopia",
          price: "From €149/night",
          image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5",
          discount: "15% OFF",
          rating: 4.6,
        },
      ]
    },
    urban: {
      title: "Urban Experiences",
      description: "City adventures",
      listings: [
        {
          title: "Cape Town Penthouse",
          location: "South Africa",
          price: "From €179/night",
          image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743",
          discount: "20% OFF",
          rating: 4.9,
        },
        {
          title: "Marrakech Riad",
          location: "Morocco",
          price: "From €169/night",
          image: "https://images.unsplash.com/photo-1572867717307-d02b46f2e7ba",
          discount: "15% OFF",
          rating: 4.8,
        },
        {
          title: "Cairo Apartment",
          location: "Egypt",
          price: "From €149/night",
          image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a",
          discount: "25% OFF",
          rating: 4.7,
        },
      ]
    }
  }
};