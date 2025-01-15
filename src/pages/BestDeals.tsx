import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

const categories = {
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
};

const BestDeals = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Black space above header */}
      <div className="h-16 bg-black w-full" />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Travel Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Discover Our Best Deals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Explore handpicked destinations with exclusive discounts
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Search className="mr-2 h-4 w-4" /> Search Deals
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        {Object.entries(categories).map(([continentKey, continent], index) => (
          <div key={continentKey} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{continent.title}</h2>
            </motion.div>

            {Object.entries(continent.sections).map(([sectionKey, section], sectionIndex) => (
              <div key={sectionKey} className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.listings.map((listing, listingIndex) => (
                    <motion.div
                      key={listingIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: listingIndex * 0.1 }}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-semibold text-primary">
                            {listing.discount}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {listing.title}
                          </h3>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                              {listing.rating}
                            </span>
                            <span className="text-yellow-400 ml-1">★</span>
                          </div>
                        </div>
                        <p className="flex items-center text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          {listing.location}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-gray-900">
                            {listing.price}
                          </span>
                          <Button variant="outline">View Deal</Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default BestDeals;
