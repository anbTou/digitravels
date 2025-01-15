import { Categories } from "../types/destination";

export const categories: Categories = {
  europe: {
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
  },
  africa: {
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
  },
  southAmerica: {
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
  },

  japan: {
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
  },
  usa: {
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
  },
};
