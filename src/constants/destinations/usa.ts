import { Continent } from "@/types/destination";

export const usa: Continent = {
  title: "United States",
  sections: {
    beach: {
      title: "Beach Getaways",
      description: "Coastal escapes across America",
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
          title: "Miami Beachfront",
          location: "Florida",
          price: "From €299/night",
          image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f",
          discount: "20% OFF",
          rating: 4.8,
        },
        {
          title: "Malibu Ocean View",
          location: "California",
          price: "From €349/night",
          image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
          discount: "15% OFF",
          rating: 4.7,
        },
      ]
    },
    mountain: {
      title: "Mountain Retreats",
      description: "Mountain adventures and scenic views",
      listings: [
        {
          title: "Aspen Ski Lodge",
          location: "Colorado",
          price: "From €449/night",
          image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
          discount: "30% OFF",
          rating: 4.9,
        },
        {
          title: "Yellowstone Cabin",
          location: "Wyoming",
          price: "From €299/night",
          image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
          discount: "25% OFF",
          rating: 4.8,
        },
        {
          title: "Lake Tahoe Resort",
          location: "California",
          price: "From €379/night",
          image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
          discount: "20% OFF",
          rating: 4.7,
        },
      ]
    },
    urban: {
      title: "Urban Experiences",
      description: "City adventures and cultural hotspots",
      listings: [
        {
          title: "Manhattan Penthouse",
          location: "New York",
          price: "From €499/night",
          image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
          discount: "20% OFF",
          rating: 4.9,
        },
        {
          title: "Chicago Skyline Suite",
          location: "Illinois",
          price: "From €329/night",
          image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313",
          discount: "25% OFF",
          rating: 4.8,
        },
        {
          title: "San Francisco Bay View",
          location: "California",
          price: "From €399/night",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
          discount: "15% OFF",
          rating: 4.7,
        },
      ]
    }
  }
};