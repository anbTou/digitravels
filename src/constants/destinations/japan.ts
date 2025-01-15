import { Continent } from "@/types/destination";

export const japan: Continent = {
  title: "Japan",
  sections: {
    beach: {
      title: "Beach Getaways",
      description: "Pristine coastal retreats",
      listings: [
        {
          title: "Okinawa Resort",
          location: "Okinawa",
          price: "From €299/night",
          image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e",
          discount: "25% OFF",
          rating: 4.9,
        },
        {
          title: "Ishigaki Paradise",
          location: "Okinawa",
          price: "From €279/night",
          image: "https://images.unsplash.com/photo-1587659901518-7020d4413085",
          discount: "20% OFF",
          rating: 4.8,
        },
        {
          title: "Miyakojima Beach Villa",
          location: "Okinawa",
          price: "From €259/night",
          image: "https://images.unsplash.com/photo-1542931287-023b922fa89b",
          discount: "15% OFF",
          rating: 4.7,
        },
      ]
    },
    mountain: {
      title: "Mountain Retreats",
      description: "Traditional mountain experiences",
      listings: [
        {
          title: "Mount Fuji View Inn",
          location: "Yamanashi",
          price: "From €249/night",
          image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65",
          discount: "20% OFF",
          rating: 4.9,
        },
        {
          title: "Hakuba Ski Lodge",
          location: "Nagano",
          price: "From €289/night",
          image: "https://images.unsplash.com/photo-1542031630-99647f0f3e54",
          discount: "15% OFF",
          rating: 4.8,
        },
        {
          title: "Nikko Mountain Ryokan",
          location: "Tochigi",
          price: "From €269/night",
          image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
          discount: "25% OFF",
          rating: 4.7,
        },
      ]
    },
    urban: {
      title: "Urban Experiences",
      description: "Modern city adventures",
      listings: [
        {
          title: "Tokyo Sky Suite",
          location: "Tokyo",
          price: "From €299/night",
          image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
          discount: "30% OFF",
          rating: 4.9,
        },
        {
          title: "Kyoto Traditional House",
          location: "Kyoto",
          price: "From €259/night",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
          discount: "20% OFF",
          rating: 4.8,
        },
        {
          title: "Osaka Downtown Apartment",
          location: "Osaka",
          price: "From €239/night",
          image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f",
          discount: "25% OFF",
          rating: 4.7,
        },
      ]
    }
  }
};