import { Continent } from "@/types/destination";

export const europe: Continent = {
  title: "Europe",
  sections: {
    beach: {
      title: "Beach Getaways",
      description: "Mediterranean coastal paradises",
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
          title: "Amalfi Coast Resort",
          location: "Italy",
          price: "From €259/night",
          image: "https://images.unsplash.com/photo-1455587734955-081b22074882",
          discount: "20% OFF",
          rating: 4.8,
        },
        {
          title: "Mykonos Beachfront",
          location: "Greece",
          price: "From €279/night",
          image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
          discount: "15% OFF",
          rating: 4.7,
        },
      ]
    },
    mountain: {
      title: "Mountain Retreats",
      description: "Alpine adventures await",
      listings: [
        {
          title: "Swiss Alps Chalet",
          location: "Switzerland",
          price: "From €349/night",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
          discount: "15% OFF",
          rating: 4.9,
        },
        {
          title: "Dolomites Lodge",
          location: "Italy",
          price: "From €279/night",
          image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
          discount: "20% OFF",
          rating: 4.7,
        },
        {
          title: "Mont Blanc Retreat",
          location: "France",
          price: "From €299/night",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
          discount: "10% OFF",
          rating: 4.8,
        },
      ]
    },
    urban: {
      title: "Urban Experiences",
      description: "City life and culture",
      listings: [
        {
          title: "Paris Apartment",
          location: "France",
          price: "From €199/night",
          image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
          discount: "30% OFF",
          rating: 4.8,
        },
        {
          title: "Barcelona Loft",
          location: "Spain",
          price: "From €189/night",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
          discount: "20% OFF",
          rating: 4.9,
        },
        {
          title: "Amsterdam Canal House",
          location: "Netherlands",
          price: "From €229/night",
          image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017",
          discount: "15% OFF",
          rating: 4.8,
        },
      ]
    }
  }
};